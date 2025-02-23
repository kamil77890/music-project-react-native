import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native";
import axios from "axios";
import { ServerIpContext } from "../contexts/ServerIpContext";
import { storeData, getData, deleteData } from "../localStorage/utils";
import { ThemeContext } from "../contexts/ThemeContext";
import { getStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const IpChecker = ({ serverIp: propServerIp, onFail }) => {
    const [loading, setLoading] = useState(false);
    const [inputIp, setInputIp] = useState(propServerIp || "");
    const [connectionStatus, setConnectionStatus] = useState(null);
    const { setServerIp } = useContext(ServerIpContext);
    const { theme } = useContext(ThemeContext);
    const styles = getStyles(theme);
    const navigation = useNavigation();

    useEffect(() => {
        const checkStoredIp = async () => {
            try {
                const storedIp = await getData();
                console.log("Stored IP:", storedIp);
                if (storedIp) {
                    const isValid = await checkServerConnection(storedIp);
                    if (isValid) {
                        storeData(storedIp);
                        setServerIp(storedIp);
                        navigation.navigate("Home")
                    } else {
                        // Delete the invalid IP from storage
                        deleteData();
                    }
                }
            } catch (error) {
                console.error("Error fetching stored IP:", error);
            }
        };

        checkStoredIp();
    }, [navigation]);

    const axiosInstance = axios.create({
        timeout: 3000,
    });

    const checkServerConnection = async (ip) => {
        try {
            const response = await axiosInstance.get(`${ip}/`);
            return response.status === 200;
        } catch (error) {
            console.error("Connection error:", error);
            return false;
        }
    };

    const checkConnection = async () => {
        setLoading(true);
        setConnectionStatus(null);

        const isValid = await checkServerConnection(inputIp);

        if (isValid) {
            storeData(inputIp);
            setServerIp(inputIp);
            setConnectionStatus("success");
            navigation.replace("Home"); // Navigate to main page on success
        } else {
            onFail();
            setConnectionStatus("error");
            // Delete the invalid IP from storage
            deleteData();
        }

        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Server IP Address:</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g., http://192.168.1.100:5000"
                placeholderTextColor="#AAAAAA"
                value={inputIp}
                onChangeText={setInputIp}
                keyboardType="default"
            />
            <Button title="Check Connection" onPress={checkConnection} />

            {loading && <ActivityIndicator size="large" color="#00ff00" />}
            {connectionStatus === "success" && (
                <Text style={styles.success}>✅ Connected successfully!</Text>
            )}
            {connectionStatus === "error" && (
                <Text style={styles.error}>❌ Failed to connect. IP removed.</Text>
            )}
        </View>
    );
};

export default IpChecker;

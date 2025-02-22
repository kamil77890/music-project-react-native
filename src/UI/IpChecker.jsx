import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";
import { ServerIpContext } from "../contexts/ServerIpContext";
import { getServerIpFromStorage, setServerIpToStorage, clearServerIpFromStorage } from "../localStorage/utils";
import { styles } from "../styles/ipinput.js";

const IpChecker = ({ serverIp: propServerIp, onFail, navigation }) => {
    const [loading, setLoading] = useState(false);
    const [inputIp, setInputIp] = useState(propServerIp || "");
    const [connectionStatus, setConnectionStatus] = useState(null);

    const { setServerIp } = useContext(ServerIpContext);

    useEffect(() => {
        const checkStoredIp = async () => {
            try {
                const storedIp = await getServerIpFromStorage();
                console.log("Stored IP:", storedIp);
                if (storedIp) {
                    const isValid = await checkServerConnection(storedIp);
                    if (isValid) {
                        setServerIpToStorage(storedIp);
                        setServerIp(storedIp);
                        navigation.replace("Home"); // Navigate to main page automatically
                    } else {
                        clearServerIpFromStorage();
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
            setServerIpToStorage(inputIp);
            setServerIp(inputIp);
            setConnectionStatus("success");
            navigation.replace("Home"); // Navigate to main page on success
        } else {
            onFail();
            setConnectionStatus("error");
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
            {connectionStatus === "success" && <Text style={styles.success}>✅ Connected successfully!</Text>}
            {connectionStatus === "error" && <Text style={styles.error}>❌ Failed to connect. IP removed.</Text>}
        </View>
    );
};

export default IpChecker;

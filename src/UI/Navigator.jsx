import { MdLibraryMusic } from "react-icons/md";
import { View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "../styles/navigator"

const Nav = () => {
    const navigation = useNavigation();

    return <View style={styles.container}>
        <Button title="Button 1" onPress={() => navigation.navigate("Music")} />
        <TouchableOpacity onPress={() => navigation.navigate("Music")}>
            <MdLibraryMusic size={30} />
        </TouchableOpacity>
        <Button title="Button 2" onPress={() => navigation.navigate("Music")} />
    </View>
}

export default Nav
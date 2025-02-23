import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "serverIp";

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, value);
    console.log("IP stored:", value);
  } catch (e) {
    console.error("Error storing IP:", e);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return value;
  } catch (e) {
    console.error("Error reading IP:", e);
    return null;
  }
};

export const deleteData = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log("Stored IP deleted");
  } catch (e) {
    console.error("Error deleting IP:", e);
  }
};

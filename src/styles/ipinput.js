import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212",
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
    color: "#FFFFFF",
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "#555555",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "#FFFFFF",
    backgroundColor: "#1E1E1E",
  },
  success: {
    color: "#00ff00",
    fontSize: 16,
    marginTop: 10,
  },
  error: {
    color: "#ff3333",
    fontSize: 16,
    marginTop: 10,
  },
});

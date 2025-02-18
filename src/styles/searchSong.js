import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "0%",
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: "bold",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: "90%",
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
  },
  searchIcon: {
    fontSize: 24,
  },
  light: {
    backgroundColor: "#fff",
    color: "#000",
  },
  dark: {
    backgroundColor: "#333",
    color: "#fff",
  },
});

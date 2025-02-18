import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#1A1A1A",
    width: 350,
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 18,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E0E0E0",
    marginBottom: 6,
  },
  duration: {
    fontSize: 12,
    color: "#BBBBBB",
  },
  liked: {
    fontSize: 12,
    color: "#33BBCF",
    marginBottom: 6,
  },
  playButton: {
    backgroundColor: "#33BBCF",
    padding: 12,
    borderRadius: 10,
  },
  list: {
    backgroundColor: "#0F0F0F",
  },
  pauseButton: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  pauseButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

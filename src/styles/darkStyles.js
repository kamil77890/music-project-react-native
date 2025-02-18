import { StyleSheet, Dimensions } from "react-native";

// Get screen width and height
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    width: width * 1,
    height: 1000,
    color: "white",
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: width * 0.05, // 5% of the screen width for padding
    marginVertical: 10,
    marginHorizontal: width * 0.05, // 5% of the screen width for margin
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.9, // Card width is 90% of screen width
  },
  thumbnail: {
    width: width * 0.2, // 30% of screen width
    height: height * 0.1, // 15% of screen height
    borderRadius: 10,
    marginRight: width * 0.05, // 5% of screen width for margin
  },
  details: {
    width: width * 0.3, // 50% of screen width
    justifyContent: "center",
  },
  title: {
    fontSize: width * 0.034, // Font size relative to screen width
    fontWeight: "bold",
    color: "#E0E0E0",
    marginBottom: 6,
  },
  duration: {
    fontSize: width * 0.02, // Font size relative to screen width
    color: "#BBBBBB",
  },
  liked: {
    fontSize: width * 0.0222, // Font size relative to screen width
    color: "#33BBCF",
    marginBottom: 6,
  },
  playButton: {
    backgroundColor: "#33BBCF",
    marginLeft: width * 0.02, // 2% of screen width for padding

    paddingVertical: height * 0.013, // Vertical padding based on screen height
    paddingHorizontal: width * 0.07, // Horizontal padding based on screen width
    borderRadius: 10,
  },
  rePlayButton: {
    backgroundColor: "#b803ff",
    marginLeft: width * 0.02, // 2% of screen width for padding

    paddingVertical: height * 0.013, // Vertical padding based on screen height
    paddingHorizontal: width * 0.07, // Horizontal padding based on screen width
    borderRadius: 10,
  },
  list: {
    backgroundColor: "#0F0F0F",
  },
  pauseButton: {
    position: "absolute",
    bottom: height * 0.05, // Position the button 5% from the bottom
    left: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingVertical: height * 0.02, // Vertical padding based on screen height
    paddingHorizontal: width * 0.1, // Horizontal padding based on screen width
    borderRadius: 30,
  },
  pauseButtonText: {
    color: "white",
    fontSize: width * 0.05, // Font size based on screen width
    fontWeight: "bold",
  },
  kułko: {
    color: "yellow",
    fontSize: 16,
  },
  reButton: {
    backgroundColor: "#D00CE1",
  },
});

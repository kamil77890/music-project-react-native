import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const getStyles = (theme) => {
  const isDark = theme === "dark";

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDark ? "#121212" : "#F1F4FF",
    },

    title: {
      fontSize: width * 0.06,
      fontWeight: "bold",
      color: isDark ? "#E0E0E0" : "#1F1C2E",
      marginVertical: 20,
      textAlign: "center",
    },
    // Improved input style
    input: {
      height: 50,
      width: width * 0.6,
      borderColor: isDark ? "#555555" : "#ccc",
      borderWidth: 1,
      paddingHorizontal: 15,
      borderRadius: 12,
      color: isDark ? "#FFFFFF" : "#000000",
      backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF",
      fontSize: 16,
      marginRight: 10,
    },
    // Container for search box that holds the input and button
    searchBox: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      padding: 10,
      width: width * 0.85,
      backgroundColor: isDark ? "#1f2a5e" : "#D3DFFF",
      marginBottom: 20,
    },
    // Style for the button inside searchBox
    buttonS: {
      backgroundColor: isDark ? "#B335B3" : "#D3DFF0",
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 20,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: isDark ? "#000" : "#aaa",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
    // Style for text inside buttonS if needed
    buttonSText: {
      fontSize: 16,
      color: isDark ? "#FFF" : "#333",
      fontWeight: "600",
    },
    // Standard button style for other buttons

    footer: {
      position: "absolute",
      bottom: 0,
      width: width,
      backgroundColor: isDark ? "#001033" : "#EAEFFF",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: height * 0.06,
    },
    searchIcon: {
      fontSize: 24,
      color: isDark ? "#FFFFFF" : "#000000",
    },
    togglePlay: {
      height: 40,
      backgroundColor: isDark ? "#1B4BA9" : "#D3DFFF",
    },
    reTogglePlay: {
      height: 40,
      backgroundColor: isDark ? "#B335B3" : "#D3DFF0",
    },
    success: {
      color: "#00ff00",
      fontSize: 16,
      marginTop: 10,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: isDark ? "#2C2C2C" : "#FFF",
      borderRadius: 16,
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 3,
      width: width * 0.9,
    },
    // Thumbnail image styled with fixed dimensions and rounded corners.
    thumbnail: {
      width: width * 0.2,
      height: width * 0.2,
      borderRadius: 12,
      marginRight: 15,
    },
    // Container for the song details.
    details: {
      flex: 1,
      justifyContent: "center",
    },
    // Title styled with larger font and clear contrast.
    title: {
      fontSize: 18,
      fontWeight: "600",
      color: isDark ? "#F1F1F1" : "#333",
      marginBottom: 4,
    },
    // Duration styled with slightly smaller font.
    duration: {
      fontSize: 14,
      color: isDark ? "#CCCCCC" : "#666",
      marginBottom: 4,
    },
    // Liked text styled to differentiate liked songs.
    liked: {
      fontSize: 14,
      fontStyle: "italic",
      color: isDark ? "#FF6F61" : "#FF3366",
    },
    // Button style for the Play button when inactive.
    button: {
      backgroundColor: isDark ? "#1B4BA9" : "#3B82F6",
      borderColor: isDark ? "#FFF" : "#DDD",

      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginLeft: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    // Button style when replay is active (e.g., toggled state).
    reButton: {
      backgroundColor: isDark ? "#B335B3" : "#8B5CF6",
      borderWidth: 2,
      borderColor: isDark ? "#FFF" : "#DDD",
      borderRadius: 12,
      marginLeft: 20,

      paddingVertical: 14,
      paddingHorizontal: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    error: {
      color: "#ff3333",
      fontSize: 16,
      marginTop: 10,
    },
  });
};

import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";

let currentSound = null;

const downloadSong = async (serverIp, id, name) => {
  const folderUri = `${FileSystem.documentDirectory}songs/`;
  const fileUri = `${folderUri}${name}.mp3`;
  console.log("Server IP:", serverIp);

  const url = `${serverIp}/songs/${id}.mp3`;

  // Ensure folder exists
  const folderInfo = await FileSystem.getInfoAsync(folderUri);
  if (!folderInfo.exists) {
    await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true });
  }

  // Download the file if it doesn't exist
  const fileInfo = await FileSystem.getInfoAsync(fileUri);
  if (!fileInfo.exists) {
    const downloadResumable = FileSystem.createDownloadResumable(url, fileUri);
    await downloadResumable.downloadAsync();
    console.log(`Downloaded file to: ${fileUri}`);
  } else {
    console.log("File already exists, skipping download");
  }

  return fileUri;
};

export const playSound = async (serverIp, id, name, rePlay) => {
  console.log(id, name, rePlay);
  try {
    const fileUri = await downloadSong(serverIp, id, name);
    if (currentSound) {
      await currentSound.stopAsync();
    }
    // Create and play the new sound
    const { sound } = await Audio.Sound.createAsync({ uri: fileUri });
    currentSound = sound;
    if (rePlay) {
      await currentSound.setIsLoopingAsync(true);
    }
    await currentSound.playAsync();
  } catch (error) {
    console.error("Error playing sound:", error);
    throw error;
  }
};

export const pauseSound = async () => {
  if (currentSound) {
    await currentSound.pauseAsync();
  }
};

export const stopSound = async () => {
  if (currentSound) {
    await currentSound.stopAsync();
  }
};

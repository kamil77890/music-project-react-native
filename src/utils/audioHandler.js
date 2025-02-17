import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";

let currentSound = null;

// Funkcja pobierająca i zapisująca plik
const downloadSong = async (id) => {
  const folderUri = `${FileSystem.documentDirectory}songs/`;
  const fileUri = `${folderUri}${id}.mp3`;
  const url = `http://192.168.141.1:5000/songs/${id}.mp3`;

  // Tworzenie folderu 'songs', jeśli nie istnieje
  const folderInfo = await FileSystem.getInfoAsync(folderUri);
  if (!folderInfo.exists) {
    await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true });
    console.log("Utworzono folder: songs");
  }

  // Pobieranie pliku, jeśli nie istnieje
  const fileInfo = await FileSystem.getInfoAsync(fileUri);
  if (!fileInfo.exists) {
    console.log("Plik nie istnieje, pobieranie...");
    const download = FileSystem.createDownloadResumable(url, fileUri);
    await download.downloadAsync();
    console.log(`Pobrano plik do: ${fileUri}`);
  } else {
    console.log("Plik już istnieje, pomijam pobieranie.");
  }

  return fileUri;
};

// Funkcja odtwarzania dźwięku
export const playSound = async (id) => {
  const fileUri = await downloadSong(id);

  try {
    if (currentSound) {
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
    }

    const { sound } = await Audio.Sound.createAsync({ uri: fileUri });
    currentSound = sound;
    await currentSound.playAsync();
    console.log(`Odtwarzanie pliku: ${fileUri}`);
  } catch (error) {
    console.error("Błąd odtwarzania dźwięku:", error);
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

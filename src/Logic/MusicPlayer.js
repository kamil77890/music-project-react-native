import { Audio } from "expo-av";
import { useContext } from "react";
import { ServerIpContext } from "../contexts/ServerIpContext";

let currentSound = null;

export function usePlaySound() {
  const { serverIp } = useContext(ServerIpContext);
  const API_URL = `http://${serverIp}:5000`;

  async function playSound(videoId) {
    if (currentSound) {
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
    }

    try {
      const { sound } = await Audio.Sound.createAsync({
        uri: `${API_URL}/mp3?videoId=${videoId}&id=${videoId}`,
      });

      currentSound = sound;
      await currentSound.playAsync();
    } catch (error) {
      console.error("Błąd odtwarzania dźwięku:", error);
    }
  }

  return { playSound };
}

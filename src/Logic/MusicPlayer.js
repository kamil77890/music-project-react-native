import { Audio } from "expo-av";


export async function playSound(url) {
  const { sound } = await Audio.Sound.createAsync({ uri: url });
  await sound.playAsync();
}

export async function playSound(videoId) {
  if (currentSound) {
    await currentSound.stopAsync();
  }

  const { sound } = await Audio.Sound.createAsync({
    uri: `${API_URL}/mp3?videoId=${videoId}&id=${videoId}`,
  });

  currentSound = sound;
  await currentSound.playAsync();
}

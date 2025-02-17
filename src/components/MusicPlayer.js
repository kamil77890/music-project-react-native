import { Audio } from "expo-av";
export async function playSound(url) {
  const { sound } = await Audio.Sound.createAsync({ uri: url });
  await sound.playAsync();
}

export async function playSound(videoId) {
  // Jeśli istnieje obecnie odtwarzany dźwięk, zatrzymaj i załaduj go ponownie
  if (currentSound) {
    await currentSound.stopAsync();
    await currentSound.unloadAsync();
  }

  // Tworzymy i odtwarzamy nową piosenkę
  const { sound } = await Audio.Sound.createAsync({
    uri: `${API_URL}/mp3?videoId=${videoId}&id=${videoId}`,
  });

  // Ustawiamy currentSound na odtwarzany dźwięk
  currentSound = sound;
  await currentSound.playAsync();
}

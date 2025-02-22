
export const getServerIpFromStorage = async () => {
  return localStorage.getItem("serverIp");
};

export const setServerIpToStorage = async (serverIp) => {
  localStorage.setItem("serverIp", serverIp);
};

export const clearServerIpFromStorage = async () => {
  localStorage.removeItem("serverIp");
};

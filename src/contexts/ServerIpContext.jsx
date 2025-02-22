import React, { createContext, useState } from 'react';

export const ServerIpContext = createContext();

export const ServerIpProvider = ({ children }) => {
  const [serverIp, setServerIp] = useState(null);

  return (
    <ServerIpContext.Provider value={{ serverIp, setServerIp }}>
      {children}
    </ServerIpContext.Provider>
  );
};

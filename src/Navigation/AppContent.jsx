import React, { useContext } from 'react';
import { ServerIpContext } from '../contexts/ServerIpContext';
import IpChecker from '../UI/IpChecker';
import MainNavigator from './MainNavigator';

const AppContent = () => {
    const { serverIp, setServerIp } = useContext(ServerIpContext);

    return (
        serverIp ? (
            <MainNavigator />
        ) : (
            <IpChecker serverIp={serverIp} onFail={() => setServerIp("")} />
        )
    );
};

export default AppContent;

import { useState, useEffect, useMemo } from "react";

import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

interface SignalRConnection {
  Connection: HubConnection | null;
  ConnectionId: string | null | undefined;
  ConnectionReady: boolean;
}

export const useSignalRConnection = (url: string): SignalRConnection => {
  const [connectionId, setConnectionId] = useState<string | null>();
  const [connectionReady, setConnectionReady] = useState<boolean>(false);

  const connection = useMemo(() => {
    if (url) {
      //establish connection with hub
      const conn = new HubConnectionBuilder()
        .withUrl(url)
        .configureLogging(LogLevel.Information)
        .build();

      return conn;
    }

    throw new Error("Url not provided!");
  }, [url]);

  useEffect(() => {
    return () => {
      if (isConnected()) {
        connection.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (connection) {
      startConnection();
    }
  }, [connection]);

  const setConnectionIdHandler = (conn: HubConnection) => {
    const connId = conn.connectionId;
    setConnectionId(connId);
  };

  const isConnected = (): boolean => {
    return connection.state === "Connected";
  };

  const startConnection = async () => {
    if (!isConnected()) {
      try {
        await connection.start().then(() => {
          setConnectionIdHandler(connection);
          setConnectionReady(true);
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  return {
    Connection: connection,
    ConnectionId: connectionId,
    ConnectionReady: connectionReady,
  };
};

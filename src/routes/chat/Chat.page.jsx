import Lobby from "../../components/Chat/Lobby";
import { HubConnectionBuilder, LogLevel, HttpTransportType } from '@microsoft/signalr'
import { useState } from "react";
import Chat from "../../components/Chat/Chat";

function ChatPage() {
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState()
    const [errorMsg, setErrorMessage] = useState()
    const [connectedUsers, setConnectedUsers] = useState()
    const [roomTitle, setRoomTitle] = useState()

    const joinRoom = async (username, room) => {
        try {
            //establish connection with hub
            const connection = new HubConnectionBuilder()
                .withUrl('http://192.168.0.17:5058/chat', {
                    skipNegotiation: true,
                    transport: HttpTransportType.WebSockets
                })
                .configureLogging(LogLevel.Information)
                .build();

            setUser(username)
            setRoomTitle(room)
            //name of the event that we made at the backend hub
            connection.on('RecieveMessage', (user, message) => {
                const newMessage = { user, message }
                setMessages(oldMessages => [...oldMessages, newMessage])
            })
            connection.on('ConnectedUsers', (users) => {
                setConnectedUsers(users)
            })
            connection.onclose(e => {
                setConnection()
                setMessages([])
                setConnectedUsers()
            })
            await connection.start();
            //there we calling endpoint of the hub JoinRoom
            //JoinRoom is the name of the method on the hub
            await connection.invoke('JoinRoom', { username, room })

            setConnection(connection)

        } catch (err) {
            alert(err)
        }
    }

    const sendMessageHandler = async (message) => {
        await connection.invoke('SendMessage', message)
    }

    const closeConnectionHandler = () => {
        try {
            connection.stop();
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div style={{
            width: '100%', display: 'flex', justifyContent: 'center',
            alignItems: 'center', flexDirection: 'column',
            rowGap: '1rem'
        }}>
            <h1 style={{ marginBottom: '1rem' }}>Welcome to chat page</h1>
            {
                connection
                    ?
                    <Chat
                        room={roomTitle}
                        user={user} connectedUsers={connectedUsers}
                        messages={messages}
                        sendMessage={sendMessageHandler} closeConnection={closeConnectionHandler} />
                    :
                    <Lobby errorMsg={errorMsg} joinRoom={joinRoom} />
            }

        </div>
    );
}

export default ChatPage;
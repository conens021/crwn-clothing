import Button from "../UI/Button/Button.component";
import ChatContainer from "./ChatContainer";
import ConnectedUsers from "./ConnectedUsers";
import MessageForm from "./MessageForm";

function Chat({ room = '', messages = [], sendMessage, user = '', connectedUsers, closeConnection = () => { } }) {

    return (
        <div style={{ width: '90%' }}>
            <h2 >Chat room: {room}</h2>
            <div style={{ display: 'flex', columnGap: '1rem', alignItems: 'stretch' }}>
                <ConnectedUsers users={connectedUsers} />
                <div style={{ flex: '1' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'center', rowGap: '.7rem' }}>
                        <Button type='submit' variant='filled' color='danger' size='small' onClick={closeConnection}>Leave room</Button>
                    </div>
                    <ChatContainer user={user} messages={messages} />
                    <MessageForm sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    );
}

export default Chat;    
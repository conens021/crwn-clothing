import { useEffect, createRef } from "react";
import Message from "./Message";

function ChatContainer({ messages = [], user }) {
    const messagesEndRef = createRef();


    useEffect(() => {
        scrollToBottom()
    }, [messages])


    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div style={{
            backgroundColor: '#2B2A33', width: '100%',
            height: '60vh', padding: '2rem 0',
            display: 'flex', flexDirection: 'column', rowGap: '2rem', alignItems: 'flex-end',
            paddingRight: '2rem', marginBottom: '1rem', overflowY: 'scroll'
        }}>
            {messages.map(message => (
                <Message user={user} message={message} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default ChatContainer;
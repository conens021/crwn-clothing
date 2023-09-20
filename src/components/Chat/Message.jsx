function Message({ message = {}, user = '' }) {

    const messageColor = (message.user === 'Chat Bot' ? '#f5450a' : (message.user === user ? '#3498db' : '#54ac1a'))

    const userText = message.user === user ? 'You' : message.user

    return (
        <div style={{ position: 'relative', backgroundColor: messageColor, color: '#f3f3f3', borderRadius: '10px', padding: '0.5rem 1rem' }}>
            <span>{message.message}</span>
            <span style={{ position: 'relative', bottom: '-2rem', fontSize: '.8rem' }}>{userText}</span>
        </div>
    );
}

export default Message;
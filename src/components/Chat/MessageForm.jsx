import { useState } from "react";
import Button from "../UI/Button/Button.component";
import TextInput from "../UI/TextInput/TextInput.component";

function MessageForm({ sendMessage = () => { } }) {

    const [message, setMessage] = useState('')

    const sendMessageHandler = (event) => {
        event.preventDefault()

        sendMessage(message)
        setMessage('')
    }

    const messageChangeHandler = (event) => {
        setMessage(event.target.value)
    }

    return (
        <form onSubmit={sendMessageHandler}
            style={{ display: 'flex', justifyContent: 'flex-end',  columnGap: '1rem', marginBottom: '1rem' }}>
            <TextInput
                value={message}
                id='chat-message'
                type='text'
                name='message'
                label='Message'
                required
                onInputChange={messageChangeHandler} />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', rowGap: '.7rem' }}>
                <Button type='submit' variant='filled' color='info' size='small'>Send</Button>
            </div>
        </form>
    );
}

export default MessageForm;
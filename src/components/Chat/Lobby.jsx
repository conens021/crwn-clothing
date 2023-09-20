import { useState } from "react";
import Button from "../UI/Button/Button.component";
import FormError from "../UI/FormError/FormError.component";
import TextInput from "../UI/TextInput/TextInput.component";

function Lobby({ joinRoom = () => { } ,errorMsg}) {
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')

    const joinRoomHandler = event => {
        event.preventDefault()

        joinRoom(username, room)
    }

    return (
        <form onSubmit={joinRoomHandler}
            style={{ display: 'flex', flexDirection: 'column', rowGap: '3rem', marginBottom: '1rem' }}>
            <TextInput
                value={username}
                id='chat-username'
                type='text'
                name='username'
                label='Username'
                required
                onInputChange={(event) => { setUsername(event.target.value) }} />
            <TextInput
                value={room}
                type='text'
                name='room'
                label='Room'
                required
                onInputChange={(event) => { setRoom(event.target.value) }} />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', rowGap: '.7rem' }}>
                {errorMsg && <FormError errorMsg={errorMsg} />}
                <Button type='submit' variant='filled' color='primary' size='large'>Join</Button>

            </div>
        </form>
    );
}

export default Lobby;
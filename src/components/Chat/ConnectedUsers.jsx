function ConnectedUsers({ users }) {
    return (
        <div style={{
            backgroundColor: '#2B2A33', color: 'white',
            width: '250px', padding: '1rem', display: 'flex',
            flexDirection: 'column', alignItems: 'center'
        }}>
            <h3 style={{marginBottom:'1rem'}}>Connected users</h3>
            <ul style={{listStyle:'none'}}>
                {users && users.map(user => (<li style={{color:'greenyellow'}}>{user}</li>))}
            </ul>
        </div>
    );
}

export default ConnectedUsers;
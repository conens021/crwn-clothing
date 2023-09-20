function ComponentTitle({ title = '', subtitle = '' }) {
    return (
        <div className='title-box' style={{ marginBottom: '4rem' }}>
            <h2 className='form-title' style={{ marginBottom: ".5rem" }}>{title}</h2>
            <h3 className='form-title' style={{color:'gray',fontWeight:'300'}}>{subtitle}</h3>
        </div>
    );
}

export default ComponentTitle;
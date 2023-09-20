import './FormError.styles.scss'

function FormError({ errorMsg }) {
    return (
        <div className='form-error'>{errorMsg}</div>
    );
}

export default FormError;
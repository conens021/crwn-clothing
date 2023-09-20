function PasswordStrengthText({ strengthValue = {} }) {

    return (
        <div style={{ color: strengthValue.color }}>{strengthValue.label}</div>
    );
}

export default PasswordStrengthText;
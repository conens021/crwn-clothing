import {
    PasswordRequirementsContainer,
    PasswordRequirementsItem,
    PasswordRequirementsList
} from './PasswordRequirements.styles'

function PassowrdRequirements({ allFieldsValid, requirements = [] }) {

    return (
        <PasswordRequirementsContainer allValid={allFieldsValid}>
            <p>Password must contains at least:</p>
            <PasswordRequirementsList >
                {requirements.map(req => (
                    <PasswordRequirementsItem key={req.id} valid={req.valid}>
                        {req.label}
                    </PasswordRequirementsItem>
                ))}
            </PasswordRequirementsList>
        </PasswordRequirementsContainer>
    );
}

export default PassowrdRequirements;

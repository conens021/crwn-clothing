import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { colors } from "../../../../styles/colors";

function FilterIcon({ color = 'primary', mode = 'default' }) {
    const iconColor = colors[color][mode]

    return (
        <FontAwesomeIcon
            icon={faFilter}
            color={iconColor} />
    );
}

export default FilterIcon;
import { colors } from "../../styles/colors";
import ReactLoading from 'react-loading';

function ComponentLoading({ color = 'primary', colorMode = 'default', height = '60px', width = '60px' }) {
    const loadingColor = colors[color][colorMode]

    return (
        <ReactLoading type={'bars'} color={loadingColor} height={height} width={width} />
    );
}

export default ComponentLoading;
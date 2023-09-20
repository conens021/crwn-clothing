import ReactLoading from 'react-loading';
import { colors } from '../../styles/colors';
import { AppLoadingContainer } from './AppLoadingContainer';

function AppLoading() {
    const backgroundColor = colors.light.default
    const primaryColor = colors.primary.default

    return (
        <AppLoadingContainer backgroundColor={backgroundColor}>
            <ReactLoading type={'bars'} color={primaryColor} height={'60px'} width={'60px'} />
        </AppLoadingContainer>
    );
}

export default AppLoading;
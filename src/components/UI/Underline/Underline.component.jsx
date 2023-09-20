import { colors } from "../../../styles/colors";
import { UnderlineContainer } from "./UnderlineContainer";

function Underline({ children, height = '8px' }) {
    const color = colors.secondary.default

    const getTitleArray = () => {
        const words = children.split(' ')

        return words.map((word, index) => {

            if (index === 0) {
                return (<span>
                    <UnderlineContainer key={index} first color={color} height={height}>
                        {word}{' '}
                    </UnderlineContainer>
                </span>)
            }

            if (index === words.length - 1) {
                return (<span>
                    <UnderlineContainer key={index} last color={color} height={height}>
                        {word}{' '}
                    </UnderlineContainer>
                </span>)
            }

            return (<span>
                <UnderlineContainer key={index} color={color} height={height}>
                    {word}{' '}
                </UnderlineContainer>
            </span>)


        })
    }

    return (
        <>
            {getTitleArray()}
        </>
    );
}

export default Underline;
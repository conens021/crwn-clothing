import styled from "styled-components";

export const BaseSkeleton = styled.div`
    background-color :  #5c5c5c;
    width : ${props => props.width};
    height : ${props => props.height};

    animation-name : blink;
    animation-duration : 1.4s;
    animation-timing-function : ease-in;
    animation-iteration-count : infinite;

    @keyframes blink {
        0% {
                opacity: .75;
            }

            50% {
                opacity: 1;
            }

            100% {
                opacity: .75;
            }
        }
`
export const TextSkeleton = styled(BaseSkeleton)`
        border-radius: 5px;
        display:inline-block;
`

export const CircleSkeleton = styled(BaseSkeleton)`
        border-radius : 50%;
`


import '../../../styles/animations.scss'
import { BaseSkeleton, CircleSkeleton, TextSkeleton } from './Skeleton.styles'

function Skeleton({ type = 'default', height, width, style = {} }) {

    const SKELETON_TYPES = {
        baseSkeleton: 'default',
        textSkeleton: 'text',
        circleSkeleton: 'circle'
    }

    const getSkeleton = (skeletonType = SKELETON_TYPES.baseSkeleton) => (
        {
            [SKELETON_TYPES.baseSkeleton]: BaseSkeleton,
            [SKELETON_TYPES.textSkeleton]: TextSkeleton,
            [SKELETON_TYPES.circleSkeleton]: CircleSkeleton
        }[skeletonType]
    )

    const CustomSkeleton = getSkeleton(type)

    return (
        <CustomSkeleton height={height} width={width} style={style} />
    );
}


export default Skeleton;
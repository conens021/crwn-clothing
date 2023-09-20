import Skeleton from "../UI/Skeleton/Skeleton.component";

function EmptyItems({ size = 0, itemWidth = '', type = 'default', itemHeight = '', itemStyle }) {
    return (
        <>
            {Array(size).fill().map((item, index) =>
                (<Skeleton key={index} type={type} height={itemHeight} width={itemWidth} style={itemStyle} />))}
        </>
    );
}

export default EmptyItems;
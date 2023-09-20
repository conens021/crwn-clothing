import EmptyItems from "../../EmptyItems/EmptyItems.component";
import { GridItemsContainer } from "../../UI/GridItems/GridItems.styles";
import Skeleton from "../../UI/Skeleton/Skeleton.component";
import { CategoryGridContainer } from "./CategoryGrid.styles";

function EmptyCategory({ component = 'h1' }) {
    return (
        <CategoryGridContainer>
            {
                component === 'h1' ?
                    <Skeleton
                        type='text'
                        height='2rem'
                        width={'150px'}
                        style={{ marginBottom: '1rem' }}
                    />
                    :
                    <Skeleton
                        type='text'
                        height='1.4rem'
                        width='150px'
                        style={{ marginBottom: '1rem' }}
                    />
            }
            <GridItemsContainer>
                <EmptyItems size={4} itemHeight={'100%'} itemWidth={'100%'} />
            </GridItemsContainer>
        </CategoryGridContainer>
    )
}

export default EmptyCategory;
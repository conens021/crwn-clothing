import { Link } from "react-router-dom";
import EmptyItems from "../../EmptyItems/EmptyItems.component";
import ProductCard from "../../Product/ProductCard/ProductCard.component";
import { GridItemsContainer } from "../../UI/GridItems/GridItems.styles";
import Skeleton from "../../UI/Skeleton/Skeleton.component";
import Typography from "../../UI/Typography/Typography.component";
import Underline from "../../UI/Underline/Underline.component";
import { CategoryGridContainer } from "./CategoryGrid.styles";

function Category({ component = 'h1', category = {}, products = [] }) {
    const { title: categoryTitle } = category

    return (
        <CategoryGridContainer>
            {
                component === 'h1' ?
                    <Typography component="h1">{categoryTitle}</Typography>
                    :
                    <Link to={`/shop/${categoryTitle}`}>
                        <Typography
                            component="h2">
                            <Underline>
                                {categoryTitle}
                            </Underline>
                        </Typography>
                    </Link>
            }
            <GridItemsContainer>
                {
                    (products && category) ?
                        products.map(product => {
                            return (<ProductCard key={product.id} product={product} />)
                        })
                        :
                        <EmptyItems size={4} itemHeight={'100%'} itemWidth={'100%'} />
                }
            </GridItemsContainer>
        </CategoryGridContainer>
    );
}

export default Category;
import { useDispatch, useSelector } from "react-redux";
import { productsSorting } from "../../../../constants/sorting";
import { selectProductsSorting } from "../../../../store/products/productSelector";
import { setCategoryProductsSorting } from "../../../../store/products/productSlice";
import Select from '../../../UI/Select/Select.component'
import SelectOption from "../../../UI/SelectOption/SelectOption.component";
import { ProductSortingContainer } from "./ProductSorting.styles";

function ProductSorting() {
    const currentProdctSorting = useSelector(selectProductsSorting)
    const dispatch = useDispatch()

    const sortingChangeHandler = (event) => {
        const value = event.target.value
        const sorting = productsSorting[value]

        dispatch(setCategoryProductsSorting(sorting))
    }

    return (
        <ProductSortingContainer>
            <span>
                Sort by:
            </span>
            <Select
                value={currentProdctSorting.value}
                onSelectChange={sortingChangeHandler}
                name='sorting'
                id='products-sorting'>
                <SelectOption value='newest'>Newest</SelectOption>
                <SelectOption value='cheapest'>Chepeast</SelectOption>
                <SelectOption value='most-expensive'>Most Expensive</SelectOption>
            </Select>
        </ProductSortingContainer>
    );
}

export default ProductSorting;
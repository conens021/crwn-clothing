import { useDispatch, useSelector } from "react-redux";
import { selectCheckedFilters, selectProductFilter }
    from "../../../../../store/products/ProductFilter/productsFilterSelector";
import { resetFilters, setFilersConfirmed, setFilterModalVissible }
    from "../../../../../store/products/ProductFilter/productsFilterSlice";
import { clearCategoryProductsFilters, setCategoryProductsFilters }
    from "../../../../../store/products/productSlice";
import Button from "../../../../UI/Button/Button.component";

function ProductFilterFooter() {
    const dispatch = useDispatch()

    const clearFiltersHandler = () => {
        dispatch(clearCategoryProductsFilters(null))
        dispatch(resetFilters())
    }

    const applyButtonHandler = () => {
        dispatch(setFilersConfirmed(true))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
                onClick={clearFiltersHandler}
                color="secondary"
                size="small">
                Clear Filters
            </Button>
            <Button
                onClick={applyButtonHandler}
                variant='filled'
                color="primary"
                size="small">
                Apply
            </Button>
        </div>
    );
}

export default ProductFilterFooter;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCancelationTokenSource } from "../../../services/AxiosService";
import {
    selectDirectoryCategoriesItems,
    selectDirectoryCategoriesLoaded
} from "../../../store/categories/directoryCategories/directoryCategoriesSelector";
import { getDirectoryCategoriesThunk } from "../../../store/categories/directoryCategories/directoryCategoriesThunk";
import EmptyItems from "../../EmptyItems/EmptyItems.component";
import CategoryItem from "../CategoryItem/cateogry-item-components";
import { CategoriesContainer } from "./CategoriesContainer.styles";

let cancelTokenSource

function CategoryList() {
    const categories = useSelector(selectDirectoryCategoriesItems)
    const itemsLoaded = useSelector(selectDirectoryCategoriesLoaded)
    const dispatch = useDispatch()

    useEffect(() => {
        cancelTokenSource = getCancelationTokenSource()

        if (!itemsLoaded)
            fetchData()

        return () => {
            cancelTokenSource.cancel()
        }
    }, [])

    const fetchData = async () => {
        dispatch(getDirectoryCategoriesThunk(cancelTokenSource.token))
    }

    return (
        <CategoriesContainer>
            {
                itemsLoaded ?
                    categories.map(category => (
                        <CategoryItem
                            key={category.id}
                            category={category} />
                    ))
                    :
                    <EmptyItems
                        size={4}
                        itemHeight={'250px'}
                        itemWidth={'480px'}
                        itemStyle={{ flex: '1 1 auto' }} />
            }

        </CategoriesContainer>
    );
}

export default CategoryList;
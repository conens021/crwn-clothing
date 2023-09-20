import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCancelationTokenSource } from "../../../services/AxiosService";
import { selectCategoriesItems, selectCategoriesLoaded } from "../../../store/categories/categoriesSelector";
import { getAllCategoriesWithProductsThunk } from "../../../store/categories/categoriesThunk";
import Typography from "../../UI/Typography/Typography.component";
import { CategoriesPreviewContainer } from "./CategoriesPreview.styles";
import Category from "./Category.component";
import EmptyCategory from "./EmptyCategory.component";

let cancelTokenSource

function CategoriesPreview() {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategoriesItems)
    const isLoaded = useSelector(selectCategoriesLoaded)

    useEffect(() => {
        cancelTokenSource = getCancelationTokenSource()

        if (!isLoaded)
            fetchCategoriesHandler()

        return () => {
            cancelTokenSource.cancel();
        }
    }, [])

    const fetchCategoriesHandler = async () => {
        const token = cancelTokenSource.token

        dispatch(getAllCategoriesWithProductsThunk(token))
    }

    return (
        <>
            <Typography
                component="h1"
                align={'center'}>
                Categories
            </Typography>
            <CategoriesPreviewContainer>
                {
                    isLoaded ?
                        categories.map(category =>
                            <Category
                                component='h2'
                                key={category.id}
                                category={category}
                                products={category.products} />)
                        :
                        Array(4).fill().map((item, index) => (
                            < EmptyCategory key={index} component="h2" />
                        ))
                }
            </CategoriesPreviewContainer>
        </>
    );
}

export default CategoriesPreview;
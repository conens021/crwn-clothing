import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categories/CategoriesPreview/CategoriesPreview.component";
import ProductsPreview from "../../components/Product/ProductsPreview/ProductsPreview.component";
import ProductPage from "../product/Product.page";

function ShopPage() {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":categoryName" element={<ProductsPreview />} />
            <Route path='product/:productId' element={<ProductPage />} />
        </Routes>
    );
}

export default ShopPage;
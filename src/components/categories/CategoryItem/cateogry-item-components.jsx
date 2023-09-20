import { CATEGORIES_IMAGES_FOLDER } from "../../../helpers/pathRegistry";
import AppImage from "../../UI/Image/Image.component";
import {
    CategoryItemBody,
    CategoryItemContainer
} from './CategoryItem.styles';
import placeholderImage from '../../../assets/img-placeholder-horizontal.png'

function CategoryItem({ category }) {
    const { title, coverImageSrc } = category

    return (
        <CategoryItemContainer to={`/shop/${title}`}>
            <AppImage
                src={`${CATEGORIES_IMAGES_FOLDER}/${coverImageSrc}`}
                placeholderSrc={placeholderImage}
            />
            <CategoryItemBody>
                <div className="text">
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
            </CategoryItemBody>
        </CategoryItemContainer>
    );
}

export default CategoryItem;
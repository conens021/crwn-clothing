import { useSelector } from "react-redux";
import { ProductDekstopTitleContainer } from "../../../../routes/product/Product.styles";
import { selectActiveProductItem, selectActiveProductSuccess } from "../../../../store/products/productSelector";
import { fonts } from "../../../../styles/fonts";
import Skeleton from "../../../UI/Skeleton/Skeleton.component";
import Typography from "../../../UI/Typography/Typography.component";
import Underline from "../../../UI/Underline/Underline.component";

function DekstopProductTitle() {
    const activeProduct = useSelector(selectActiveProductItem)
    const productLoaded = useSelector(selectActiveProductSuccess)
    const { title } = activeProduct
    const { fontSize: producTitleSize, marginBottom } = fonts['product-title']


    /*   const getTitleArray = () => {
          const titleArray = title.split(' ')
          titleArray.forEach(word => console.log(word))
  
          return titleArray.map(word => <span>
              <Underline height="15px">{word}{' '}</Underline>
          </span>)
      } */

    return (
        <ProductDekstopTitleContainer>
            {
                productLoaded
                    ?

                    <Typography component="product-title">
                        <Underline height="15px">
                            {title}
                        </Underline>
                    </Typography>

                    :
                    <Skeleton
                        type='text'
                        width={'100%'}
                        height={producTitleSize}
                        style={{ marginBottom: marginBottom }} />
            }
        </ProductDekstopTitleContainer>
    );
}

export default DekstopProductTitle;
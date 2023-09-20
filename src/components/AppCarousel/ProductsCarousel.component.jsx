import { colors } from "../../styles/colors";
import EmptyItems from "../EmptyItems/EmptyItems.component";
import ProductCard from "../Product/ProductCard/ProductCard.component";
import Slider from "../UI/CarouselSlider/Slilder.component";

function ProductsCarousel({ products, success, color = 'secondary', colorMode = 'default', bgColor = 'dark', resizedWidth }) {

    const carouselColor = colors[color][colorMode]
    const carouselBgColor = colors[bgColor][colorMode]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            itemsVisible: 4,
            itemHeight: 460
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            itemsVisible: 3,
            itemHeight: 320
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            itemsVisible: 2,
            itemHeight: 260
        }
    };

    const getCarouselProducts = () => {
        return products.map(product => <ProductCard height={'100%'} key={product.id} product={product} />)
    }

    return (
        <>
            <Slider
                color={carouselColor}
                bgColor={carouselBgColor}
                itemHeight={420}
                itemsVisible={4}
                responsive={responsive}
                itemsGap={15}
                resizedWidth={resizedWidth}>
                {
                    success ?

                        getCarouselProducts()
                        :
                        <EmptyItems size={20} />

                }
            </Slider>
        </>
    );
}

export default ProductsCarousel
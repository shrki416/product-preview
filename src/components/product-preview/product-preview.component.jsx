import {
  Button,
  PriceWrapper,
  Product,
  ProductCategory,
  ProductContent,
  ProductPrice,
  ProductTitle,
  VisuallyHidden,
} from "./product-preview.styles";

import imageProductDesktop from "../../assets/images/image-product-desktop.jpg";
import imageProductMobile from "../../assets/images/image-product-mobile.jpg";

const PreviewCard = () => {
  return (
    <main>
      <Product>
        <picture>
          <source srcSet={imageProductDesktop} media="(min-width: 600px)" />
          <img
            src={imageProductMobile}
            alt="Gabrielle Essense perfume bottle"
          />
        </picture>
        <ProductContent>
          <ProductCategory>Perfume</ProductCategory>

          <ProductTitle>Gabrielle Essence Eau De Parfum</ProductTitle>

          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <PriceWrapper>
            <ProductPrice>
              <VisuallyHidden>Current price:</VisuallyHidden>
              $149.99
            </ProductPrice>
            <p>
              <VisuallyHidden>Original price:</VisuallyHidden>
              <s>$169.99</s>
            </p>
          </PriceWrapper>

          <Button data-icon="shopping-cart">Add to Cart</Button>
        </ProductContent>
      </Product>
    </main>
  );
};

export default PreviewCard;

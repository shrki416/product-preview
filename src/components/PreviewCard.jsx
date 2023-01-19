import React from "react";

function PreviewCard() {
  return (
    <main>
      <article>
        <picture>
          <source
            srcSet="src/assets/images/image-product-desktop.jpg"
            media="(min-width: 600px)"
          />
          <img
            src="src/assets/images/image-product-mobile.jpg"
            alt="Gabrielle Essense perfume bottle laying flat on a table with green leaves above and below it"
          />
        </picture>
        <div>
          <p>Perfume</p>

          <h1>Gabrielle Essence Eau De Parfum</h1>

          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div>
            <p>
              <span>Current price:</span>
              $149.99
            </p>
            <p>
              <span>Original price:</span>
              <s>$169.99</s>
            </p>
          </div>

          <button data-icon="shopping-cart">Add to Cart</button>
        </div>
      </article>
    </main>
  );
}

export default PreviewCard;

import cartIcon from "../../assets/icons/icon-cart.svg";
import styled from "styled-components";

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  white-space: nowrap;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary-light);
  color: var(--white);
  font-size: 0.925rem;
  font-weight: var(--fw-bold);

  &[data-icon]::before {
    content: "";
    background-image: url(${cartIcon});
    width: 15px;
    height: 15px;
  }

  &:is(:hover, :focus) {
    background-color: var(--color-primary-dark);
  }
`;

export const Product = styled.article`
  display: grid;
  background-color: var(--white);
  border-radius: 0.5rem;
  overflow: hidden;
  max-width: 600px;

  --content-padding: 1.5rem;
  --content-spacing: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    --content-padding: 2rem;
  }
`;

export const ProductContent = styled.div`
  display: grid;
  gap: var(--content-spacing);
  padding: var(--content-padding);
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  line-height: 2rem;
  font-family: var(--ff-accent);
  color: var(--color-neutral-near-black);
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  font-family: var(--ff-accent);
  color: var(--color-primary-light);
`;

export const ProductCategory = styled.p`
  font-size: 0.8125rem;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

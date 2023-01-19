import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    :root {
        --white: hsl(0 0% 100%);
        --color-accent-cream: hsl(30 38% 92%);
        --color-primary-light: hsl(158 36% 37%);
        --color-primary-dark: hsl(158 36% 20%);
        --color-neutral-gray: hsl(228 12% 48%);
        --color-neutral-near-black: hsl(212 21% 14%);

        --ff-primary: 'Montserrat', sans-serif;
        --ff-accent: "Fraunces", serif;

        --fw-regular: 400;
        --fw-bold: 700;
    }

    body {
        font-family: var(--ff-primary);
        font-weight: var(--fw-regular);
        font-size: 0.875rem;
        color: var(--color-neutral-gray);
        background-color: var(--color-accent-cream);

        display: grid;
        place-content: center;
        margin: 1rem;
    }
`;

export default GlobalStyle;

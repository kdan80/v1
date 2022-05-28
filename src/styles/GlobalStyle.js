import { createGlobalStyle } from "styled-components";
import fonts from "./_fonts";
import variables from "./_variables";

const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${variables};

    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    // In order to make the app take up 100% of screen height (100vh is not suitable for mobile) all elements
    // up to and including html must have "height: 100%" set.
    /* html,
    body,
    #___gatsby,
    #gatsby-focus-wrapper {
        height: 100%;
        overflow-x: hidden;
    } */

    html {
        scroll-behavior: smooth;
    }
    
    body {
        font-size: 16px;
        font-family: var(--font-sans);  

        &.disable-scroll {
            position: fixed;
        }
    }

    html, body {
        overflow-x: hidden;
        overflow: overlay;
    }

    /* Scrollbar Styles */
    html {
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-fill) transparent;
    }

    body::-webkit-scrollbar {
        width: 6px;
    }

    body::-webkit-scrollbar-track {
        background: transparent;
    }

    body::-webkit-scrollbar-thumb {
        transition: all 300ms ease-in-out;
        background-color: var(--scrollbar-fill);
        border-radius: 10px;

        :hover {
            background-color: var(--scrollbar-fill-hover);
        }
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: var(--fg-main);
        transition: color 400ms ease-in-out;

        :hover {
            color: var(--fg-highlight);
        }
    }

    p, li, h1, h2, h3, span, div {
        font-size: var(--ft-lg);
        color: var(--fg-main-darker);
        font-weight: 400;
    }

    p {
        line-height: 1.5em;
        font-size: var(--ft-lg);
        color: var(--fg-main-darker);
        font-weight: 400;
    }

    button {
        cursor: pointer;
        background: none;
    }

    input, button {
        font-size: 1rem;
    }

    input {
        min-width: 0;
        background-color: transparent;

        &::placeholder {
            opacity: 1;
        }
    }
`;

export default GlobalStyle;
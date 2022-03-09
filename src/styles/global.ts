import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{
        --primary: #27AE60;
        --primary-50: #93D7AF;
        --secondary: #EB5757;
        --grey-600: #333333;
        --grey-300: #828282;
        --grey-100: #E0E0E0;
        --grey-0: #F5F5F5;
        --success: #168821;
        --negative: #E60000;
        --toastify-icon-color-error: #E83F5B;
        --toastify-color-progress-error: #E83F5B;
        --toastify-icon-color-success: #3FE864;
        --toastify-color-progress-success: #3FE864;
        --toastify-text-color-light: #F8F9FA;
        --toastify-color-light: #343B41;
        --toastify-font-family: 'Inter';
    }
    body{
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        color: var(--grey-300);
    }
    button{
        cursor: pointer;
    }

    h1{
        font-weight: bold;
        font-size: 26px;
        color: var(--grey-600);
    }
    h2{
        font-weight: bold;
        font-size: 22px;
        color: var(--grey-600);
    }
    h3{
        font-weight: bold;
        font-size: 18px;
        color: var(--grey-600);
    }
    .App{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

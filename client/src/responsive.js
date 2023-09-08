import { css } from 'styled-components';


export const iphone12Pro = (props) => {

    return css`
        @media only screen and (max-width: 390px) {
            ${props}
        };
    `;

};
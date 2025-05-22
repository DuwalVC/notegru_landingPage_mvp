import styled from "styled-components";

export const CustomButton = styled.button`
    height: 48px;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 400;
    border-color: rgba(0, 0, 0, .1);
    border-radius: 4px;
    ${(props) => {
        switch (props.typeButton) {
            case 'primary':
                return `
                    background-color: rgb(0, 0, 0);
                    color: white
                `

            case 'secundary':
                return `
                    background-color: rgb(0, 0, 0, .05);
                    color: black
                `
    
            default:
                return `
                    background-color: rgb(0, 0, 0);
                    color: white
                `
        }
    }};

    &:hover{
        background: rgba(0, 0, 0, .1);

        ${(props) => {
        switch (props.typeButton) {
            case 'primary':
                return `
                    background-color: rgba(0, 0, 0, .6);
                `

            case 'secundary':
                return 'background-color: rgba(0, 0, 0, .1);'
    
            default:
                return `
                    background-color: rgba(0, 0, 0, .6);
                `
        }
    }};
    }
`
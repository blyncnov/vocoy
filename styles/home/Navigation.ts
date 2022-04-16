import styled from "styled-components";

 interface ListNavOpen {
  open: boolean,
}

export const NavigationWrapper = styled.div`
width: 100%;
box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 14px;
background-color: rgb(255 255 255 / 25%);
`

export const NavigationWrapperMaximum = styled.div`
width: 100%;
max-width: 90%;
margin: 0 auto;
padding: 2em 0;

display: flex;
align-items: center;
justify-content: space-between;
`

export const NavigationLeft = styled.div`
display: flex;
align-items: center;
gap: 2em;

.navbar__left--logo h1{
    cursor: pointer;
    font-size: 2em;
    z-index: 2;
}


`

export const NavigationRight = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

    ul{
        display: flex;
        gap: 1em;

        li{
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;

            &:hover{
                color: purple;
            }
        }
    }

@media (max-width: 768px) {
    display: none;
}

`

export const NavigatorSide = styled.ul<ListNavOpen>`
        display: flex;
        gap: 1em;

        li{
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            cursor: pointer;

            &:hover{
                color: #333;
            }

        @media (max-width: 768px) {
            padding: 1em 0;
            text-align: start;
            border-bottom: .1px solid rgb(255 255 255 / 3%);

        &:hover{
            color: #D7FDF1;
        }
}
}

@media (max-width: 768px) {
    display: block;
    background-color: rgb(0 44 29);
    color: #fff;
    position: absolute;
    top: ${props => props.open ? '0' : '-100%'};
    left: 0;
    right: 0;
    padding: 1em;
    z-index: 5;
    transition: all 0.5s ease-in;
}
`

export const Mobile = styled.div`
display: none;
z-index: 9999;
cursor: pointer;
color: #fff;

@media (max-width: 768px) {
    display: block;
}
`


export default NavigationWrapper
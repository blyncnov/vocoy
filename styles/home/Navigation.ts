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
padding: 1.5em 0;

display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 768px) {
   padding: 1.2em 0; 
}

`

export const NavigationLeft = styled.div`
display: flex;
align-items: center;
gap: 5em;

.navbar__left--logo h1{
    cursor: pointer;
    font-size: 2em;
    z-index: 2;
    display: flex;
    // gap: 0.1em;
    align-items: center;

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
            text-transform: uppercase;
            cursor: pointer;

            a{
                text-transform: uppercase;
            }

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

        a{
            text-transform: uppercase;
             font-weight: 600;
        }

        li{
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            cursor: pointer;

            &:hover{
                color: #6534E9;
            }

        @media (max-width: 768px) {
            padding: 1em 0;
            text-align: start;
            border-bottom: .1px solid rgb(239 235 249 / 50%);

        &:hover{
            color: #6533E9;
        }
}
}

@media (max-width: 900px) {
    display: block;
    background-color: #fff;
    color: #333;
    position: absolute;
    top: ${props => props.open ? '0' : '-100%'};
    left: 0;
    right: 0;
    padding: 1em;
    z-index: 5;
    transition: all 0.5s ease-in;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
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
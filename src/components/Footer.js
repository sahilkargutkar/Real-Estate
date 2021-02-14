import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const FooterContainer=styled.div`
display:flex;
justify-content:center;



`


const FooterWrap=styled.div`
padding:48px 24px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width:1100px;
margin:0 auto;



`;
const FooterLinksContainer=styled.div`
display:flex;
justify-content:center;

`
const FooterLinkTitle=styled(Link)`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:16px;
text-align:left;

`
const FooterLink =styled(Link)`
color:#fff;
text-decoration:none;
margin-bottom:0.5rem;
font-size:14px;


&:hover{
    color:#69cf21;
    transition:0.3 ease-out;

}

`





const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkTitle>
                        <FooterLink to="/contact ">Contact us</FooterLink>
                        <FooterLink to="/home ">Home</FooterLink>
                        <FooterLink to="/rentals ">Rental Homes</FooterLink>
                        


                    </FooterLinkTitle>



                </FooterLinksContainer>

            </FooterWrap>



        </FooterContainer>
    )
}

export default Footer

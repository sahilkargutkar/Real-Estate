import React from 'react'
import styled,{css} from 'styled-components/macro'
import {Link } from 'react-router-dom'
import {navData} from '../data/Navdata'
import {Button} from './Button'



const Nav = styled.nav`
height:60px;
justify-content:space-between;
padding:1rem 2rem;
/* background:#000; */
z-index:100;
position:fixed;
width:100%;
display:flex;
`

const NavLink = css`
color:#000;
display:flex;
font-weight:bold;
align-items:center;
padding: 0 1rem;
height:100%;
cursor: pointer;
text-decoration:none;

`

const Logo = styled(Link)`
${NavLink}
color:#fff;
font-style:italic;
`;

const Menubar = styled.i`
display:none;

`

const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right: -48px;

`
const NavMenuLinks= styled(Link)`
${NavLink}

`
const NavBtn =styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;

`;




const Navbar = () => {
    return (
        <Nav>
            <Logo>RealEst</Logo>
            <Menubar />
            <NavMenu>
                {navData.map((item,index)=>(<NavMenuLinks to={item.link} key={index}>
                    {item.title}

                </NavMenuLinks>))}

            </NavMenu>
            <NavBtn>
                    <Button to="/contact" primary="true">Contact Us</Button>

            </NavBtn>
        </Nav>
    )
}

export default Navbar

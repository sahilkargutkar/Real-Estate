import React,{useState,useRef, useEffect}from 'react'
import styled,{css} from 'styled-components';
import { slidingData } from '../data/SlidingData';
import { Button } from './Button';
import { IoMdArrowRoundForward } from "react-icons/io";
import {IoArrowForward,IoArrowBack} from "react-icons/io5"

const HomeSection =styled.div`
height:100vh;
max-height:1100px;
position:relative;
overflow:hidden;

`

const HomeWrapper =styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;    
position:relative;


`

const HomeSlide =styled.div`
z-index:1;
width:100%;
height:100%;


`;

const HomeSlider =styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;


    &::before{
        content:'';
        position:absolute;
        z-index:2;
        width:100%;
        height:100%;
        bottom:0vh;
        left:0;
        overflow:hidden;
        opacity:0.5;
        background:linear-gradient(0deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.6) 100%, );



    }
`
const HomeImage =styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:cover;



`
const HomeContent =styled.div`
position:relative;
z-index:10;
display:flex;
font-weight:bold;
flex-direction:column;
max-width:1600px;
width:calc(100%-100px);
color:#000;

h1{
    font-size: clamp(1rem, 8vw,2rem);
    font-weight:400;
    text-transform:uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align:left;
    margin-bottom:0.8rem;
}

p{
    margin-bottom:1.2rem;
    text-shadow:0px 0px 20px rgba(0,0,0,0.4);
}

`
const Arrow = styled(IoMdArrowRoundForward) `

margin-left:0.5rem;

`;

const SliderButtons=styled.div`
    position:absolute;
    bottom:50px;
    right:50px;
    display:flex;
    z-index:10;


`

const ArrowButtons = css`
    width:50px;
    height:50px;
    color:#fff;
    cursor:pointer;
    background:#000d1a;
    border-radius:50px;
    padding:10px;
    margin-right: 1rem;
    user-select:none;
    transition:0.3s;

    &:hover{
        background:#69cf21;
        transform:scale(1.05);

    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${ArrowButtons}


`
const NextArrow =styled(IoArrowForward)`
    ${ArrowButtons}

`



const Home = ({slides}) => {

const [current,setCurrent] =useState(0);
const length =slides.length
const timeout= useRef(null)


useEffect(()=>{
    const nextSlide =() =>{
        setCurrent(current => (current === length -1 ?0 :current +1));

    }

    timeout.current =setTimeout(nextSlide,3000);

    return function(){
        if(timeout.current){

            clearTimeout(timeout.current);
        }


    }

},[current,length])


const nextSlide =() =>{
    setCurrent(current === length -1 ? 0 :current +1)

    console.log(current)

}

const prevSlide =() =>{

    setCurrent(current === 0 ? length -1 : current -1)

    console.log(current)


}

    return (
        <>
        
        <HomeSection>
        <HomeWrapper>
        {slidingData.map((slide,index)=>{
            return(
                <HomeSlide key={index}>
                            {index === current &&  (


                    <HomeSlider>
                         <HomeImage src={slide.image} alt={slide.alt} />
                        <HomeContent>
                        <h1>{slide.title}</h1>
                        <p>{slide.price}</p>
                        <Button to={slide.path} css={`max-width:160px`} primary="true">{slide.label}<Arrow />
                        </Button></HomeContent>

                         
                    </HomeSlider>

                    
                    )}
                    
                    </HomeSlide>

            )


        })}
        <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
        </SliderButtons>
        </HomeWrapper>
        </HomeSection>
        
        </>
    )
}

export default Home

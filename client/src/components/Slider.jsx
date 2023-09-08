import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { sliderItems } from "../dummyData";
import { useState } from "react";
import { iphone12Pro } from "../responsive";


const Slider = () => {

    const Container = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        position: relative;
        overflow: hidden;
        ${iphone12Pro({
          display: "none",
        })}
    `;
    const Arrow = styled.div`
        width: 40px;
        height: 40px;
        background: gray;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${props => props.direction === "left" && "10px"};
        right: ${props => props.direction === "right" && "10px"};
        margin: auto;
        opacity: 0.5;
        z-index: 3;
        cursor: pointer;
    `;
    const Wrapper = styled.div`
        height: 100%;  
        display: flex;
        transition: all 1s ease;
        transform: translateX(${props => props.slideIndex * -100}vw);
    `;
    const Slide = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        background-color: #${props => props.bg};
        color: #${props => props.color};
    `;
    const ImageContainer = styled.div`
        flex: 1;
        height: 100%;
    `;
    const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `;
    const InfoContainer = styled.div`
        flex: 1;
    `;
    const Title = styled.h1`
        font-size: 70px;
        margin-left: 20px;
    `;
    const Desc = styled.p`
        margin: 50px 0px;
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 1px;
        margin-left: 20px;
    `;
    const Button = styled.button`
        padding: 10px;
        font-size: 24px;
        background-color: transparent;
        color: #${props => props.color};
        cursor: pointer;
        margin-left: 20px;
    `;

    const [slideIndex,setSlideIndex] = useState(0);

    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }

    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(data => (
            <>
            <Slide bg={data.bg} color={data.color} key={data.id}>
            <ImageContainer>
                <Image 
                  src={data.img} 
                />
            </ImageContainer>
            <InfoContainer>
              <Title>{data.title}</Title>
              <Desc>{data.desc}</Desc>
              <Button color={data.color}>Customization</Button>
            </InfoContainer>   
            </Slide>
            </>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider

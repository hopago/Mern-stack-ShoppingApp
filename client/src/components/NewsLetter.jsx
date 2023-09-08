import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { iphone12Pro } from '../responsive';


const NewsLetter = () => {

    const Container = styled.div`
        height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
    `;
    const Title = styled.h1`
        font-size: 70px;
        margin-bottom: 20px;
    `;
    const Desc = styled.div`
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 20px;
        ${iphone12Pro({
            textAlign: "center",
        })}
    `;
    const InputContainer = styled.div`
        width: 25%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        ${iphone12Pro({
            width: "75%",
        })}
    `;
    const Input = styled.input`
        height: 100%;
        padding-left: 12px;
        border: none;
        flex: 8;
    `;
    const Button = styled.button`
        height: 100%;
        flex: 1;
        border: none;
        background-color: #2C3333;
        color: white;
    `;

  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorites</Desc>
        <InputContainer>
            <Input placeholder='Email...' />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter

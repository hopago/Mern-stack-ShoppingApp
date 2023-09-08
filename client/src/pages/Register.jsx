import styled from 'styled-components';
import { iphone12Pro } from '../responsive';


const Register = () => {

    const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(rgba(0,0,0,0.5), rgba(255,255,255,0.5)), 
        url("https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Wrapper = styled.div`
        width: 60%;
        padding: 20px;
        background-color: black;
        color: white;
        border-radius: 10px;
        ${iphone12Pro({
            width: "75%",
            padding: "10px",
            backgroundColor: "white",
            color: "black"
        })}
    `;
    const Title = styled.h1`
        font-size: 36px;
        font-weight: 700;
        ${iphone12Pro({
            fontSize: "24px",
            fontWeight: 700,
            textAlign: "center"
        })}
    `;
    const Form = styled.form`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `;
    const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 20px;
    `;
    const Agreement = styled.span`
        font-size: 18px;
        margin: 20px 0px;
        ${iphone12Pro({
            fontSize: "18px",
            textAlign: "center",
            margin: "15px 0px",
        })}
    `;
    const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: #444444;
        color: white;
        cursor: pointer;
    `;

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="User Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Password Again" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the 
                    <b> Privacy Policy</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register

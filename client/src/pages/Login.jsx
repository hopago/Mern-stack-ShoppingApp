import styled from 'styled-components';
import { iphone12Pro } from '../responsive';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';


const Login = () => {

    const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
        url("https://images.pexels.com/photos/14569229/pexels-photo-14569229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Wrapper = styled.div`
        width: 20%;
        padding: 20px;
        background-color: black;
        color: white;
        border-radius: 10px;
        ${iphone12Pro({
            width: "75%",
            height: "50%",
            backgroundColor: "white",
            color: "black",
        })}
    `;
    const Title = styled.h1`
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        margin: 10px 0px;
    `;
    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    const Input = styled.input`
        flex: 1;
        min-width: 60%;
        margin: 20px 10px 0px 0px;
        padding: 20px 15px;
    `;
    const Button = styled.button`
        margin: 20px 0px;
        width: 20%;
        border: none;
        padding: 15px 20px;
        background-color: #444444;
        border-radius: 10px;
        color: white;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }

        &:disabled {
            cursor: none;
            background-color: #F0F0F0;
            color: black;
        }

        ${iphone12Pro({
            width: "40%",
        })}
    `;
    const Link = styled.a`
        margin: 5px 0px;
        font-size: 14px;
        font-weight: 300;
        text-decoration: none;
        cursor: pointer;
        color: #5089C6;

        &:hover {
            color: white;
        }
    `;

    const username = useRef();
    const password = useRef();

    const dispatch = useDispatch();

    const { isFetching, error } = useSelector(state => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username.current.value,
            password: password.current.value
        };

        console.log(user);

        login(dispatch, user);

    };

  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="User name" ref={username} />
                <Input type="password" placeholder="Password" ref={password} />
                <Button disabled={isFetching}>Login</Button>
                <Link>Forgot Username or Password?</Link>
                <Link>Create new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login

import { Facebook, GitHub, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { iphone12Pro } from "../responsive";


const Footer = () => {

    const Container = styled.div`
        display: flex;
        ${iphone12Pro({
            flexDirection: "column",
        })}
    `;
    const Left = styled.div`
        flex: 1;
        flex-direction: column;
        padding: 20px;
        ${iphone12Pro({
            borderBottom: "0.5px solid lightgray",
        })}
    `;
    const Logo = styled.h1`
        
    `;
    const Desc = styled.p`
        margin: 20px 0px;
    `;
    const SocialContainer = styled.div`
        display: flex;
    `;
    const SocialIcon = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #${props => props.color};
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    `;
    const Center = styled.div`
        flex: 1;
        padding: 20px;
        ${iphone12Pro({
            display: "none",
        })}
    `;
    const Title = styled.h3`
        margin-bottom: 30px;
    `;
    const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    `;
    const ListItem = styled.li`
        width: 50%;
        margin-bottom: 10px;
    `;
    const Right = styled.div`
        flex: 1;
        padding: 20px;
    `;
    const ContactItem = styled.div`
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    `;
    const Payment = styled.img`
        width: 50%;
        object-fit: contain;
    `;

  return (
    <Container>
        <Left>
            <Logo>Hosinsa.</Logo>
            <Desc>
              This character description generator will generate a fairly random description of a belonging to a random race.
              However, some aspects of the descriptions will remain the same,
              this is done to keep the general structure the same, while still randomizing the important details.
            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACee">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="171717">
                    <GitHub />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Connect Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}} />
                서울시 강남구 도곡로 93길 23
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}} />
                +82 10 8721 6498
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}} />
                ghwns818@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer

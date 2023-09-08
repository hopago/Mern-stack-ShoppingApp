import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import styled from 'styled-components';


const Product = ({ data }) => {

    const Info = styled.div`
    opacity: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    `;
    const Container = styled.div`
        flex: 1;
        margin: 5px;
        flex-basis: 280px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F1F1F1;
        position: relative;

        &:hover ${Info} {
            transition: all 0.3s ease;
            opacity: 1;
        }
    `;
    const Circle = styled.div`
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
    `;
    const Image = styled.img`
        height: 75%;
        z-index: 3;
    `;
    const Icon = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            background-color: #2C3333;
            color: white;
            transform: scale(1.1);
        }
    `;

  return (
    <Container>
        <Circle />
        <Image src={data.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <Link to={`/product/${data._id}`} className="link">
                  <SearchOutlined />
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorder />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product

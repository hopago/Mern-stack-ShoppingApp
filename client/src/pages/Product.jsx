import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { iphone12Pro } from '../responsive';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods'; 
import { addProduct } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';


const Product = () => {

    const Container = styled.div`

    `;
    const Wrapper = styled.div`
        padding: 50px;
        display: flex;
        ${iphone12Pro({
            padding: "10px",
            flexDirection: "column",
        })}
    `;
    const ImgContainer = styled.div`
        flex: 1;
        width: 100%;
        ${iphone12Pro({
            padding: "5px",
            width: "80%",
            margin: "0 auto",
        })}
    `;
    const Image = styled.img`
        width: 100%;
        height: 90vh;
        object-fit: cover;
        ${iphone12Pro({
            width: "100%",
            height: "80%",
        })}
    `;
    const InfoContainer = styled.div`
        flex: 1;
        padding: 0px 50px;
        ${iphone12Pro({
            padding: "10px",
        })}
    `;
    const Title = styled.h1`
        font-weight: 700;
        ${iphone12Pro({
            textAlign: "center",
        })}
    `;
    const Desc = styled.p`
        margin: 20px 0px;
    `;
    const Price = styled.span`
        font-weight: 100;
        font-size: 40px;
    `;
    const FilterContainer = styled.div`
        width: 50%;
        margin: 30px 0px;
        display: flex;
        justify-content: space-between;
        ${iphone12Pro({
            width: "100%",
        })}
    `;
    const Filter = styled.div`
        display: flex;
        align-items: center;
    `;
    const FilterTitle = styled.span`
        font-size: 20px;
        font-weight: 200;
    `;
    const FilterColor = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props => props.color};
        border: 0.5px solid lightgray;
        margin: 0px 5px;
        cursor: pointer;
    `;
    const FilterSize = styled.select`
        margin-left: 10px;
        padding: 5px;
    `;
    const FilterSizeOption = styled.option`
          
    `;
    const AddContainer = styled.div`
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${iphone12Pro({
            width: "100%",
        })}
    `;
    const AmountContainer = styled.div`
        display: flex;
        align-items: center;
        font-weight: 700;
    `;
    const Amount = styled.span`
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid gray;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 5px;
    `;
    const Button = styled.button`
        padding: 15px;
        border: 2px solid gray;
        background: white;
        font-weight: 500;
        cursor: pointer;
        border-radius: 10px;
        ${iphone12Pro({
            padding: "10px",
            border: "1px solid gray",
        })}

        &:hover {
            background-color: gray;
            color: white;
        }
    `;

    const location = useLocation();
    const product_id = location.pathname.split("/")[2];
    const [product,setProduct] = useState({});

    useEffect(() => {

        const getProduct = async () => {

            const res = await publicRequest.get("/products/find/" + product_id);

            setProduct(res.data);

        };

        getProduct();

    }, [product_id])

    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState(product.color);
    const [size,setSize] = useState(product.size);

    const dispatch = useDispatch();

    const handleQuantity = (type) => {

        if(type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }

    };

    const handleClick = () => {

        // Create new cart
        if(color && !size) {
        
          setSize(product.size);

          dispatch(
              addProduct({ ...product, quantity, color, size })
          );
        }

    };

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
              <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>
                    {product.desc}
                </Desc>
                <Price>$ {quantity * product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map(color => (
                            <FilterColor 
                              value={color}
                              color={color} 
                              key={color} 
                              onClick={() => setColor(color)} 
                            />
                        ))
                        }
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                          {product.size?.map((size) => (
                            <FilterSizeOption key={size}>
                                {size}
                            </FilterSizeOption>
                          ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={() => handleQuantity("dec")} style={{cursor: "pointer"}} />
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity("inc")} style={{cursor: "pointer"}} />
                    </AmountContainer>
                    <Button onClick={handleClick}>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom"
import { userRequest } from "../requestMethods";
import styled from "styled-components";


const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  background-color: "black";
  color: "white";
`;

const Success = () => {

    const location = useLocation();

    const data = location.state.stripeData;
    const cart = location.state.cart;

    const currentUser = useSelector((state) => state.user.currentUser);
    
    const [orderId,setOrderId] = useState(null);

    useEffect(() => {

      const createOrder = async () => {
        try {
          
          const res = await userRequest.post("/orders", {
            userId: currentUser._id,
            products: cart.products.map((product) => ({
              productId: product._id,
              quantity: product.quantity,
            })),
            amount: cart.total,
            address: data.billing_details.address,
          });

          setOrderId(res.data._id);

        } catch (err) {
          console.log(err);
        }
      }

      data && createOrder();

    }, [cart, data, currentUser])

  return (
    <Container>
      {
        orderId
        ? `Order has been received successfully. Your order number is ${orderId}`
        : `Your order is being prepared...`
      }
      <Button>Go to homepage</Button>
    </Container>
  )
}

export default Success

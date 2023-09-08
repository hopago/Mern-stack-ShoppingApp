import { popularProducts } from "../dummyData";
import styled from 'styled-components';
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from 'axios';


const Products = ({ category, filter, sort }) => {

    const Container = styled.div`
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    `;

  const [products,setProducts] = useState([]);
  const [filterProducts,setFilterProducts] = useState([]);

  useEffect(() => {

    const getProducts = async () => {

      try {
        
        const res = await axios.get( category ?
          `http://localhost:8000/api/products?category=${category}` 
          : 
          "products"
        );

        setProducts(res.data);

      } catch (err) {
        console.log(err);
      }

    };

    getProducts();

  }, [category]);

  useEffect(() => {

    console.log(products);

    category && setFilterProducts(
      products.filter(product => 
        Object.entries(filter).every(
          ([key, value]) => product[key].includes(value)
        )
      )
    );

  }, [products, category, filter]);

  useEffect(() => {

    if(sort === "newest") {
      setFilterProducts((prev) => 
        {
          return [...prev].sort((a, b) => a.createdAt - b.createdAt);
        }
      );
    } else if(sort === "asc") {
      setFilterProducts((prev) => 
        {
          return [...prev].sort((a, b) => a.price - b.price);
        }
      )
    } else {
      setFilterProducts((prev) =>
        {
          return [...prev].sort((a, b) => b.price - a.price);
        }
      )
    }

  }, [sort]);

  return (
    <Container>
        {category 
          ? filterProducts?.map(data => (<Product data={data} key={data._id} />))
          : products.slice(0,8).map(data => (<Product data={data} key={data.id} />))
        }
    </Container>
  )
}

export default Products

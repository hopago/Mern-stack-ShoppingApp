import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { iphone12Pro } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const ProductList = () => {

    const Container = styled.div`
        
    `;
    const Title = styled.h1`
        margin: 20px;
    `;
    const FilterContainer = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    const Filter = styled.div`
        margin: 20px;
        ${iphone12Pro({
            margin: "0px 20px",
            display: "flex",
            flexDirection: "column",
        })}
    `;
    const FilterText = styled.span`
        font-size: 20px;
        font-weight: 600;  
        margin-right: 20px;
        ${iphone12Pro({
            marginRight: "0px",
            marginBottom: "10px",
        })}
    `;
    const Select = styled.select`
        padding: 10px;
        margin-right: 20px;
        ${iphone12Pro({
            marginRight: "0px",
            marginBottom: "10px",
        })}
    `;
    const Option = styled.option`
        
    `;

    const location = useLocation();
    const category = location.pathname.split("/")[2];
    
    const [filter,setFilter] = useState({});
    const [sort,setSort] = useState("newest");

    const handleFilter = (e) => {

        const value = e.target.value;

        setFilter({
            ...filter,
            [e.target.name]: value,
        });

        console.log(filter);

    };

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Products</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter</FilterText>
                <Select name='color' onChange={handleFilter} value={filter?.color}>
                    <Option disabled>Color</Option>
                    <Option>black</Option>
                    <Option>blue</Option>
                    <Option>bisque</Option>
                    <Option>white</Option>
                </Select>
                <Select name="size" onChange={handleFilter} value={filter?.size}>
                    <Option disabled>Size</Option>
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                    <Option>5</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort</FilterText>
                <Select onChange={e => setSort(e.target.value)} value={sort}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products category={category} filter={filter} sort={sort} />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList

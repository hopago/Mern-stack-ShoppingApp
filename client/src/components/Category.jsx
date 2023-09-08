import styled from 'styled-components';
import { categories } from '../dummyData';
import CategoryItem from './CategoryItem';
import { iphone12Pro } from '../responsive';


const Category = () => {

    const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        ${iphone12Pro({
          padding: "0px",
          flexDirection: "column",
          alignItems: "space-between"
        })}
    `;

  return (
    <Container>
        {categories.map(data => (
            <CategoryItem data={data} />
        ))}
    </Container>
  )
}

export default Category

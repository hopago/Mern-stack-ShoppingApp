import styled from "styled-components"



const Announcement = () => {

    const Container = styled.div`
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
        background-color: #444;
        color: white;
    `;

  return (
    <Container>
        Online Application for 2024 Spring Graduate International Admissions Begins
    </Container>
  )
}

export default Announcement

import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url("./src/assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  height: 30rem;
`

function Home() {
  return (
    <>
      <BackgroundImage data-testid="bg-image" ></BackgroundImage>
    </>
  );
}

export default Home;

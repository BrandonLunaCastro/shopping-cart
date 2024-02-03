import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url("./src/assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
  height: 35rem;
`

function Home() {
  return (
    <>
      <h1>You are in Home</h1>
      <BackgroundImage data-testid="bg-image" ></BackgroundImage>
    </>
  );
}

export default Home;

import styled from "styled-components";
import fetchData from "../services/fetchData";
import { useEffect, useState } from "react";

const BackgroundImage = styled.div`
  background-image: url("./src/assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
  height: 35rem;
`

/* const SliderContainer = styled.div`
  width: 800px;
  height: 800px;
  border: 4px solid grey;
  margin:50px auto;
  object-fit: cover;
  z-index: -1;
`*/

function Home() {
  const [data, setData] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchData().then(res => setData(res))
  },[])

  useEffect(() => {
    data.forEach((el) => {
      setImages(prevState => prevState.concat({original: el.image}))
    })
  },[data]) 
  
  console.log(images)

  return (
    <>
      <BackgroundImage data-testid="bg-image" ></BackgroundImage>
    </>
  );
}

export default Home;

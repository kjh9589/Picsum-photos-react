import { styled } from "styled-components";
import PicImage from "../../components/image/PicImage";

const LoadingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const LoadingImg = styled(PicImage)`
  width: 60%;
  height: 60%;
  background-color: black;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LoadingScreen = () => {
  return (
    <LoadingWrapper>
      <LoadingImg src="https://cdn.pixabay.com/photo/2015/02/22/17/56/loading-645268_1280.jpg" />
    </LoadingWrapper>
  );
};

export default LoadingScreen;

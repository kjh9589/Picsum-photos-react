import { styled } from "styled-components";
import colors from "../../resources/colors";
import useImageList from "../../hooks/picsum/useImageList";
import PicCard from "../../components/card/PicCard";
import { useState } from "react";
import PicModal from "../../components/modal/PicModal";
import DetailModal from "../../components/modal/DetailModal";
import LoadingScreen from "../loading/LoadingScreen";

const MainScreenWrapper = styled.div`
  background-color: ${colors.main};
`;

const MainScreen = () => {
  const { state, fetchData } = useImageList({}, []);
  const { isLoading, isFailure, isSuccess, data, error } = state;
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [cardId, setCardId] = useState("");

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <MainScreenWrapper>
      {isModalOpened && (
        <DetailModal setIsModalOpened={setIsModalOpened} id={cardId} />
      )}
      {isSuccess &&
        data?.data.map((value) => {
          return (
            <PicCard
              key={value.download_url}
              uri={value.download_url}
              author={value.author}
              onClick={() => {
                setIsModalOpened(!isModalOpened);
                setCardId(value.id);
              }}
            />
          );
        })}
    </MainScreenWrapper>
  );
};

export default MainScreen;

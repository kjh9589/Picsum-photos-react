import { styled } from "styled-components";
import PicModal from "./PicModal";
import useImageDetail from "../../hooks/picsum/useImageDetail";
import PicCard from "../card/PicCard";
import LoadingScreen from "../../screens/loading/LoadingScreen";

interface DetailModalProps {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const DetailContentWrapper = styled.div`
  background-color: white;
  width: 70vw;
  height: 90vh;
  position: relative;
`;

const DetailContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DetailModal = (props: DetailModalProps) => {
  const { state, fetchData } = useImageDetail({ id: props.id }, []);
  const { isLoading, isFailure, isSuccess, data, error } = state;

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <PicModal setIsModalOpened={props.setIsModalOpened}>
      <DetailContentWrapper>
        <DetailContent>
          {isSuccess && (
            <PicCard uri={data!.data.download_url} author={data!.data.author} />
          )}
        </DetailContent>
      </DetailContentWrapper>
    </PicModal>
  );
};

export default DetailModal;

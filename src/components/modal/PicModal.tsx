import { styled } from "styled-components";
import colors from "../../resources/colors";

interface PicModalProps {
  children?: React.ReactNode;
}

const PicModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 999;
`;

const PicModalContentWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const PicModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
`;

const PicModal = (props: PicModalProps) => {
  const setOnClickListener = () => {};

  const stopProgagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <PicModalWrapper>
      <PicModalContentWrapper onClick={setOnClickListener}>
        <PicModalContent onClick={stopProgagation}>
          {props.children}
        </PicModalContent>
      </PicModalContentWrapper>
    </PicModalWrapper>
  );
};

export default PicModal;

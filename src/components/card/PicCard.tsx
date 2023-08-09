import { styled } from "styled-components";
import PicImage from "../image/PicImage";
import colors from "../../resources/colors";
import PicText from "../text/PicText";

const PicCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  background-color: ${colors.dadada};
  border-radius: 10px;
  cursor: pointer;
`;

const CardImage = styled(PicImage)`
  max-width: 600px;
  max-height: 300px;
  min-width: 300px;
  min-height: 150px;
  border-radius: 10px 10px 0 0;
`;

const CardDescriptionWrapper = styled.div`
  padding: 4px 8px;
  display: flex;
`;

const AuthorText = styled(PicText)`
  font-size: 16px;
  color: ${colors["1C1C1E"]};
  text-align: start;
  flex: 1;
`;

interface PicCardProps {
  uri: string;
  author: string;
  onClick?: () => void;
}

const PicCard = (props: PicCardProps) => {
  return (
    <PicCardWrapper>
      <ContentWrapper onClick={props.onClick}>
        <CardImage src={props.uri} />
        <CardDescriptionWrapper>
          <AuthorText>{props.author}</AuthorText>
        </CardDescriptionWrapper>
      </ContentWrapper>
    </PicCardWrapper>
  );
};

export default PicCard;

import styled from "styled-components";

type TextSize = "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px";
type TextWeight = "400" | "700";

interface PicTextProps {
  $textSize?: TextSize;
  $textColor?: string;
  $textWeight?: TextWeight;
}

const PicText = styled.p<PicTextProps>`
  font-family: "Nanum Gothic", sans-serif;
  font-size: ${(props) => (props.$textSize ? props.$textSize : "12px")};
  color: ${(props) => (props.$textColor ? props.$textColor : "#000000")};
  font-weight: ${(props) => (props.$textWeight ? props.$textWeight : "400")};
`;

export type { PicTextProps };
export default PicText;

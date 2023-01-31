import styled from "styled-components";
import { BTN_VARIANTS } from "../../constants/styles";

export const ButtonStyled = styled.button`
  border: 2px solid;
  border-color: ${({ variant }) => {
    if (variant === BTN_VARIANTS.main) {
      return "tomato";
    }
    return "black";
  }};
  color: ${({ variant }) => {
    if (variant === BTN_VARIANTS.main) {
      return "tomato";
    }
    return "black";
  }};
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 4px;
  margin: 15px;
`;

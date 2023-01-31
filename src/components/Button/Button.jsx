import PropTypes from "prop-types";
import { BTN_VARIANTS } from "../../constants/styles";
import { ButtonStyled } from "./Button.styled";

const Button = ({ children, variant }) => {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([BTN_VARIANTS.main, BTN_VARIANTS.secondary]),
};

export default Button;

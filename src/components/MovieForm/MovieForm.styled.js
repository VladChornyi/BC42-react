import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Input = styled.input`
  width: 400px;
  padding: 5px 15px;
  border: 2px solid #8e44ad;
  border-radius: 5px;
  background-color: rgba(241, 196, 15, 0.7);
  color: #e74c3c;
  &:focus {
    background-color: white;
  }
`;

export const Select = styled.select`
  width: 400px;
  background-color: rgba(241, 196, 15, 0.7);
  color: #e74c3c;
  padding: 5px 15px;
  border: 2px solid #8e44ad;
  border-radius: 5px;
`;

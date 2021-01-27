import styled from "styled-components";

const Button = styled.button`
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  border: 0px;
  width: 100%;
  font-size: 14px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  &:hover {
    background-color: #117bcd;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.contrastText};
    opacity: 0;
  }
  &:disabled {
    background-color: #808080;
  }
`;

export default Button;

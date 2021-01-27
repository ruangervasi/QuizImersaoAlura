import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputBase = styled.input`
  padding: 10px 10px 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.contrastText};
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export default function Input({ onChange, placeholder }) {
  return (
    <div>
      <InputBase type="text" onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

Input.defaultProps = {
  value: "",
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

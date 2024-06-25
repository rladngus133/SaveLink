import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import useInputStatus from "../../hooks/useInputState";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

function Input({ id, label, ...props }: InputProps) {
  const { isFocused, isTyping, handleFocus, handleBlur } = useInputStatus();

  const animation = {
    y: isFocused || isTyping ? "-125%" : "-50%",
    scale: isFocused || isTyping ? 0.8 : 1,
  };

  return (
    <S.InputGroup>
      <S.InputField id={id} onFocus={handleFocus} onBlur={handleBlur} {...props} />
      <S.InputLabel htmlFor={id} animate={animation}>
        {label}
      </S.InputLabel>
    </S.InputGroup>
  );
}

const S = {
  InputGroup: styled.div`
    position: relative;
  `,

  InputLabel: styled(motion.label)`
    background: #ffffff;
    color: #8d8d8d;
    font-size: 12.5px;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 10px;
  `,

  InputField: styled.input`
    outline: none;
    width: 100%;
    padding: 16px 22px;
    border: 1px solid #dadce0;
    font-size: 16px;
    border-radius: 5px;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.main};
    }
  `,
};

export default Input;

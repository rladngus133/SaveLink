import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

export default function Button({ children, ...props }: { children: ReactNode }) {
  return (
    <S.Button whileHover={{ scale: 0.98, backgroundColor: "#a4d24b" }} {...props}>
      {children}
    </S.Button>
  );
}

const S = {
  Button: styled(motion.button)`
    padding: 16px 22px;
    border-radius: 10px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.main};
  `,
};

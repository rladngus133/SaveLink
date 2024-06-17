import styled from "styled-components";

import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PlusButton() {
  return (
    <S.Container>
      <FaPlus size={15} />
    </S.Container>
  );
}

const S = {
  Container: styled(motion.div)`
    position: fixed;
    background-color: white;
    bottom: 28px;
    right: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    cursor: pointer;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;

    &:hover {
      background-color: #eee;
    }
  `,
};

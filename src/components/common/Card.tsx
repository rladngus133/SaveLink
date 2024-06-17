import styled from "styled-components";
import testimg1 from "../../assets/testimg1.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

import { FaRegCopy } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Card() {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <S.Container>
        <a href="https://www.naver.com" target="_blank">
          <S.ImgLayout
            whileHover={{ scale: 0.98 }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {isHover ? (
              <S.HoverImgLayout>
                <S.ButtonLayout>
                  <S.LinkCopyButton whileHover={{ scale: 1.1 }}>
                    <FaRegCopy size={16} />
                  </S.LinkCopyButton>
                  <S.DeleteButton whileHover={{ scale: 1.1 }}>
                    <MdDeleteOutline size={20} color="red" />
                  </S.DeleteButton>
                  <S.MoreButton whileHover={{ scale: 1.1 }}>
                    <IoIosMore size={16} />
                  </S.MoreButton>
                </S.ButtonLayout>
              </S.HoverImgLayout>
            ) : null}
            <img src={testimg1} alt="img1" />
          </S.ImgLayout>
        </a>
        <S.TitleLayout>
          <span>테스트링크</span>
          <FaEdit size={15} />
        </S.TitleLayout>
      </S.Container>
    </>
  );
}

const S = {
  Container: styled.div`
    max-width: 235px;
  `,

  ImgLayout: styled(motion.div)`
    position: relative;

    width: 235px;
    height: 280px;
    overflow: hidden;

    border-radius: 16px;

    cursor: pointer;

    & img {
      height: 100%;
    }
  `,

  HoverImgLayout: styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35);

    width: 100%;
    height: 100%;
    z-index: 1;
  `,

  ButtonLayout: styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    gap: 10px;
    z-index: 2;
  `,

  LinkCopyButton: styled(motion.button)`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
  `,

  DeleteButton: styled(motion.button)`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
  `,

  MoreButton: styled(motion.button)`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
  `,

  TitleLayout: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 6px 16px;

    & span {
      font-size: 14px;
      font-weight: 600;
    }

    & svg {
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        scale: 1.1;
      }
    }
  `,
};

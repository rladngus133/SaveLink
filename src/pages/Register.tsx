import styled from "styled-components";
import Input from "../components/common/Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseInit";
import { FormEvent } from "react";
import Button from "../components/common/Button";
import useAuthForm from "../hooks/useAuthForm";

export default function Register() {
  const { email, password, handleEmailChange, handlePasswordChange } = useAuthForm();

  function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user :", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ErrorCode :", errorCode, "ErrorMessage :", errorMessage);
      });
  }

  return (
    <S.Container>
      <S.FormLayout onSubmit={handleRegister}>
        <Input id="email" label="email" type="text" value={email} onChange={handleEmailChange} />
        <Input id="password" label="password" type="password" value={password} onChange={handlePasswordChange} />
        <Button>회원가입</Button>
      </S.FormLayout>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 400px;
  `,

  FormLayout: styled.form`
    display: flex;
    gap: 25px;
    flex-direction: column;
    width: 100%;
  `,
};

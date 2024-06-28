import styled from "styled-components";
import Input from "../components/common/Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseInit";
import { FormEvent } from "react";
import Button from "../components/common/Button";
import useAuthForm from "../hooks/useAuthForm";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

export default function Register() {
  const { email, password, handleEmailChange, handlePasswordChange } = useAuthForm();

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("user :", user);

      // 회원가입 시점에 데이터베이스 핸들링
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ErrorCode:", errorCode, "ErrorMessage:", errorMessage);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }

  return (
    <S.Container>
      <S.FormLayout onSubmit={handleRegister}>
        <Input id="email" label="Email" type="text" value={email} onChange={handleEmailChange} />
        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          autoComplete="off"
          onChange={handlePasswordChange}
        />
        <Input
          id="ConfirmPassword"
          label="Confirm password"
          type="password"
          value={password}
          autoComplete="off"
          onChange={handlePasswordChange}
        />
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

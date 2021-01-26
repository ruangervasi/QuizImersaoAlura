import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Input = styled.input`
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
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Ruan Gervasi</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => onHandleSubmit(e)}>
              <Input
                type="text"
                placeholder="Digite seu nome aqui..."
                onChange={(e) => setName(e.target.value)}
              />
              <Button type="submit" disabled={name === ""}>
                Jogar como {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ruangervasi" />
    </QuizBackground>
  );
}

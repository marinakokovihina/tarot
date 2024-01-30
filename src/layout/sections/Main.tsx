import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
// import photoMain from "путь до фото" записать переменную в src


// Тут описание колоды,
export const Main = () => {
    return (
        <StyledMain>
           <FlexWrapper align={"center"} justify={"space-around"}>
               <div>
                   {/*TODO простилизовать + добавить текст*/}
                   <h1> Инструкция по пользованию </h1>
                   <span>  мяу мяу мяу мяу мяу мяу </span>
               </div>
               <PhotoMainPage src=""/>
               {/*TODO добавить фото*/}
               {/*  какая-нибудь обложка из манары или иллюстрация оттуда  */}
           </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div `
  min-height: 100vh;
  background-color: #282c34;
  
`

const PhotoMainPage = styled.img `
  object-fit: cover;
  
`




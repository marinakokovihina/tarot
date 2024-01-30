import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header= () => {
    return (
        <StyledHeader>
            <Menu/>
            <Logo/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  background-color: #f0f2f5;
  display: flex;
  justify-content: space-between;
`

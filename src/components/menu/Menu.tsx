import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <a href="" ><li>Значение Арканов</li></a>
                <a href="" ><li>Виды раскладов</li></a>
                <a href="" ><li>Мяу мяу?</li></a>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
    ul{ 
      display: flex;
      gap: 30px;
      
    }
`

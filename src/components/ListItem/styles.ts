import styled from "styled-components";

export const StyledLi = styled.li`
  border-top: 2px solid white;
  flex-direction: column;
  filter: saturate(0.75);
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  &:hover {
    filter: unset;
    cursor: pointer;
    transform: scale(1.02);
    transition: transform .5s;
    border-top-color: cornflowerblue;
  }
`;

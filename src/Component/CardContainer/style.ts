import styled from "styled-components";


interface CardContainerWrapperTypes {
  children: React.ReactNode;
}

export const CardContainerWrapper: React.FC<CardContainerWrapperTypes> = styled.div<CardContainerWrapperTypes>`
  width: 100%;
  margin: 25px 0;
  min-height: calc(100vh - 311px);
  display: flex;
  align-items: center;
  justify-content: center;

  .loading-result {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
 }
  
  .recent-trades {
    margin-top: 16px;
  }
`;

import styled from "styled-components";

export const FormContainer = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 25px;

  .arrow-icon {
    padding: 0 25px;
    color:${(p) => p.isDarkMode && 'white' } ;
  }
`;

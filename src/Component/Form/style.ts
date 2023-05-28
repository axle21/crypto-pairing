import styled from "styled-components";
import Row from 'antd/es/row'
 
export const FormContainer = styled(Row)<{ isDarkMode: boolean }>`
  .ant-col{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }


  .arrow-icon {
    padding: 0 5%;
    color:${(p) => p.isDarkMode && 'white' } ;
  }
`;

import styled from "styled-components";
import Row from 'antd/es/row'

interface FormContainerTypes {
  isDarkMode: boolean;
  children: React.ReactNode;
}

export const FormContainer: React.FC<FormContainerTypes> = styled(Row)<FormContainerTypes>`
  .ant-col{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .ant-select{
      width:200px
    }
  }


  .arrow-icon {
    padding: 0 5%;
    color:${(p) => p.isDarkMode && 'white' };
    padding-bottom: 25px;
  }

  @media (max-width: 768px) {


    .ant-col .ant-select{
      width:150px
    }
 } 
`;

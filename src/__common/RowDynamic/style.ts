import styled from "styled-components";
import Col from "antd/es/col";


interface RowDynamicContainerTypes {
  children: React.ReactNode;
}


export const RowDynamicContainer: React.FC<RowDynamicContainerTypes | React.ComponentProps<typeof Col>> =styled(Col)<RowDynamicContainerTypes | React.ComponentProps<typeof Col>>`

  font-weight: 700;

  span {
    padding-left: 5px;
    font-weight: normal;
  }

  .container {
    display: flex;
    flex-direction: column;
    width:100%;
    text-align: center;
  }
  
  .item {
    display: flex;
    align-items: right;
    width:100%;
  }
  
  .key {
    width:50%;
    text-align: right;
    font-weight: bold;
    margin-right: 5px; /* Adjust spacing between key and value horizontally */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {\
    align-items: center;
    justify-content: center;
    text-align: center;

 

    .item {
      margin-bottom: 10px; /* Adjust spacing between items vertically */
    }
    

  }
`;

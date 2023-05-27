import Card from "antd/es/card";
import styled from "styled-components";

export const CardStyled = styled(Card)`
    min-height:342px;

   .section-title{
        font-weight: 700;
        font-size:24px;
        margin-bottom: 12px;
   }

   @media (max-width: 768px) {
    /* Styles to apply for screens with a maximum width of 768px */
    .body-section{
        text-align: center;
    }

  }
`;

import styled from "styled-components";
import _Col from "antd/es/col";

export const Col = styled(_Col)`
  font-weight: 700;

  span {
    padding-left: 5px;
    font-weight: normal;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

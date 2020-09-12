import styled from 'styled-components';

export const List = styled.div`
  ul {
    background: #FFFFFF;
    border-radius: 5px;
    height: 163px;
    width: 1120px;
    margin-left: 20%;

    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 200px;
      height: 128px;
      margin-left: 22px;
      top: 252px;
      border-radius: 5px;
    } 

    h1 {
      font-size: 18px;
      font-style: normal;
      font-weight: normal;
      margin-left: 20px;
      color: #363F5F;
    }

    small {
      font-size: 12px;
      margin-left: 20px;
      color:  rgba(54, 63, 95, 0.79);
      background: rgba(150, 156, 178, 0.4);
      border-radius: 2px;
    }

    span { 
      color: #969CB3;
      font-size: 16px;
      line-height: 24px;
      margin-left: auto;
      margin-right: 10px;
    }
  }
`;

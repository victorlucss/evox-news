import styled from 'styled-components';

export const Container = styled.div`
  margin: 80 auto;
  max-width: 700%;
  h2 {
    margin-left: 50%;
    margin-top: 20%;
  } 

  div {
    &:first-child {
      margin-top: 80px;
    }
    margin-top: 16px;
  }
`;

export const Header = styled.header`
  background: #3688D3;
  height: 146px;
  width: 100%;

  img {
    margin-left: 20%;
    margin-top: 46px;
  }
`;

export const Input = styled.div`  
  input {
    margin-left: 20%;
    width: 1120px;
    height: 56px;
    position: absolute;
    top: 119px;
    border-radius: 5px;
    border-color: transparent;
    flex: 1;
    padding: 15px;
    font-size: 17px;

    &::placeholder {
      font-size: 17px;
      color: rgba(54, 63, 95, 0.6);
      font-style: normal;
      font-weight: normal;
      bottom: 26.79%;
    }
  }
`;

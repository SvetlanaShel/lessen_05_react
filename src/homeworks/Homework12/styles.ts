import styled from "@emotion/styled";
import backImage from '../../assets/background-image.jpg';

export const Homework12Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 40px;
 flex: 1;
 padding: 60px;
 background-color: rgb(99, 204, 212);
 background-image: url(${backImage});
 background-position: center;
 background-size: cover
`;

export const FactWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 min-width: 600px;
 min-height: 400px;
 padding: 30px;
 background-color: white;
 border-radius: 10px;
 font-size: 24px;
 color:rgb(45, 88, 189);
 font-weight: bold;
`
export const Error = styled.div`
 font-size: 28px;
 color: red;
 font-weight: bold;
`
export const Title = styled.div`
 font-size: 40px;
  color: rgb(13, 37, 39);
  font-weight: bold;
`

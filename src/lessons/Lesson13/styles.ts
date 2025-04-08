import styled from "@emotion/styled";

export const Lesson13Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 40px;
 flex: 1;
 padding: 60px;
 background-color: rgb(208, 207, 195);
`;

export const ImagesWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 min-width: 500px;
 /* для добавления scroll используем набор свойств
 постоянна высота (height) и свойство  overflow: auto; */
 height: 700px;
 overflow: auto;
 padding: 30px;
 background-color: white;
 border-radius: 10px;
 color:rgb(45, 88, 189);
 font-weight: bold;
`
export const Error = styled.div`
 font-size: 28px;
 color: red;
 font-weight: bold;
 `

 export const ButtonContainer = styled.div`
  display: flex;
 gap: 20px;
 width: 500px;
 `

 export const Image = styled.img`
 width: 600px;
 height: 400px;
 margin: 10px 0;
 border-radius: 8px;
 box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)
 `;
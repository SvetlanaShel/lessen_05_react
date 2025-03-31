
import styled from "@emotion/styled";

interface VipCardInfoStyledProps {
    primary?: boolean
 }

 export const VipCardStyle = styled.div<VipCardInfoStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 300px; 
  padding: 20px;
  background-color: blue;
  font-size: 24px; 
 `;

  export const TitleCard = styled.h2`
  color: #53E4F5;
  font-size: 50px;
  `


 export const AvatarImg = styled.img` 
   width: 100px;
 ` 

interface RegularCardInfoStyledProps {
    primary?: boolean
 }

 export const RegularCardStyle = styled.div<RegularCardInfoStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 300px; 
  padding: 20px;
  background-color: green;
  font-size: 24px; 
 `;

 

   

   
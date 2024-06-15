// Style your components here
import styled from 'styled-components'

export const ContainerDiv = styled.div`
background-color:white;
height:100vh;
display:flex;
flex-direction: column;
flex-direction: column;
  justify-content: flex-start;
  margin-left:50px
  

  
`
export const InnerContainer = styled.div`
display:flex;

`
export const CustomButton = styled.button`
background-color:blue;
color:white;
border-width:0px;
padding:10px;
border-radius:10px;
margin-top:20px
cursor: pointer;
outline: none;

`
export const CustomLabel = styled.label`
color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 0px;


`
export const CustomInput = styled.input`
color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`
export const CustomForm = styled.form`
 display: flex;
  flex-direction: column;
  margin-top:20px
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const CustomSelect = styled.select`
color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`
export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`
export const MemeConatiner = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  width:600px
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
 
   @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }

`
export const TextContext = styled.p`
 color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`

import styled from "styled-components";
import { Box } from "../Styled/generals";
import { StyleSheet } from "react-native";

export const Container = styled(Box)`
  background-color: '#343435';
  height: 50px;
  color: "white";
  border-radius: 15px;
  padding: 5px;
  align-items: center;
  margin-top:50px
`

export const TextCustom = styled.TextInput`
  color: white;
  font-size: 18px;
  width: 215px;
  left: 1px;
`;

export const CustomImage = styled.Image`
  width: 30px;
  height: 30px;
  align-Self: 'center';
`

export const Bar = styled.View`
  background-color: '#343435';
  border-radius: 20px;
  flex-direction: row;
  width: 95%;
  text-align: 'center';
`

export const SearchImg = styled.Image`
  align-self: center;
  height: 30px;
  left: 1px;
  width: 30px;
`

export const MicroImg = styled.Image`
  align-self: flex-end;
  height: 30px;
  left: 80px;
  width: 30px;
` 

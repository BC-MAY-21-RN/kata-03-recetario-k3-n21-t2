import styled from "styled-components";
import { Box } from "../Styled/generals";
import { StyleSheet } from "react-native";

export const Container = styled(Box)`
  background-color: #282828;
  height: 50px;
  border-radius: 15px;
  padding: 5px;
  align-items: center;
  margin-top: 50px;
`

export const TextCustom = styled.TextInput`
  color: white;
  font-size: 18px;
  margin-left: 10px;
  left: 1px;
  width: 215px;
`;

export const CustomImage = styled.Image`
  width: 30px;
  height: 30px;
  align-Self: 'center';
`

export const Bar = styled.View`
  background-color: #343435;
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
  left: 250%;
  height: 30px;
  width: 30px;
` 

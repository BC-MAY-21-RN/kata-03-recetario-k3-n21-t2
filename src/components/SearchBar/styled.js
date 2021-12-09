import styled from "styled-components";
import { Box } from "../Styled/generals";
import { StyleSheet } from "react-native";

export const Contaier = styled(Box)`
    background-color: '#343435';
    height: 50px;
    color: "white";
    border-radius: 15px;
    padding: 5px;
    align-items: center;
`

export const TextCustom = styled.TextInput`
  color: white;
  font-size: 18px;
`;

export const CustomImage = styled.Image`
  width: 30px;
  height: 30px;
  align-Self: 'center';
`




import styled from "styled-components";

export const TextWhite = styled.Text`
  color: white;
  font-size: 18px;
  height: 50px
  margin-left: 10px;
`

export const TrendingText = styled(TextWhite)`
  font-size: 20px;
  position: absolute;
  top: 170px;
  left: 10px;
  `
  
  export const FoodText = styled(TextWhite)`
  font-size: 25px;
  position: absolute;
  top: 190px;
  left: 5px;
`
export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  width: 100%;
  border: 1px solid #343435;
`

export const Line = styled.View`
  width: 100px;
  height: 2px;
  aling: center;
  color: #282828;
`

export const CustomImage = styled.Image`
  width: 100%;
  height: 40%;
  opacity: 0.4;
  margin-bottom: 20px;
`
export const ImageFav = styled.Image`
  position: absolute;
  right: 10px;
  top: 15px
  `
  
export const ImageShare = styled(ImageFav)`
  left: 350px;
`
  
export const ImageClose = styled(ImageFav)`
  left: 10px;
`


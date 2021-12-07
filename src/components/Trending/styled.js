import styled from "styled-components";
import { Box } from "../styled/generals";

export const Container = styled(Box)`
    background-color: 'red';
    height: 60px;
    color: white;
`
export const TextPink = styled.Text`
    color: #aa1f5f;
    font-weight: bold;
    font-size: 30px;
`

// return (
//     <FlatList
//         data={images}
//         key={"2"}
//         numColumns={2}
//         renderItem={({ item }) => (
//             <Image
//                 source={item}
//                 style={{
//                     width: 180,
//                     height: 220,
//                     borderWidth: 2,
//                     borderColor: "#c35547",
//                     resizeMode: "contain",
//                     margin: 6,
//                 }}
//                 keyExtractor={(item) => item.id}
//             />
//         )}
//     />
// );
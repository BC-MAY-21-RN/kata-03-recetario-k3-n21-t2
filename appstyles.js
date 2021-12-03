import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //Main de color dark
    mainView: {
        backgroundColor: '#282828',
        width: '100%',
        height: '100%',
    },
    styleView:{
        marginVertical: 25,
    },
    search: {
        marginTop: 10,
        backgroundColor: '#343435',
        borderRadius: 20,
        flexDirection: 'row',
    },
    searchImg: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        left: 1,
    },
    microimg: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        left: 60,
    },
    //imagenes que iran en el scrollview trending
    imgsTrending: {
        borderRadius: 15,
        width: 150, 
        height: 150,
    },
    //Estilo letras
    textStyle:{
        fontSize: 25,
        color: 'white',
        alignSelf: 'center',
    },
    subtitle: {
        color: '#aa1f5f',
        fontSize: 30,
        marginVertical:15,
    },
    //imagenes que iran en el scrollview recent
    foodimg: {
        flexDirection: 'column',
        marginHorizontal: 9,
    },
});



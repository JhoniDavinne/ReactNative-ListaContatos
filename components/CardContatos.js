import React from 'react';
import {View, StyleSheet} from 'react-native';
import Paletas from '../color/Paletas';

const CardContatos = (props) => {
    return (
        <View style={{...estilos.perfil, ...props.estilos}}>{props.children}</View>
        );
};

const estilos = StyleSheet.create({
    perfil:{
        margin: 2,
        padding: 15,
        borderRadius: 10,

    },
});

export default CardContatos;
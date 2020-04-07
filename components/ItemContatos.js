import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemContatos =(props) => {

return(
    <TouchableOpacity onLongPress={props.del.bind(this, props.keys)}>
    
            <View   style={estilos.lista}>
              <Text style={estilos.id}>
                {'ID: '+props.keys}
                </Text>

              <Text style={estilos.info}>
                {'NOME :  '+props.contato}
                </Text>

              <Text style={estilos.info}>
                {'TEL  :   '+props.telefone}
                </Text>
            </View>
            
            </TouchableOpacity>

);
}

const estilos = StyleSheet.create({
lista: {
    margin: 2,
    padding: 15,
    flexDirection: "column",
    backgroundColor: '#94618B',
    borderRadius: 10,
    borderColor: '#FFFFFF'
    
    

    },
    id: {
      fontSize: 20,
      marginBottom:0,
      padding:1,
      backgroundColor: '#49274A',
      textAlign: "center",
      fontWeight: "bold",
      color: "#FFFFFF"
    },

});

export default ItemContatos;
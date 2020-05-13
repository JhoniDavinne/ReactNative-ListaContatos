import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import  Paletas from '../color/Paletas';
import Dimensoes from '../dimensions/Dimensoes';

const ItemContatos =(props) => {

return(
    <TouchableOpacity onPress={props.onPress.bind(this, props.contato)} onLongPress={props.onDelete.bind(this, props.contato.key)}>    
            <View style={estilos.lista}>
              <Text style={estilos.id}>{'ID: '+props.contato.key}</Text>
              <Text>{'NOME :  '+ props.contato.contato}</Text>
              <Text>{'TEL  :   '+ props.contato.telefone}</Text>
            </View>
            
    </TouchableOpacity>

);
}

const estilos = StyleSheet.create({
  lista: {
    margin: Dimensoes.dois,
    padding: Dimensoes.quinze,
    borderRadius: Dimensoes.dez,
    
    backgroundColor: Paletas.lista,
    flexDirection: "column",
    borderColor: Paletas.branco,
  
  },

  id: {
    fontSize: Dimensoes.vinte,
    marginBottom: Dimensoes.zero,      
    padding:1,
    backgroundColor: Paletas.id,
    textAlign: "center",
    fontWeight: "bold",
    color: Paletas.branco
  },

});

export default ItemContatos;
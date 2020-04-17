import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import  Paletas from '../color/Paletas';
import CardContatos from './CardContatos';

const ItemContatos =(props) => {

return(
    <TouchableOpacity onLongPress={props.del.bind(this, props.keys)}>
    
            <CardContatos  style={estilos.lista}>
              <Text style={estilos.id}>{'ID: '+props.keys}</Text>
              <Text>{'NOME :  '+props.contato}</Text>
              <Text>{'TEL  :   '+props.telefone}</Text>
            </CardContatos>
            
    </TouchableOpacity>

);
}

const estilos = StyleSheet.create({
  lista: {
    margin: 2,
    padding: 15,
    borderRadius: 10,
    
    backgroundColor: Paletas.lista,
    flexDirection: "column",
    borderColor: Paletas.branco,
  
  },

  id: {
    fontSize: 20,
    marginBottom:0,      
    padding:1,
    backgroundColor: Paletas.id,
    textAlign: "center",
    fontWeight: "bold",
    color: Paletas.branco
  },

});

export default ItemContatos;
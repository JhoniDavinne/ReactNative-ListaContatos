import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

import ItemContatos from './components/ItemContatos';
import InputContatos from './components/InputContatos';
import Paletas from './color/Paletas';
import CardContatos from './components/CardContatos';



export default function App() {

  /*ELEMENTOS ESTADO */
  const [contatos,  setContatos]   = useState([]);
  const [numerador, setNumerador] = useState(10);
  
 

  const add = (contato, telefone) =>{
    setContatos ((contatos) =>{
    console.log(contatos);
    setNumerador(numerador + 2);
    return [...contatos, {key:numerador.toString(), cont:contato, tel:telefone}];
    }); 
  }

  const excluir =(remocao)=>{
    setContatos(contatos=>{
      const filter = contatos.filter(contato => contato.key !== remocao);
      return filter;
    });
  };



  return (

      <View style={estilos.tela} >
        <View><Text style={estilos.titulo}>ADICIONAR UM CONTATO</Text></View>
          <InputContatos add = {add}/>
          <View>
        <View><Text style={estilos.titulo}>LISTA</Text></View>
        <FlatList alignItems= {'center'} numColumns={'2'} 
        data = {contatos}renderItem = {contato => (
            <CardContatos estilos={estilos.itemContatos}>
            <ItemContatos keys={ contato.item.key}
              contato = {contato.item.cont}
              telefone = {contato.item.tel}
              del={excluir}
            />
            </CardContatos>
        )
            
            }>
        </FlatList>
        </View>
      </View>
    
  );
}

const estilos = StyleSheet.create({
  tela: {
    padding:10,
    backgroundColor: Paletas.planoFundo

  },
  titulo: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

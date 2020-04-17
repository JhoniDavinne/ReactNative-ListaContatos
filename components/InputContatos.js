import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity,Button} from 'react-native';
import Paletas from '../color/Paletas';


const InputContatos =(props)=>{
  /*ELEMENTOS ESTADO */
  const [contato, setContato]     = useState('');
  const [telefone, setTelefone]   = useState('');

  /*CAPTURAS */
  const capturaTelefone = (telefone) =>{setTelefone(telefone);}
  const capturaContato = (contato) =>{setContato(contato);}

    return(
        
      
      <View style = {estilos.cadastro}>
        <TextInput placeholder="Nome" style={estilos.cadastro} maxLength={10} onChangeText={capturaContato}value={contato} />
        <TextInput placeholder="(XX) XXXXX - XXXX " keyboardType="number-pad" maxLength={11} style={estilos.cadastro} onChangeText={capturaTelefone}value={telefone}/>
        <Button title="Adicionar"onPress={()=>props.add(contato,telefone)}color={Paletas.id}/>
      </View>
    );

}

const estilos = StyleSheet.create({
    cadastro: {
        fontSize:20,
        borderWidth: 2,
        marginBottom:5,
        padding: 3
    
      },
      

});

export default InputContatos;
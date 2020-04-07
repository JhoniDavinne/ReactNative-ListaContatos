import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {

  /*ELEMENTOS ESTADO */
  const [contatos,  setContatos]   = useState([]);
  const [numerador, setNumerador] = useState(10);
  const [contato, setContato]     = useState('');
  const [telefone, setTelefone]   = useState('');

  /*CAPTURAS */
  const capturaTelefone = (telefone) =>{setTelefone(telefone);}
  const capturaContato = (contato) =>{setContato(contato);}
 

  const adicionarContato = () =>{
    setContatos ((contatos) =>{
    console.log(contatos);
    setNumerador(numerador + 2);
    return [...contatos, {key:numerador.toString(), cont:contato, tel:telefone}];
    }); 
  }

  return (
    <View style={estilos.tela} >
      <View><Text style={estilos.titulo}>ADICIONAR UM CONTATO</Text></View>
      <View>
        <TextInput placeholder="Nome" style={estilos.cadastro} onChangeText={capturaContato}value={contato} />
        <TextInput placeholder="(XX) XXXXX - XXXX " keyboardType="number-pad" maxLength={11} style={estilos.cadastro} onChangeText={capturaTelefone}value={telefone}/>
        <Button title="Adicionar"onPress={adicionarContato}color="#49274A"/>
      </View>


      <View>
        <View><Text style={estilos.titulo}>LISTA</Text></View>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false} 
        data = {contatos}renderItem = {contato => 
            <View style={estilos.blocoLista}>
            <View style={estilos.lista}>
              <Text style={estilos.id}>
                {'ID: '+contato.item.key}
                </Text>

              <Text style={estilos.info}>
                {'NOME :  '+contato.item.cont}
                </Text>

              <Text style={estilos.info}>
                {'TEL  :   '+contato.item.tel}
                </Text>
            </View>
            </View>
            }>
        </FlatList>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    padding:30,
    backgroundColor:'#F8EEE7'

  },
  info:{
    color:'#FFFFFF'

  },
  
  id: {
    fontSize: 20,
    marginBottom:10,
    padding:2,
    backgroundColor: '#49274A',
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  titulo: {
    fontSize: 30,
    marginBottom:20,
    backgroundColor:'#F8EEE7',
    fontWeight: "bold",
    textAlign: "center",
  },
  cadastro: {
    fontSize:20,
    borderWidth: 1,
    marginBottom:5,
    padding: 1

  },

  /*blocoLista:{
  flexDirection: "row",
  
  borderColor: '#FFFFFF'    
  },*/
  lista: {
    padding: 20,
    flexDirection: 'columm',
    backgroundColor: '#94618B',
    marginBottom: 8,
    }


});

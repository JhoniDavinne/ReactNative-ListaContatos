import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Alert,TouchableOpacity} from 'react-native';

import ItemContatos from './components/ItemContatos';
import InputContatos from './components/InputContatos';
import CardContatos from './components/CardContatos';

import Dimensoes from './dimensions/Dimensoes';
import Paletas from './color/Paletas';



export default function App() {

  const [contatos,  setContatos]   = useState('');
  const [numerador, setNumerador] = useState(10);
  const [contatoVisualizado, setContatoVisualizado] = useState(null);
  const [isEditando, setIsEditando] = useState(false);

  
 

  

  const excluir =(remocao)=>{
    Alert.alert(
      'Você tem certeza quue deseja excluir contato '+remocao+' ?',
      '',
      [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          onPress: ()=>{
            setContatos (contatos => {
              return contatos.filter((contato) => {
                  return contato.key !== remocao
              })
            });
          }
        }
      ] 
    )
  };

  const verContato = (contato) => {
    setContatoVisualizado(contato);
  };

  const add = (contato, telefone) =>{
    setContatos ((contatos) =>{
      setNumerador(numerador + 2);
      return [...contatos, {key:numerador.toString(), contato:contato, telefone:telefone}];
    }); 
  }

  const editarContato = (contato, telefone) => {
    var contatosAtuais = contatos;

    var itemNovo = false;

    contatosAtuais.forEach((item) => {
        if (item.key == contatoVisualizado.key) {
            item.contato = contato
            item.telefone = telefone

            itemNovo = item;
        }
    })

    setIsEditando(false);
    setContatoVisualizado(null);
}



return (
  <View style={estilos.tela} >
      {contatoVisualizado ? (
          <View style={estilos.telaPrincipalView}>
              <Button title='Voltar' onPress={() => {setIsEditando(false)
              setContatoVisualizado(null)}}
              color={Paletas.id}/>
              {isEditando ? (
                  <View>
                      <InputContatos onAdicionarContato={editarContato} isEditando={true} />
                  </View>
              ) : (<View></View>)}
              <CardContatos estilos={estilos.contatoItem}>
                  <ItemContatos
                      contato={contatoVisualizado}
                      onPress={verContato}
                      onDelete={excluir}
                  />
              </CardContatos>
              <View style = {estilos.cadastro}>
              <Button title='Editar' onPress={() => {setIsEditando(true)}} color={Paletas.id}/>
              </View>
          </View>
      ) : (
          <View style={estilos.tela} >
              <View><Text style={estilos.titulo}>ADICIONAR UM CONTATO</Text></View>
              <View>
                  <InputContatos onAdicionarContato={add} isEditando={false} />
              </View>
              <View><Text style={estilos.titulo}>LISTA</Text></View>
              <FlatList alignItems= {'center'} numColumns={Dimensoes.dois}
                  data={contatos}
                  renderItem={
                      contato => (
                          <CardContatos style={estilos.itemContatos}>
                              <ItemContatos
                                  contato={contato.item}
                                  onPress={verContato}
                                  onDelete={excluir}
                              />
                          </CardContatos>
                      )
                  }
              />
          </View>
      )}
  </View>
);
}

const estilos = StyleSheet.create({
  tela: {
    marginTop: Dimensoes.trinta,
    padding: Dimensoes.dez,
    backgroundColor: Paletas.planoFundo,
    height: Dimensoes.cemp

  },
  titulo: {
    fontSize: Dimensoes.trinta,
    marginBottom: Dimensoes.vinte,
    fontWeight: "bold",
    textAlign: "center",
  },
});

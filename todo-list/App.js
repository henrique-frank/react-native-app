import React, { useState } from 'react';
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native';

export default function App(){
  const [nome, setNome] = useState('Jorge')

  function handleMudaNome(){
   setNome('Aluno Jorge Henrique')
  }

  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>Código da Aprovação</Text>
      <Text style={ [styles.title, styles.text] }>Henrique Frank</Text>
      <Text>{nome}</Text>

      <TouchableOpacity style={styles.button} onPress={handleMudaNome}>
        <Text style={styles.buttonText}>Mudar nome</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#121212',
    paddingTop: 28,
  },
  title:{
    fontSize: 32,
    color: '#f1f1f1',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text:{
    color:'blue'
  },
  button:{
    backgroundColor:'green',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  buttonText:{
    color: '#FFF',
    fontWeight: 'bold'

  }
})
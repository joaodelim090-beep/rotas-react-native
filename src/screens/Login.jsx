import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: '',
      erro: ''
    };
  }

  handleLogin = () => {
    const { usuario, senha } = this.state;

    if( usuario === 'admin' && senha === '1234'){
        this.setState({ erro: ''})
        this.props.navigation.replace('Home')
    }else{
        this.setState({ erro: 'Usuario ou senha invalidos.'})
    }
  }

  render() {

    const { usuario, senha, erro } = this.state;
    return (
      <View style={styles.container}>
        <Text>Tela de Login</Text>

        <TextInput
            style={ styles.input }
            placeholder="Usuario (ex: admin)"
            value={ usuario }
            onChangeText={ (texto) => this.setState({ usuario: texto })}
        />

        <TextInput
            style={ styles.input }
            placeholder="Senha (ex: 1234)"
            value={ senha }
            onChangeText={ (texto) => this.setState({ senha: texto })}
        />

        { erro !== '' && <Text style={ styles.erro }>{ erro } </Text>}

        <Button title='Entrar' onPress={this.handleLogin}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  }, 

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5
  },

  erro: {
    color: '#f60000',
    marginBottom: 15,
    textAlign: 'center'
  },
});

export default Login;

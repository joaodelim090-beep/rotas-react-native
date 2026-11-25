import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';


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
        <View style={ styles.bloco1 }>
            <Image
                    source={ require('../../img/logo_barao.png')}
                    style={[
                        styles.imagem,
                        {
                           width: 100,
                           height: 100,
                           borderRadius: 50,
                        }
                    ]}
                />
        </View>

        <View style={ styles.divisor }>

        </View>

        <View style={ styles.bloco2 }>
            <Text style={ styles.welcomeText }>Bem-vindo!</Text>
            <Text style={ styles.subText }>Acese sua conta</Text>

            <TextInput
                style={ styles.input }
                placeholder="Usuario (ex: admin)"
                placeholderTextColor={ "#4caf50" }
                value={ usuario }
                onChangeText={ (texto) => this.setState({ usuario: texto })}
            />

            <TextInput
                style={ styles.input }
                placeholder="Senha (ex: 1234)"
                placeholderTextColor={ "#4caf50" }
                value={ senha }
                onChangeText={ (texto) => this.setState({ senha: texto })}
            />

            { erro !== '' && <Text style={ styles.erro }>{ erro } </Text>}

            <TouchableOpacity style={ styles.forgotPassword}>
                  <Text style={{ color: '#000', textDecorationLine:'underline'}}> Esqueci minha senha </Text>
            </TouchableOpacity>

            <Button title='Entrar' color='#4caf50' onPress={this.handleLogin} style={'styles.button'}/>
        </View>

        {/*  */}


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

  bloco1: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,
  },

  bloco2: {
    flex: 1,
    width: '90%',

  },

  bloco3: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divisor: {
    height: 0,
    overflow: 'visible',
    zIndex: 10,
  },

  imagem: {
    position:'absolute',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#ffff',
    backgroundColor: 'black',
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    marginTop: 60,
    textAlign: 'center',

  },

  subText: {
    fontSize: 28,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: 'black',

  },

  forgotPassword: {
    alignSelf: 'center',
    marginBottom: 30
  },

  button: {
    width: '100%',
    backgroundColor: '#4caf50',
    borderColor: '#000',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  footerText: {
    color: '#000',
  },

  linkText: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  erro: {
    color: '#f60000',
    marginBottom: 15,
    textAlign: 'center'
  },
});

export default Login;

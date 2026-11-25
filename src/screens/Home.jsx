import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Bem vindo a tela inicial!</Text>

        <Button
            title='Sair'
            onPress={ () => this.props.navigation.replace('Login2') }
        />
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


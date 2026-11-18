import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.params || {};
    this.state = {
        itemId: id || 'Nenhum'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela de Detalhes</Text>
        <Text> ID recebido: { this.state.itemId }</Text>
        <Button
            title="Voltar"
            onPress={ () => this.props.navigation.goBack() }
        />
      </View>
    );
  }
}

export default DetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


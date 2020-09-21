import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(res => res.json())
      .then((res) => {
        this.setState({data: res});
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({isLoading: false});
        
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
        <Fragment>
          <Text>PokeDex!</Text>
          <Image source={{uri: data.sprites.front_default}}
                  style={{width: 400, height: 400}}/>
          <StatusBar style="auto" />
          </Fragment>
        )}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

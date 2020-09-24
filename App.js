import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button } from 'react-native';
import StatsView from './components/StatsView';

export default function App() {
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
      const fetchData = async () => {
        try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        const resJson = await res.json();
        setData(resJson);
        setIsLoading(false);
        } catch (error) { console.log(error);}
      }
      fetchData();
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.image_view}>
        {isLoading ? <ActivityIndicator/> : (
        <Image source={{uri: data.sprites.other['official-artwork'].front_default}}
                style={{width: 200, height: 200, marginTop: 'auto'}}
        />)}
      </View>

      <StatsView />
      
      <View style={styles.button_view}>
        <Button title='Prev' />
        <Button title='Next'/>
      </View>
      {console.log('hello from app coponent')}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image_view: {
    flex: 3,
  },
  button_view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

});

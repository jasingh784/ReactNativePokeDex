import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button } from 'react-native';

export default function StatsView(props) {
    console.log(props.stats);
    return (
    <View style={styles.container}>
        <Text>This is the hp stat</Text>
        <Text>This is the def stat</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        borderWidth: 3,
        borderColor: 'red',
        borderRadius: 6,
        alignSelf: 'stretch'
    }

});




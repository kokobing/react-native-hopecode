import React from 'react';
import {StyleSheet, View, Text,Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default self => (

      <View style={styles.container}>
        <Text style={styles.welcome}>FOUNED PAGE FDSAJFDA</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={{ fontSize: 26 }}>我的名字是：{self.props.userInfo.name_}</Text>

 

         <Button onPress={() => { self.props.navigation.navigate('MainScreen')  }}  title="返回" />
      </View>

);

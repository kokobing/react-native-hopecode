import React, { Component } from 'react';
import {View,Text,Image,Dimensions, TouchableOpacity, StatusBar} from 'react-native';
import { WhiteSpace,Button } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window')

const styles = {
  container: {
      backgroundColor: '#fff'
  },
  wrapper: {
      backgroundColor: '#fff'
  },
  slide: {
      flex: 1,
      backgroundColor: 'transparent',
  },
  container: {
      flex: 1,
  },

  imgBackground: {
      width,
      height,
      backgroundColor: 'transparent',
      position: 'absolute'
  },

  image: {
      width,
      height,
  },
  button: {
      position: 'absolute',
      width: width * 0.3,
      bottom: 30,
      right: (width - width * 0.3) / 2

  }
  ,
  buttonskip: {
      position: 'absolute',
      backgroundColor: 'transparent',
      bottom: 43,
      right: 30

  }
}

export default class Swiperpage extends Component {

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor='#ffffff'
                    translucent={true}
                    barStyle='dark-content'
                />

                <Swiper style={styles.wrapper}
                    dot={<View style={{ backgroundColor: 'rgba(0,0,0,.3)', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4 }} />}
                    activeDot={<View style={{ backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4 }} />}
                    paginationStyle={{
                        bottom: 100
                    }}
                    loop={false}>
                    <View style={styles.slide}>
                      <Image style={styles.image} source={require('../assets/images/1.png')} />
                    </View>
                    <View style={styles.slide}>
                      <Image style={styles.image} source={require('../assets/images/2.png')} />
                    </View>
                    <View style={styles.slide}>
                      <Image style={styles.image} source={require('../assets/images/3.png')} />
                    </View>

                </Swiper>

                <TouchableOpacity style={styles.button} >
                       <Button type="warning" onPress={() => this.props.navigation.navigate('singlePageModal') } style={{borderRadius:0}}>立即登陆</Button>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonskip}  onPress={() => this.props.navigation.navigate('TopTabs') }>
                        <Text style={{color:'#ccc'}}> SKIP </Text>
                </TouchableOpacity>
            </View>
        )
    }
}



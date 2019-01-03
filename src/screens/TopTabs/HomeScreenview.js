import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, Button } from '@ant-design/react-native';


export default self => (
  <View>

    <WhiteSpace size="md" style={{paddingTop:50}} />
    <WhiteSpace size="sm" />
    <Text style={{ fontSize: 26 }}>我的名字是：{self.props.userInfo.name_}</Text>
    <WhiteSpace size="sm" />
    <Text style={{ fontSize: 26 }}>我的性别是：{self.props.userInfo.gender_}</Text>
    <WhiteSpace size="sm" />
    <Text style={{ fontSize: 26 }}>首次登陆：{self.props.userInfo.isfirstcome_?'首次':'非首次'}</Text>
    <WhiteSpace size="sm" />
    <Button type="warning" onPress={() => self.changeReduxStore({ name_: '小美', gender_: '女',isfirstcome_:false })} style={{borderRadius:0}}>设置</Button>

    <WhiteSpace size="sm" />
    <Button type="warning" onPress={() => self.changeReduxStore({ name_: '游客', gender_: '男',isfirstcome_:true })} style={{borderRadius:0}}>还原</Button>

    <WhiteSpace size="md" />
    <Button type="warning" onPress={() => self.navigation.navigate('MainScreen')} style={{borderRadius:0}}>返回首页</Button>


      <WhiteSpace size="md" />
    <Button type="warning" onPress={() => self.navigation.navigate('WebviewRedux')} style={{borderRadius:0}}>进入WEBVIEW测试页</Button>

    <WhiteSpace size="md" />
    <Button type="warning" onPress={() =>
        self.navigation.navigate('WebviewLoad', {
          url: 'https://github.com/facebook/react-native',
          title: '加载中...',
        })
      } style={{borderRadius:0}}>进入WEBVIEW加载页</Button>
 

    <WhiteSpace size="md" />
    <Text style={{ width: '100%', textAlign: 'center', marginTop: 20 }}>
      当前网络：{self.props.userInfo.connectNetType}
    </Text>
  </View>
);

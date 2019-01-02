
import React, {Component} from 'react';
import { Dimensions, Platform,Text } from 'react-native';
import {createAppContainer,createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation';

// redux 相关
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions';


//注册页面-欢迎页
import MainScreen from '../screens/MainScreen';//欢迎页
//注册页面-TOPTABLE
import HomeScreen from '../screens/TopTabs/HomeScreen';//首页
import FoundScreen from '../screens/TopTabs/FoundScreen';//发现
import MallScreen from '../screens/TopTabs/MallScreen';//商城
import SettingsScreen from '../screens/TopTabs/SettingsScreen';//我的
//注册页面-单页
import singlePage from '../screens/singlePage/singlePage';

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
  );
}


const headerStyle = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#1fae66',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};



// const BottomTabs = createBottomTabNavigator({
//   Home: HomeScreen,
//   Found: FoundScreen,
//   Mall:MallScreen,
//   Settings: SettingsScreen,
// }, {
//   tabBarOptions: {
//     activeTintColor: '#6b52ae',
//     labelStyle: {
//       fontSize: 12,
//     }
//   },
// });

const TopTabs = createMaterialTopTabNavigator({
   
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
          tabBarLabel: '首页',
      }),
    },
    Found: {
      screen: FoundScreen,
      navigationOptions: ({ navigation }) => ({
          tabBarLabel: '发现',
      }),
    },
    Mall: {
      screen: MallScreen,
      navigationOptions: ({ navigation }) => ({
          tabBarLabel: '商城',
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
          tabBarLabel: '我的',
      }),
    },
  }, {
  tabBarOptions: {
    initialRouteName:'Found',
    swipeEnabled: true,
    lazy: true,
    activeTintColor: '#ffffff',
    inactiveTintColor: '#ffffff',
    labelStyle: {fontSize: 18,},
    tabStyle: {paddingTop: isIphoneX()?44:20,},
    style: {backgroundColor:'#1fae66',},
    
  },
});


/**
 * 自定义 StackNavigator，可以选择 screen 进入方式
 * 默认状态为 card，只需要输入对应页面，比如 ..navigate('ScreenSome1')
 * 如果要使某个页面进入方式为 modal 只需要在路径上加上 Modal
 * 比如：..navigate('ScreenSome2Modal')
 */
const StackModalNavigator = (routeConfigs, navigatorConfig) => {
  const CardStackNavigator = createStackNavigator(routeConfigs, navigatorConfig);
  const modalRouteConfig = {};
  const routeNames = Object.keys(routeConfigs);

  for (let i = 0; i < routeNames.length; i++) {
    modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]];
  }

  const ModalStackNavigator = createStackNavigator(
    {
      CardStackNavigator: { screen: CardStackNavigator },
      ...modalRouteConfig,
    },
    {
      // 如果页面进入方式为 modal，需要自定义 header（默认 header 样式失效，都叠在一块了）
      mode: 'modal',
      headerMode: 'none',
    },
  );

  return ModalStackNavigator;
};


//首次，进入引导页
    const AppNavigator1 = StackModalNavigator({
      MainScreen:{screen: MainScreen,navigationOptions: {header: null,}},
      TopTabs:{screen: TopTabs,navigationOptions: {header: null,}},
      singlePage:{screen: singlePage},
      
    }, {
      initialRouteName: 'MainScreen',
      ...headerStyle
    });
    const AppContainer1 = createAppContainer(AppNavigator1);

//非首次，进入TOPTABLE
    const AppNavigator2 = StackModalNavigator({    
      MainScreen:{screen: MainScreen,navigationOptions: {header: null,}},
      TopTabs:{screen: TopTabs,navigationOptions: {header: null,}},
      singlePage:{screen: singlePage},
      
    }, {
      initialRouteName: 'TopTabs',
      ...headerStyle
    });
    const AppContainer2 = createAppContainer(AppNavigator2);


class RouterScene extends Component {

  constructor(props) {
      super(props);
  }
  
  render() {
    if(this.props.userInfo.isfirstcome_){
      return (<AppContainer1 />);
    }else{
      return (<AppContainer2 />);
    }
  
  }
}


// 关联 redux store
// 将 store 中的状态映射（map）到当前组件的 props 中
function mapStateToProps(state) {
return {
  userInfo: state.reducers.userInfo,
};
}

// 将 actions 中定义的方法映射到当前组件的 props 中
function mapDispatchToProps(dispatch) {
return bindActionCreators(actionCreators, dispatch);
}

// 将 store 和 当前组件连接（connect）起来
export default connect(mapStateToProps, mapDispatchToProps)(RouterScene);









import React, { Component } from 'react';
import { WebView } from 'react-native';


// redux 相关
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/actions';


class ScreenWebviewtest extends Component {

  static navigationOptions = {
    title: 'WEBVIEW测试页2',
    headerStyle: { backgroundColor: '#1fae66' },
    headerTintColor: '#fff',
    
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
 
  

  render() {
    return (
      <WebView
        source={{ uri: 'http://www.aluckfood.com/upload/webviewtest.php', method: 'POST', body: 
        'cat=koko&name='+this.props.userInfo.name_}}
        startInLoadingState
        // 加载完成后设置标题
        onLoadEnd={() => this.navigation.setParams({ title: 'WEBVIEW测试页1' })}
        onError={() => console.log('加载失败')}
      />
    );
  }
}

// 关联 redux store
function mapStateToProps(state) {
  return {
    userInfo: state.reducers.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenWebviewtest);

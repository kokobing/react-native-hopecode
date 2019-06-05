# react-native-hopecode
一个自用 React Native 脚手架，具有下述特点：　

* Ant Design of React 蚂蚁金服设计平台
* React Navigation V3 路由导航
* 集成 Redux 进行状态管理，并实现本地持久化存储；
* 判断是否首页访问APP，非首次访问进SWIPER欢迎页,首次进TABLE页；
* 内嵌 H5 页面（WebView）；
* 网络检测（是否连接网络）；



## 开发环境及工具

* 基于 RN 0.57.8；
* macOS Mojave 10.14.2；Xcode 10.1；Android Studio 3.2；
* 安卓（7 及以上）/ iOS（12 及以上） 已测试。

* 插件如下：<br/>
 "dependencies": {<br/>
     &nbsp;&nbsp;&nbsp;&nbsp; "@ant-design/react-native": "^3.0.3",<br/>
     &nbsp;&nbsp;&nbsp;&nbsp; "react": "16.6.3",<br/>
     &nbsp;&nbsp;&nbsp;&nbsp; "react-native": "0.57.8",<br/>
     &nbsp;&nbsp;&nbsp;&nbsp; "react-native-gesture-handler": "^1.0.12",<br/>
     &nbsp;&nbsp;&nbsp;&nbsp; "react-native-swiper": "^1.5.14",<br/>
     &nbsp;&nbsp;&nbsp;&nbsp; "react-navigation": "^3.0.9",<br/>
     &nbsp;&nbsp;&nbsp;&nbsp; "react-redux": "^6.0.0",<br/>
     &nbsp;&nbsp;&nbsp;&nbsp; "redux": "^4.0.1",<br/>
     &nbsp;&nbsp;&nbsp;&nbsp; "redux-persist": "^5.10.0"<br/>
  }<br/>



## 本地运行

1.  下载本项目，并安装依赖包；
```bash
git clone https://github.com/kokobing/react-native-hopecode.git
cd react-native-hopecode
npm install
react-native link
```
2.  安装 React Native CLI 及安卓/iOS 开发环境（可参考 RN 中文网站介绍(https://reactnative.cn/docs/getting-started/)）

3.  项目根目录，执行下面命令：

```bash
react-native run-ios # ios
react-native run-android # 安卓
```

> 也可通过 Xcode 打开 ios 目录下的 “项目目录” 后点 `运行` 或者 Android Studio 打开 `android` 目录后点 `运行` 启动项目。



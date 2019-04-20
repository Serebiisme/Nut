import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import 'taro-ui/dist/style/index.scss';

import Index from './pages/index'

import configStore from './store'

import './app.scss'
import './styles/font/iconfont.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/count/count',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#6190E8',
      navigationBarTitleText: 'Nut',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: "#666666",
      selectedColor: "#666666",
      backgroundColor: "#fafafa",
      borderStyle: 'white',
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./assets/tab-bar/timer-line.png",
          selectedIconPath: "./assets/tab-bar/timer-fill.png",
          text: "计时"
        }, 
        {
          pagePath: 'pages/count/count',
          iconPath: "./assets/tab-bar/notification-badge-line.png",
          selectedIconPath: "./assets/tab-bar/notification-badge-fill.png",
          text: "统计"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

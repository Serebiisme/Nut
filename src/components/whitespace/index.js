import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class WhiteSpace extends Component {
  static defaultProps = {
    size:'md',
    background: false
  }

  render () {
    const { size,background } = this.props
    return (
      <View className={'comp-whitespace-' + size} style={{
        backgroundColor: background ? '#fafafa' : 'white'
      }}
      />
    )
  }
}


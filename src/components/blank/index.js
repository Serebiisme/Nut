import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss';

export default class Blank extends Component {
  
  static defaultProps = {
    size:'lg'
  }
  
  render () {
    const { size } = this.props
    return (
      <View className={'comp-wing-blank-' + size}>
        { this.props.children }
      </View>
    )
  }
}


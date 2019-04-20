import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { Blank, Flex } from '@components'

import './count.scss';
import { WhiteSpace } from '../../components';

export default class Count extends Component {
  config = {
  }
  componentWillMount () {}
  componentDidMount () {}
  componentDidShow () {}
  componentDidHide () {}
  render () {
    return (
      <View>
        <WhiteSpace size='lg' /> 
        <View className='at-row'>
          <View className='at-col'>
            <Flex direction='column'>
              <Text className='color-6'>今日坚持时长</Text>
              <WhiteSpace size='lg' />
              <Text>0</Text>
              <WhiteSpace size='lg' />
            </Flex>
          </View>
          <View className='at-col'>
            <Flex direction='column'>
              <Text className='color-6'>累计坚果数</Text>
              <WhiteSpace size='lg' />
              <Text>0</Text>
              <WhiteSpace size='lg' />
            </Flex>
          </View>
        </View>
        <WhiteSpace size='lg' background />
      </View>
    )
  }
}
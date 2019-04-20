import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Flex,WhiteSpace ,Blank} from '@components'
import { AtGrid, AtButton } from "taro-ui"

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Flex direction='column'>
          <WhiteSpace size='xl' />
          <View className='at-article__h2'>选择一个任务</View>
          <WhiteSpace size='xs' />
          <View className='at-article__h3 color-6'>在接下来的时间，坚持做这件事</View>
        </Flex>
        <WhiteSpace size='xl' />

        <AtGrid 
          data={
            [
              {
                value: '工作',
                iconInfo: {
                  value: 'bag',
                  color: '#a7dcfb',
                  prefixClass: 'icon',
                  size: 36
                }
              },
              {
                value: '娱乐',
                iconInfo: {
                  value: 'screen',
                  color: '#78e2cc',
                  prefixClass: 'icon',
                  size: 36
                }
              },
              {
                value: '听歌',
                iconInfo: {
                  value: 'earphone',
                  color: '#f7ca63',
                  prefixClass: 'icon',
                  size: 36
                }
              },
              {
                value: '创作',
                iconInfo: {
                  value: 'penholder',
                  color: '#6190E8',
                  prefixClass: 'icon',
                  size: 36
                }
              },
              {
                value: '运动',
                iconInfo: {
                  value: 'bicycle',
                  color: '#a384f7',
                  prefixClass: 'icon',
                  size: 36
                }
              },
              {
                value: '阅读',
                iconInfo: {
                  value: 'note',
                  color: '#e77a6b',
                  prefixClass: 'icon',
                  size: 36
                }
              },
            ]
          } 
        />
        <WhiteSpace size='lg' />
        <WhiteSpace size='lg' />
        <WhiteSpace size='lg' />
        <Blank>
          <AtButton type='secondary' size='nomal' circle customStyle={{ width: '50%' }}>开始坚持</AtButton>
        </Blank>
      </View>
    )
  }
}

export default Index

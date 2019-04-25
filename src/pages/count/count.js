import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button,Canvas } from '@tarojs/components'
import { Blank, Flex } from '@components'
import { AtListItem ,AtProgress} from "taro-ui"

import './count.scss';
import { WhiteSpace } from '../../components';

export default class Count extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this._canvas = null;
  }
  

  config = {
  }
  componentWillMount () {}
  componentDidMount () {
    // 获取绘图上下文 context
    this._canvas = Taro.createCanvasContext('canvas')

    this.createCircle(this._canvas,[
      { percent: 100 / 6, color: '#a7dcfb' },
      { percent: 100 / 6, color: '#78e2cc' },
      { percent: 100 / 6, color: '#f7ca63' },
      { percent: 100 / 6, color: '#6190e8' },
      { percent: 100 / 6, color: '#a384f7' },
      { percent: 100 / 6, color: '#e77a66' }
    ]);
  }
  componentDidShow () {}
  componentDidHide () {}

  createCircle(ctx, data = []) {
    if (!data.length) {
      return false;
    }
    // 设置边框宽度
    ctx.setLineWidth(20);
    // 设置起始绘制点
    // ctx.moveTo(110, 60);
    data.reduce((pre, item, index, array) => {
      const { percent ,color} = item;
      const perItem = array[index - 1];
      const start = perItem ? pre : 0;
      const end = start + percent;
      console.log(start,end);
      ctx.beginPath();
      // 设置边框颜色
      ctx.setStrokeStyle(color);
      const sAngle = (start * 2 / 100) * Math.PI; 
      const eAngle = (end * 2 / 100) * Math.PI; 
      ctx.arc(60, 60, 50, sAngle,  eAngle, false)
      ctx.stroke();
      return end
    },0)
    ctx.draw()
  } 
  
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
        <View>
          <AtListItem
            note='2019年04月20日'
            title='今日完成'
            extraText='0个坚果'
          />
          <WhiteSpace size='lg' />
          <Flex justify='center'>
            <Canvas style='width: 120px; height: 120px;' canvasId='canvas' />
          </Flex>
          <WhiteSpace size='lg' />       
          <View className='at-row'>
            <View className='at-col'>A</View>
            <View className='at-col'>B</View>
            <View className='at-col'>C</View>
            <View className='at-col'>A</View>
            <View className='at-col'>B</View>
            <View className='at-col'>C</View>
          </View>
          <WhiteSpace size='lg' />       
        </View>
        <WhiteSpace size='lg' background />
        <View>
          <AtListItem
            note='平均每天0个坚果'
            title='最近一周完成'
            extraText='0个坚果'
          />
          <WhiteSpace />       
          <Blank>
            <AtProgress percent={25} strokeWidth={14} color='#a7dcfb' status='progress' isHidePercent />
            <WhiteSpace />
            <AtProgress percent={35} strokeWidth={14} color='#78e2cc' status='progress' isHidePercent />
            <WhiteSpace />  
            <AtProgress percent={55} strokeWidth={14} color='#f7ca63' status='progress' isHidePercent />
            <WhiteSpace />  
            <AtProgress percent={75} strokeWidth={14} color='#6190e8' status='progress' isHidePercent />
            <WhiteSpace />  
            <AtProgress percent={45} strokeWidth={14} color='#a384f7' status='progress' isHidePercent />
            <WhiteSpace />  
            <AtProgress percent={15} strokeWidth={14} color='#e77a66' status='progress' isHidePercent />
            <WhiteSpace />  
            <AtProgress percent={66} strokeWidth={14} color='#FF4949' status='progress' isHidePercent />
            <WhiteSpace />         
          </Blank>
          <WhiteSpace size='lg' />       
        </View>

      </View>
    )
  }
}
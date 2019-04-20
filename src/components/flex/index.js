
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Flex extends Component {
  static defaultProps = {
    direction: 'row', // row,column
    wrap: 'nowwrap',  // nowrap,wrap
    justify: 'start', // start,end,center,between,around
    align: 'center',
    extraClass:''
  }

  justifyStyleMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
  }

  alignStyleMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
  }

  render () {
    const { direction, wrap, justify, align, extraClass} = this.props;
    return (
      <View
        className={extraClass}
        style={{
          display: 'flex',
          flexDirection: direction,
          flexWrap: wrap,
          justifyContent: this.justifyStyleMap[justify] || 'flex-start',
          alignItems: this.alignStyleMap[align] || 'center',
        }}
      >
        {
          this.props.children
        }
      </View>
    )
  }
}


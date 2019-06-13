# Sprite Extend ECharts

这是SpriteJS的ECharts插件。

## 使用方法

```js
import {use, Scene} from 'spritejs';
import spriteECharts from 'sprite-extend-echarts';

const {EChart} = use(spriteECharts);

const scene = new Scene('#container', {
  viewport: [700, 700],
  resolution: [1400, 1400],
});

const chart = new EChart({
  size: [700, 700],
});

chart.setOption({
  title: {
    text: 'ECharts 入门示例',
  },
  tooltip: {},
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20],
  }],
});

scene.layer().append(chart);
```
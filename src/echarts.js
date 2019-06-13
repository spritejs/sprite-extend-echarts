export default function install({use, utils, registerNodeType, BaseSprite}) {
  class EChart extends BaseSprite {
    createContext(w, h) {
      const container = document.createElement('div');
      container.style.width = `${w}px`;
      container.style.height = `${h}px`;
      container.style.position = 'absolute';
      container.style.left = '-10000px';
      container.style.overflow = 'hidden';
      // container.style.display = 'none';
      document.body.appendChild(container);
      this.chart = echarts.init(container);
      this.chartContainer = container;

      this.chart.setOption(this.option);
      this.chart.on('rendered', () => {
        this.forceUpdate(true);
      });
    }

    setOption(option) {
      this.option = option;
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);

      const [w, h] = this.clientSize;

      if(!this.chart) this.createContext(w, h);

      const chartDiv = this.chartContainer;
      const {clientWidth, clientHeight} = chartDiv;
      // console.log(clientWidth, clientHeight);
      if(w !== clientWidth || h !== clientHeight) {
        // console.log('resize');
        chartDiv.style.width = `${w}px`;
        chartDiv.style.height = `${h}px`;
        this.chart.resize();
      }
      const canvas = this.chart.getRenderedCanvas();
      drawingContext.drawImage(canvas, 0, 0, w, h);
    }
  }

  registerNodeType('echart', EChart);

  return {EChart};
}
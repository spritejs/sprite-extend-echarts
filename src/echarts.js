export default function install({use, utils, registerNodeType, BaseSprite}) {
  class EChart extends BaseSprite {
    createContext(w, h) {
      const container = document.createElement('div');
      container.style.width = `${w}px`;
      container.style.height = `${h}px`;
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

      const canvas = this.chart.getRenderedCanvas();

      if(w !== canvas.width || h !== canvas.height) {
        this.chartContainer.style.width = `${w}px`;
        this.chartContainer.style.height = `${h}px`;
        this.chart.resize();
      }
      drawingContext.drawImage(canvas, 0, 0, w, h);
    }
  }

  registerNodeType('echart', EChart);

  return {EChart};
}
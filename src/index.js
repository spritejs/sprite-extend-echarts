import EChart from './echarts';

// auto use
if(typeof window !== 'undefined' && window.spritejs) {
  window.spritejs.use(install);
}

export default function install({use}) {
  return [
    EChart,
  ].reduce((pkg, Node) => {
    return Object.assign(pkg, use(Node));
  }, {});
}
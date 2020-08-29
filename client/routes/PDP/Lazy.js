import loadable from '@loadable/component';

const errorLoading = err => console.log('Home page loading failed!', err);

const PdpComponent = loadable(() =>
  import(/* webpackChunkName: "PDP" */ './components').catch(errorLoading),
);

export default PdpComponent;

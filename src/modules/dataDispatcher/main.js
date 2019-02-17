import storyMap from '../../datas/storyMap/main';

export function dataDispatcher() {

    let result;

    const dataMapped = storyMap();

    let currentHash = window.location.hash.replace('#', '');

    console.log('voila, le currentHash :' , currentHash);
  
    result = dataMapped[currentHash];

    return result;
  
  }
  
  export default dataDispatcher;
  




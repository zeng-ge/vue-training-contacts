const user = { name: 'sky' }

const createProxy = target => {
  const proxy = {}
  const dependence = {};
  Object.defineProperty(proxy, 'name', {
    enumerable: true,
    configurable: true,
    get() {
      if(!dependence.track) {
        dependence.track = track;
        track.dependences.push(dependence);
      }
      return target['name']
    },
    set(value){
      target['name'] = value
      dependence.track.run();
    }
  })
  return proxy
}

const userProxy = createProxy(user)
const track = {
  dependences: [],
  run: () => {
    console.log('track ' + userProxy.name)
  }
}
track.run();

userProxy.name = '12'
userProxy.name = '34'
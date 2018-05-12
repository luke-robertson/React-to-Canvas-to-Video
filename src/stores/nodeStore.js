import { observable, action } from 'mobx'

class NodeStore {
  @observable block = {}

  @action
  updateNode = (target, val) => {
    this[target] = val
  }
}

const nodeStore = new NodeStore()

export default nodeStore

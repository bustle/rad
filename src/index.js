import MemoryAdapter from 'adapter/memory'

export class Graph {

  get name() { return this._name }
  get adapter() { return this._adapter }

  constructor(name, adapter: new MemoryAdapter()) {
    this._name = name
    this._adapter = adapter
  }

}

/*

const graph = new Graph('Tyler')

const User = graph.createType('User')

const nodeA = graph.createNode('Person', { payload })
const nodeB = graph.createNode('Person'{ payload })
const edgegraph.createEdge(nodeA, nodeB, { payload })


*/

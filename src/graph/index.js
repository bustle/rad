import NodeType from '../node-type'
import EdgeType from '../edge-type'

export default class Graph {
  constructor(name) {
    this._name = name
    this._nodeTypes = []
    this._edgeTypes = []
  }

  get name() { return this._name }
  get nodeTypes() { return this._nodeTypes }
  get edgeTypes() { return this._edgeTypes }

  node({name, graph=this}) {
    debugger
    const nodeType = new NodeType({graph, name})
    this._nodeTypes[name] = nodeType
    return nodeType
  }

  edge({from, to, label}) {
    const edgeType = new EdgeType({from, to, label})
    this._edgeTypes[label] = edgeType
    return edgeType
  }
}

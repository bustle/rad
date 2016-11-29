import { NodeType } from '../node'
import { EdgeType } from '../edge'

export default class Graph {
  constructor(name) {
    this._name = name
    this._nodeTypes = []
    this._edgeTypes = []
  }

  get name() { return this._name }
  get nodeTypes() { return this._nodeTypes }
  get edgeTypes() { return this._edgeTypes }

  node(name) {
    const nodeType = new NodeType(name)
    this._nodeTypes[name] = nodeType
    return nodeType
  }

  edge({from, to, label}) {
    const edgeType = new EdgeType({from, to, label})
    this._edgeTypes[label] = edgeType
    return edgeType
  }
}

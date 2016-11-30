import NodeType from '../node-type'
import EdgeType from '../edge-type'
import { AdapterBase } from '../adapter'

export default class Graph {
  constructor({ name, adapter=new AdapterBase() }) {
    this._name = name
    this._adapter = adapter
    this._nodeTypes = []
    this._edgeTypes = []
  }

  get name() { return this._name }
  get adapter() { return this._adapter }
  get nodeTypes() { return this._nodeTypes }
  get edgeTypes() { return this._edgeTypes }

  node({name, graph=this}) {
    const nodeType = new NodeType({graph, name})
    this._nodeTypes[name] = nodeType
    return nodeType
  }

  edge({from, to, label, graph=this}) {
    const edgeType = new EdgeType({graph, from, to, label})
    this._edgeTypes[label] = edgeType
    return edgeType
  }
}

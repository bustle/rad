import NodeType from '../node-type'
import EdgeType from '../edge-type'

export default class Schema {
  constructor(graph) {
    this._graph = graph
    this._nodeTypes = {}
    this._edgeTypes = {}
  }

  get graph() { return this._graph }
  get nodeTypes() { return this._nodeTypes }
  get edgeTypes() { return this._edgeTypes }

  node(name, definition=()=>{}) {
    const graph = this.graph
    const nodeType = new NodeType(graph, name, definition)
    definition(nodeType)
    this.nodeTypes[nodeType.name] = nodeType
    return nodeType
  }

  edge(fromType, toType, label) {
    const graph = this.graph
    const edgeType = new EdgeType(graph, fromType, toType, label)
    this.edgeTypes[edgeType.label] = edgeType
    return edgeType
  }
}
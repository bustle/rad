import Node from '../node'
import NodeType from '../node-type'
import EdgeType from '../edge-type'

export default class Schema {
  constructor (graph) {
    this._graph = graph
    this._nodeTypes = {}
    this._edgeTypes = {}
  }

  get graph () { return this._graph }
  get nodes () { return this._nodes }
  get edges () { return this._edges }
  get nodeTypes () { return this._edgeTypes }
  get edgeTypes () { return this._edgeTypes }

  node (label, definition = () => {}) {
    const graph = this.graph
    const nodeType = new NodeType(graph, label, definition)
    definition(nodeType)
    this.nodeTypes[nodeType.label] = nodeType
    return nodeType
  }

  edge (from, to, label) {
    const graph = this.graph
    const edgeType = new EdgeType(graph, from, to, label)
    this.edgeTypes[edgeType.label] = edgeType
    return edgeType
  }
}

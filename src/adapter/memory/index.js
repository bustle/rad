import { AdapterBase, NodeDelegate, EdgeDelegate } from '../../adapter'

let GUID = 0

export default class MemoryAdapter extends AdapterBase {
  constructor () {
    super('Memory', MemoryNodeDelegate, MemoryEdgeDelegate)
    this.STORE = {
      NODES: {},
      NODE_INDEXES: {},
      EDGES: {},
      EDGE_INDEXES: {}
    }
  }
}

class MemoryNodeDelegate extends NodeDelegate {
  // Adapter Static
  async create (type, attributes) {
    const {NODES, NODE_INDEXES} = this._adapter.STORE
    const {label} = type
    const node = new type.Base(attributes)
    await node.save()
    return node
  }

  async get (type, id) {
    const {NODES} = this._adapter.STORE
    return NODES[id] || null
  }

  async all (type) {
    const {NODES, NODE_INDEXES} = this._adapter.STORE
    const index = NODE_INDEXES[type.label]
    if(!index) { return [] }
    return index.map(id => NODES[id])
  }

  async count (type) {
    const {NODE_INDEXES} = this._adapter.STORE
    const index = NODE_INDEXES[type.label]
    if(!index) { return 0 }
    return index.length
  }

  // Adapter Instance
  async save (node) {
    const {NODES, NODE_INDEXES} = this._adapter.STORE
    const {isSaved} = node
    if(isSaved) {
      return this.update(node)
    }
    const id = ++GUID
    const label = node.label
    node.id = id
    NODES[id] = node
    if(!NODE_INDEXES[label]) {
      NODE_INDEXES[label] = []
    }
    NODE_INDEXES[label].push(id)
    return node
  }

  async update (node) {
    const {NODES} = this._adapter.STORE
    NODES[node.id] = node
    return node
  }

  async destroy (node) {
    const {NODES, NODE_INDEXES} = this._adapter.STORE
    delete NODES[node.id]
    NODE_INDEXES[node.label] = NODE_INDEXES[node.label].filter(id => id === node.id)
    return node
  }
}

class MemoryEdgeDelegate extends EdgeDelegate {
  // Adapter Static
  async get (type, id) {
    const {EDGES} = this._adapter.STORE
    return EDGES[id] || null
  }

  async range (type, start, end) {
    const {EDGES} = this._adapter.STORE
    const ids = Object.keys(EDGES)
    const range = ids.slice(start, end)
    return range.map(id => EDGES[id])
  }

  async count (type) {
    const {EDGE_INDEXES} = this._adapter.STORE
    const index = EDGE_INDEXES[type.label]
    if(!index) { return 0 }
    return index.length
  }

  // Adapter Instance
  async connect (edge) {
    const {EDGES} = this._adapter.STORE
    edge.id = ++GUID
    EDGES[edge.id] = edge
    return edge
  }
  async disconnect (edge) {
    const {EDGES} = this._adapter.STORE
    delete EDGES[edge.id]
    return edge
  }
}

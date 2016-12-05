import { AdapterBase, NodeDelegate, EdgeDelegate } from '../../adapter'

let GUID = 0
const STORE = {}

export default class MemoryAdapter extends AdapterBase {
  constructor () {
    super('Memory', MemoryNodeDelegate, MemoryEdgeDelegate)
  }
}

class MemoryNodeDelegate extends NodeDelegate {

  // Adapter Static
  static async create (node) {
    node.id = GUID++
    STORE[node.id] = node
    return node
  }

  static async get (id) {
    return STORE[id]
  }

  static async all () {
    const ids = Object.keys(STORE)
    return ids.map(id => STORE[id])
  }

  static async count () {
    return Object.keys(STORE).length
  }


  // Adapter Instance
  static async save (node) {
    return node.isSaved ? this.update(node) : this.create(node)
  }

  static async update (node) {
    STORE[node.id] = node
    return node
  }

  static async destroy (node) {
    delete STORE[node.id]
    return node
  }
}

class MemoryEdgeDelegate extends EdgeDelegate {
  // Adapter Static
  static async get (id) {
    return STORE[id] || null
  }

  static async range (start, end) {
    const ids = Object.keys(STORE)
    const range = ids.slice(start, end)
    return range.map(id => STORE[id])
  }

  static async count () {
    return Object.keys(STORE).length
  }

  // Adapter Instance
  static async connect (edge) {
    edge.id = GUID++
    STORE[edge.id] = edge
    return edge
  }
  static async disconnect (edge) {
    delete STORE[edge.id]
    return edge
  }
}

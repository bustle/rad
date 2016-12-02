import { AdapterBase, NodeDelegate, EdgeDelegate } from '../../adapter'

let GUID = 0
const NODES = {}
const EDGES = {}

export default class MemoryAdapter extends AdapterBase {
  constructor () {
    super('Memory', MemoryNodeDelegate, MemoryEdgeDelegate)
  }
}

class MemoryNodeDelegate extends NodeDelegate {

  // Adapter Static
  static async create (node) {
    node.id = GUID++
    NODES[node.id] = node
    return node
  }

  static async get (id) {
    return NODES[id]
  }

  static async all () {
    const ids = Object.keys(NODES)
    return ids.map(id => NODES[id])
  }

  static async count () {
    return Object.keys(NODES).length
  }


  // Adapter Instance
  static async save (node) {
    return node.isSaved ? this.update(node) : this.create(node)
  }

  static async update (node) {
    NODES[node.id] = node
    return node
  }

  static async destroy (node) {
    delete NODES[node.id]
    return node
  }
}

class MemoryEdgeDelegate extends EdgeDelegate {

}

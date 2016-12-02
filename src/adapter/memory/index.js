import { AdapterBase, NodeDelegate, EdgeDelegate } from '../../adapter'

const GUID = 0
const NODES = {}
const EDGES = {}

export default class MemoryAdapter extends AdapterBase {
  constructor () {
    super('Memory', MemoryNodeDelegate, MemoryEdgeDelegate)
  }
}

class MemoryNodeDelegate extends NodeDelegate {
  static async save (node) {
    return node.isSaved ? this.update(node) : this.create(node)
  }

  static async create (node) {
    node.id = GUID++
    NODES[node.id] = node
    return node
  }

  static async update (node) {
    NODES[node.id] = node
    return node
  }

  static async get (id) {
    return NODES[id]
  }

  static async all () {
    return NODES
  }

  static async count () {
    return NODES.length
  }

  static async destroy (id) {
    const node = await this.get(id)
    delete NODES[node.id]
    return node
  }
}

class MemoryEdgeDelegate extends EdgeDelegate {

}

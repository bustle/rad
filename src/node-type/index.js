import Node from '../node'
import Edge from '../edge'

function defineBase (type) {
  const Base = class extends Node {
    constructor(attributes={}) {
      super(type, attributes)
    }

    static get type () { return type }
    static get typeLabel () { return type.label }
  }
  return Base
}

export default class NodeType {
  constructor (graph, label) {
    this._graph = graph
    this._label = label
    this._Base = defineBase(this)
  }

  get graph () { return this._graph }
  get label () { return this._label }
  get Base () { return this._Base }

  hasOne (to) {
    const graph = this.graph
    const Base = this.Base
    const from = this.label
    const label = `${from}${to}`
    const edgeType = graph.defineEdge(from, to, label)
    const propName = to.toLowerCase()

    Object.defineProperty(Base.prototype, propName, {
      get: async function () {
        const edge = await Edge.get()
      }
    })

    return edgeType
  }
}

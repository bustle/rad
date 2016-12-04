import Edge from '../edge'

function defineBase (type) {
  const Base = class extends Edge {
    constructor(from, to) {
      super(type, from, to)
    }

    static get type () { return type }
    static get label () { return type.label }
  }
  return Base
}

export default class EdgeType {
  constructor (graph, fromType, toType, label) {
    this._graph = graph
    this._fromType = fromType
    this._toType = toType
    this._label = label
    this.Base = defineBase (this)
  }

  get graph () { return this._graph }
  get from () { return this.graph.nodeTypes[this._fromType] }
  get to () { return this.graph.nodeTypes[this._toType] }
  get label () { return this._label }
}

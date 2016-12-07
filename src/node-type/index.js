import { defineNode } from '../node'
import Edge from '../edge'

export default class NodeType {
  constructor (graph, label) {
    this._graph = graph
    this._label = label
    this._Base = defineNode(this)
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
      },
      set: async function (val) {
        console.log('setter')
      }
    })

    return edgeType
  }
}

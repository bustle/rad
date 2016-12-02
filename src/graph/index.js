import Schema from '../schema'
import NodeType from '../node-type'
import EdgeType from '../edge-type'
import { AdapterBase } from '../adapter'

export default class Graph {
  constructor (name, { schema = new Schema(this), adapter = new AdapterBase() } = {}) {
    this._name = name
    this._schema = schema
    this._adapter = adapter
  }

  get name () { return this._name }
  get adapter () { return this._adapter }
  get nodeTypes () { return this._schema.nodeTypes }
  get edgeTypes () { return this._schema.edgeTypes }

  schema (definition) {
    return definition(this._schema)
  }

  defineNode (name, definition = () => {}) {
    return this._schema.node(name, definition)
  }

  defineEdge (fromType, toType, label) {
    return this._schema.edge(fromType, toType, label)
  }
}

// const graph = new Graph('Bustle')
//
// graph.schema(define => {
//
//   define.node('User', user => {
//     user.hasOne('Post')
//   })
//
//   define.node('Post', post => {
//     post.hasOne('User')
//   })
//
// })

// import * as fixtures from './fixtures'
// import { NodeType } from '../src/node'
// import { EdgeType } from '../src/edge'
//
// const {
//   GRAPH_NAME,
//   NODE_TYPE_NAME,
//   EDGE_TYPE_LABEL,
//   generateGraph
// } = fixtures
//
// // test.beforeEach(t => {
// //   t.context.graphName = GRAPH_NAME
// //   t.context.nodeTypeName = NODE_TYPE_NAME
// //   t.context.edgeTypeLabel = EDGE_TYPE_LABEL
// //   t.context.graph = generateGraph()
// // })
//
// describe('Graph', () => {
//   describe('constructor', () => {
//     it('sets initialization properties', t => {
//       const graph = t.context.graph
//       t.is(graph.name, t.context.graphName)
//     })
//   })
//
//   describe('.node', () => {
//     it('returns an instance of NodeType', t => {
//       const {graph, nodeTypeName} = t.context
//       const nodeType = graph.node(nodeTypeName)
//       t.true(nodeType instanceof NodeType)
//     })
//
//     it('adds the NodeType to the register', t => {
//       const {graph, nodeTypeName} = t.context
//       const nodeType = graph.node(nodeTypeName)
//       t.is(graph.nodeTypes[nodeTypeName], nodeType)
//     })
//   })
//
//   describe('.edge', () => {
//     // console.log('it', it)
//     it('returns an instance of EdgeType', t => {
//       const {graph, edgeTypeLabel: label} = t.context
//       const from = graph.node('From')
//       const to = graph.node('To')
//       const edgeType = graph.edge({
//         from, to, label
//       })
//       t.true(edgeType instanceof EdgeType)
//     })
//
//     it('adds the EdgeType to the register', t => {
//       const {graph, edgeTypeLabel: label} = t.context
//       const from = graph.node('From')
//       const to = graph.node('To')
//       const edgeType = graph.edge({
//         from, to, label
//       })
//       t.is(graph.edgeTypes[label], edgeType)
//     })
//   })
//
//   describe('.hasMany', () => {
//   })
// })
//
// /*
//  * const graph = new Graph('Bustle')
//  *
//  * const Post = graph.node('Post')
//  * const User = graph.node('Post')
//  *
//  * Post.hasMany('authors', { as: User })
//  * Post.hasOne('owner', { as: User })
//  *
//  * const user = await User.create({ attributes })
//  * const post = await Post.create({ attributes })
//  *
//  * await post.addAuthor(author, { label: 'Designer' })
//  * await post.owner = author
//  *
//  *
//  */

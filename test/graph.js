import { generateGraph } from './fixtures'
import NodeType from '../src/node-type'
import EdgeType from '../src/edge-type'

describe('Graph', () => {
  let context
  beforeEach(() => {
    context = {}
  })

  describe('.constructor', () => {
    beforeEach(() => {
      const name = 'TestGraph'
      const graph = generateGraph({name})
      context = {graph, name}
    })

    it('sets initialization properties', () => {
      const {graph, name} = context
      expect(graph.name).to.equal(name)
    })
  })

  describe('.node', () => {
    beforeEach(() => {
      const nodeTypeName = 'TestNodeType'
      const graph = generateGraph()
      context = {graph, nodeTypeName}
    })

    it('returns an instance of NodeType', () => {
      const {graph, nodeTypeName} = context
      const nodeType = graph.node(nodeTypeName)
      expect(nodeType).to.be.an.instanceof(NodeType)
    })

    it('adds the NodeType to the register', () => {
      const {graph, nodeTypeName} = context
      const nodeType = graph.node(nodeTypeName)
      expect(graph.nodeTypes[nodeTypeName]).to.equal(nodeType)
    })
  })

  describe('.edge', () => {
    beforeEach(() => {
      const graph = generateGraph()
      const label = 'TestEdge'
      const from = graph.node('From')
      const to = graph.node('To')
      context = {graph, from, to, label}
    })

    it('returns an instance of EdgeType', () => {
      const {graph, from, to, label} = context
      const edgeType = graph.edge({
        from, to, label
      })
      expect(edgeType).to.be.an.instanceof(EdgeType)
    })

    it('adds the EdgeType to the register', () => {
      const {graph, from, to, label} = context
      const edgeType = graph.edge({
        from, to, label
      })
      expect(graph.edgeTypes[label]).to.equal(edgeType)
    })
  })
})

/*
 * const graph = new Graph('Bustle')
 *
 * const Post = graph.node('Post')
 * const User = graph.node('Post')
 *
 * Post.hasMany('authors', { as: User })
 * Post.hasOne('owner', { as: User })
 *
 * const user = await User.create({ attributes })
 * const post = await Post.create({ attributes })
 *
 * await post.addAuthor(author, { label: 'Designer' })
 * await post.owner = author
 *
 *
 */

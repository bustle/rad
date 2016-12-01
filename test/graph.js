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

  describe('.defineNode', () => {
    beforeEach(() => {
      const nodeTypeName = 'TestNodeType'
      const graph = generateGraph()
      context = {graph, nodeTypeName}
    })

    it('returns an instance of NodeType', () => {
      const {graph, nodeTypeName} = context
      const nodeType = graph.defineNode(nodeTypeName)
      expect(nodeType).to.be.an.instanceof(NodeType)
    })
  })

  describe('.edge', () => {
    beforeEach(() => {
      const graph = generateGraph()
      const label = 'TestEdge'
      const fromType = 'User'
      const toType = 'Post'
      context = {graph, fromType, toType, label}
    })

    it('returns an instance of EdgeType', () => {
      const {graph, fromType, toType, label} = context
      const edgeType = graph.defineEdge(fromType, toType, label)
      expect(edgeType).to.be.an.instanceof(EdgeType)
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

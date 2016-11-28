import { test, describe } from 'ava-spec'
import * as fixtures from '../fixtures'
import { NodeType } from '../../src/node'
import { EdgeType } from '../../src/edge'

const {
  GRAPH_NAME,
  NODE_TYPE_NAME,
  EDGE_TYPE_NAME,
  generateGraph,
  generateNodeType
} = fixtures

test.beforeEach(t => {
  t.context.graphName = GRAPH_NAME
  t.context.nodeTypeName = NODE_TYPE_NAME
  t.context.edgeTypeName = EDGE_TYPE_NAME
  t.context.graph = generateGraph()
})

describe('Graph', subject => {
  subject.describe('constructor', it => {
    it('sets initialization properties', t => {
      const graph = t.context.graph
      t.is(graph.name, GRAPH_NAME)
    })
  })

  subject.describe('.node', it => {
    it('returns an instance of NodeType', t => {
      const {graph, nodeTypeName} = t.context
      const nodeType = graph.node(nodeTypeName)
      t.true(nodeType instanceof NodeType)
    })

    it('adds the NodeType to the register', t => {
      const {graph, nodeTypeName} = t.context
      const nodeType = graph.node(nodeTypeName)
      t.is(graph.nodeTypes[nodeTypeName], nodeType)
    })
  })

  subject.describe('.edge', it => {
    it('returns an instance of EdgeType', t => {
      const {graph, edgeTypeName} = t.context
      const edgeType = graph.edge(edgeTypeName)
      t.true(edgeType instanceof EdgeType)
    })

    it('adds the EdgeType to the register', t => {
      const {graph, edgeTypeName} = t.context
      const edgeType = graph.edge(edgeTypeName)
      t.is(graph.edgeTypes[EDGE_TYPE_NAME], edgeType)
    })
  })
})

/*
 * const graph = new Graph('Bustle')
 *
 * const Post = graph.node('Post')
 * const User = graph.node('Post')
 *
 * Post.hasMany('authors', User)
 * Post.hasOne('owner', User)
 *
 * const user = await User.create({ attributes })
 * const post = await Post.create({ attributes })
 *
 * await post.addAuthor(author, { label: 'Designer' })
 * await post.owner = author
 *
 *
 */

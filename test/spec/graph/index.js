import { test, describe } from 'ava-spec'
import Graph from '../../../src/graph'
import { NodeType } from '../../../src/node'
import { EdgeType } from '../../../src/edge'

const GRAPH_NAME = 'TestGraph'
const NODE_TYPE_NAME = 'User'
const EDGE_TYPE_NAME = 'UserPosts'

test.beforeEach(t => {
  const graph = new Graph(GRAPH_NAME)
  t.context.graph = graph
})

describe('Graph', subject => {
  subject.describe('#constructor', it => {
    it('sets a name', t => {
      const graph = t.context.graph
      t.is(graph.name, GRAPH_NAME)
    })
  })

  subject.describe('.node', it => {
    it('returns an instance of NodeType', t => {
      const graph = t.context.graph
      const nodeType = graph.node(NODE_TYPE_NAME)
      t.true(nodeType instanceof NodeType)
    })

    it('adds the NodeType to the register', t => {
      const graph = t.context.graph
      const nodeType = graph.node(NODE_TYPE_NAME)
      t.is(graph.nodeTypes[NODE_TYPE_NAME], nodeType)
    })
  })

  subject.describe('.edge', it => {
    it('returns an instance of EdgeType', t => {
      const graph = t.context.graph
      const edgeType = graph.edge(EDGE_TYPE_NAME)
      t.true(edgeType instanceof EdgeType)
    })

    it('adds the EdgeType to the register', t => {
      const graph = t.context.graph
      const edgeType = graph.edge(EDGE_TYPE_NAME)
      t.is(graph.edgeTypes[EDGE_TYPE_NAME], edgeType)
    })
  })
})

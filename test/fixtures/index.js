import Graph from '../../src/graph'

export const GRAPH_NAME = 'BustleTestGraph'
export const NODE_TYPE_NAME = 'User'
export const EDGE_TYPE_LABEL = 'UserPosts'

export function generateGraph() {
  return new Graph(GRAPH_NAME)
}

export function generateNodeType() {
  const graph = generateGraph()
  return graph.node(NODE_TYPE_NAME)
}

export function generateEdgeType() {
  const graph = generateGraph()
  const from = graph.node('From')
  const to = graph.node('To')
  const label = EDGE_TYPE_LABEL
  return graph.edge({ from, to, label })
}

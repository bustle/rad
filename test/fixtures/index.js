import Graph from '../../src/graph'

export const GRAPH_NAME = 'TestGraph'
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
  return graph.edge(EDGE_TYPE_LABEL)
}

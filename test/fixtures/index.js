import Graph from '../../src/graph'

export const GRAPH_NAME = 'TestGraph'
export const NODE_TYPE_NAME = 'TestNodeType'
export const EDGE_TYPE_LABEL = 'TestEdgeType'

export function generateGraph({name=GRAPH_NAME}={}) {
  return new Graph(name)
}

export function generateNodeType({graph=generateGraph(), name=NODE_TYPE_NAME}={}) {
  return graph.defineNode(name)
}

export function generateEdgeType({fromType='Post', toType='User', label=EDGE_TYPE_LABEL}={}) {
  const graph = generateGraph({name: GRAPH_NAME})
  graph.schema(define => {
    define.node(fromType)
    define.node(toType)
  })
  return graph.defineEdge(fromType, toType, label)
}

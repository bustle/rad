import Graph from '../../src/graph'

export const GRAPH_NAME = 'TestGraph'
export const NODE_TYPE_NAME = 'TestNodeType'
export const EDGE_TYPE_LABEL = 'TestEdgeType'

export function generateGraph({name=GRAPH_NAME}={}) {
  return new Graph({name})
}

export function generateNodeType({graph=generateGraph(), name=NODE_TYPE_NAME}={}) {
  return graph.node({name})
}

export function generateEdgeType({fromType='From', toType='To', label=EDGE_TYPE_LABEL}={}) {
  const graph = generateGraph()
  const from = graph.node({name: fromType})
  const to = graph.node({name: toType})
  return graph.edge({ from, to, label })
}

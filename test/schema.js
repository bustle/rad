import { generateGraph } from './fixtures'
import Schema from '../src/schema'


describe('Schema', () => {
  let context
  beforeEach(() => {
    context = {}
    const graph = generateGraph({name: 'TestGraph'})
    const schema = new Schema(graph)
    context = {graph,schema}
  })

  describe('.node', () => {
    beforeEach(() => {
      const nodeTypeName = 'User'
      context.nodeTypeName = nodeTypeName
    })

    it('adds the NodeType to the register', () => {
      const {schema, nodeTypeName} = context
      const nodeType = schema.node(nodeTypeName)
      expect(schema.nodeTypes[nodeTypeName]).to.equal(nodeType)
    })
  })

  describe('.edge', () => {
    beforeEach(() => {
      const {schema} = context
      const fromType = schema.node('User')
      const toType = schema.node('Post')
      const label = 'UserPost'
      debugger
      context.fromType = fromType
      context.toType = toType
      context.label = label
    })

    it('adds the EdgeType to the register', () => {
      const {schema, fromType, toType, label} = context
      const edgeType = schema.edge(fromType, toType, label)
      expect(schema.edgeTypes[label]).to.equal(edgeType)
    })
  })
})


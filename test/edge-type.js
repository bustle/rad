import { NodeType } from '../src/node'

const {
  generateEdgeType
} = fixtures

describe('EdgeType', () => {
  describe('constructor', () => {
    let context
    beforeEach(() => {
      const label = 'TestEdgeType'
      context = {}
      context.label = label
      context.edgeType = generateEdgeType({label})
    })

    it('sets initialization properties', () => {
      debugger
      const {edgeType,label} = context
      expect(edgeType.label).to.equal(label)
      expect(edgeType.from).to.be.instanceof(NodeType)
      expect(edgeType.to).to.be.instanceof(NodeType)
    })
  })
})


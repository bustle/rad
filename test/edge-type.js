import * as fixtures from './fixtures'
import NodeType from '../src/node-type'

const {
  generateEdgeType
} = fixtures

describe('EdgeType', () => {
  let context
  beforeEach(() => {
    context = {}
  })

  describe('.constructor', () => {
    let context
    beforeEach(() => {
      const label = 'TestEdgeType'
      const edgeType = generateEdgeType({label})
      context = {label,edgeType}
    })

    it('sets initialization properties', () => {
      const {edgeType,label} = context
      expect(edgeType.label).to.equal(label)
      expect(edgeType.from).to.be.an.instanceof(NodeType)
      expect(edgeType.to).to.be.an.instanceof(NodeType)
    })
  })

  it('.from')
  it('.to')
  it('.multiplicity')
})


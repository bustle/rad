import { generateNodeType } from './fixtures'
import EdgeType from '../src/edge-type'

describe('NodeType', () => {
  let context
  beforeEach(() => {
    const label = 'TestNodeType'
    const nodeType = generateNodeType({label})
    context = {label,nodeType}
  })

  describe('.constructor', () => {
    it('sets initialization properties', () => {
      const {nodeType,label} = context
      expect(nodeType.label).to.equal(label)
    })
  })

  it('.manyToMany')
  it('.oneToMany')
  it('.manyToOne')

  describe('hasOne', () => {
    beforeEach(() => {
      const {nodeType} = context
      const edgeType = nodeType.hasOne('Thing')
      context.edgeType = edgeType
    })

    it('returns an EdgeType', () => {
      const {nodeType, edgeType} = context
      expect(edgeType).to.be.an.instanceof(EdgeType)
    })
  })
})

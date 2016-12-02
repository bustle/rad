import { generateNodeType } from './fixtures'
import EdgeType from '../src/edge-type'

describe('NodeType', () => {
  let context
  beforeEach(() => {
    const label = 'TestNodeType'
    const nodeType = generateNodeType({label})
    context = {label, nodeType}
  })

  describe('.constructor', () => {
    it('sets initialization properties', () => {
      const {nodeType, label} = context
      expect(nodeType.label).to.equal(label)
    })

    it('creates has a base Node class', () => {
      const {nodeType} = context
      expect(nodeType.Base).not.to.be.null
    })

    it('sets the base Node type', () => {
      const {label,nodeType} = context
      expect(nodeType.Base.type).to.equal(nodeType)
      expect(nodeType.Base.typeLabel).to.equal(label)
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

    it('defines properties on base class', () => {
      const {nodeType} = context
      const BasePrototype = nodeType.Base.prototype
      expect(BasePrototype).to.have.ownProperty('thing')
    })
  })
})

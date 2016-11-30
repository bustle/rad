import { NodeType } from '../src/node'

const {
  generateNodeType
} = fixtures

describe('NodeType', () => {
  let context
  beforeEach(() => {
    const name = 'TestNodeType'
    const nodeType = generateNodeType({name})
    context = {name,nodeType}
  })

  describe('constructor', () => {
    it('sets initialization properties', () => {
      const {nodeType,name} = context
      expect(nodeType.name).to.equal(name)
    })
  })

  describe('.hasMany', () => {
    it('creates an EdgeType', () => {
      const {nodeType} = context
    })
  })
})

console.log('Node')
import { Node } from '../src/node'

const {
  generateGraph,
  generateNodeType
} = fixtures

describe('Node', () => {
  describe('constructor', () => {
    let context
    beforeEach(() => {
      context = {}
      context.type = generateNodeType()
      context.attributes = {
        name: 'Tyler Love',
        age: 30
      }
      context.node = new Node(context.attributes)
    })

    it('sets initialization properties', () => {
      const {node,type,attributes} = context
      expect(node.type).to.equal(type)
      expect(node.attributes).to.equal(attributes)
    })
  })
})


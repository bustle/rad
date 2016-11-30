import { generateGraph, generateNodeType } from './fixtures'
import { Node } from '../src/node'

describe('Node', () => {
  describe('constructor', () => {
    let context
    beforeEach(() => {
      const type = generateNodeType()
      const attributes = {
        name: 'Tyler Love',
        age: 30
      }
      const node = new Node({type, attributes})
      context = {node,type,attributes}
    })

    it('sets initialization properties', () => {
      const {node,type,attributes} = context
      expect(node.type).to.equal(type)
      expect(node.attributes).to.equal(attributes)
    })
  })
})


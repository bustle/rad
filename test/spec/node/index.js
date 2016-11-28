import { describe } from 'ava-spec'
import { NodeType } from '../../../src/node'

describe('NodeType', () => {
  describe('constructor', it => {
    it('sets a name', test => {
      const name = 'TestNode'
      const TestNode = new NodeType(name)
      test.is(name, TestNode.name)
    })
  })
})

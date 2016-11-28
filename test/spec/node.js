import { test, describe } from 'ava-spec'
import * as fixtures from '../fixtures'
import { Node } from '../../src/node'

const {
  generateGraph,
  generateNodeType
} = fixtures

test.beforeEach(t => {
  t.context.graph = generateGraph()
})

describe('Node', subject => {
  subject.describe('constructor', it => {
    it('sets initialization properties', t => {
      const type = generateNodeType()
      const attributes = {
        name: 'Tyler Love',
        age: 30
      }
      const node = new Node({ type, attributes })
      t.is(node.type, type)
      t.is(node.attributes, attributes)
    })
  })
})


import { test, describe } from 'ava-spec'
import * as fixtures from '../../fixtures'
import { NodeType } from '../../../src/node'

const {
  NODE_TYPE_NAME,
  generateNodeType
} = fixtures

test.beforeEach(t => {
  t.context.nodeTypeName = NODE_TYPE_NAME
  t.context.nodeType = generateNodeType()
})

describe('NodeType', subject => {
  subject.describe('constructor', it => {
    it('sets initialization properties', t => {
      t.is(t.context.nodeType.name, t.context.nodeTypeName)
    })
  })
})

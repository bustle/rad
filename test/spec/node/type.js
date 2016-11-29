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
      const {nodeType, nodeTypeName: name} = t.context
      t.is(nodeType.name, name)
    })
  })

  subject.describe('.hasMany', it => {
    it('creates an EdgeType', t => {
      const {nodeType} = t.context
    })
  })
})

import { test, describe } from 'ava-spec'
import * as fixtures from '../../fixtures'
import { NodeType } from '../../../src/node'

const {
  EDGE_TYPE_LABEL,
  generateEdgeType
} = fixtures

test.beforeEach(t => {
  t.context.edgeType = generateEdgeType()
  t.context.edgeTypeLabel = EDGE_TYPE_LABEL
})

describe('EdgeType', subject => {
  subject.describe('constructor', it => {
    it('sets initialization properties', t => {
      const {edgeType, edgeTypeLabel: label} = t.context
      t.is(edgeType.label, label)
      t.true(edgeType.from instanceof NodeType)
      t.true(edgeType.to instanceof NodeType)
    })
  })
})


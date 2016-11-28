import { test, describe } from 'ava-spec'
import * as fixtures from '../../fixtures'

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
    })
  })
})


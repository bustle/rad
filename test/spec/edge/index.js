import { describe } from 'ava-spec'
import { EdgeType } from '../../../src/edge'

describe('EdgeType', () => {
  describe('constructor', it => {
    it('sets a name', test => {
      const name = 'TestEdge'
      const TestEdge = new EdgeType(name)
      test.is(name, TestEdge.name)
    })
  })
})

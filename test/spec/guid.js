import { describe } from 'ava-spec'
import Guid from '../../src/delegate/guid'

describe('Guid', () => {
  describe('#last', it => {
    it('resolves a string id', async test => {
      const last = await Guid.last()
      test.true(typeof last === 'string')
    })
  })

  describe('#next', it => {
    it('resolves a string id', async test => {
      const next = await Guid.next()
      test.true(typeof next === 'string')
    })
  })
})

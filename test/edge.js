import Promise from 'bluebird'
import { generateEdgeType } from './fixtures'
import Edge from '../src/edge'

describe('Edge', () => {
  let context
  beforeEach(() => {
    const type = generateEdgeType()
    const edge = new Edge({type})
    context = {type,edge}
  })

  describe('operations', () => {

    describe('.get', () => {
      it('returns a promise', () => {
        const {edge} = context
        expect(edge.get()).to.be.an.instanceof(Promise)
      })
    })

    describe('.range', () => {
      it('returns a promise', () => {
        const {edge} = context
        expect(edge.range()).to.be.an.instanceof(Promise)
      })
    })

    describe('.count', () => {
      it('returns a promise', () => {
        const {edge} = context
        expect(edge.count()).to.be.an.instanceof(Promise)
      })
    })

    describe('.set', () => {
      it('returns a promise', () => {
        const {edge} = context
        expect(edge.set()).to.be.an.instanceof(Promise)
      })
    })

    describe('.destroy', () => {
      it('returns a promise', () => {
        const {edge} = context
        expect(edge.destroy()).to.be.an.instanceof(Promise)
      })
    })

  })
})

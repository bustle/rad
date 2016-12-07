import Promise from 'bluebird'
import { generateEdgeType, generateNodeType } from './fixtures'
import Graph from '../src/graph'
import { defineEdge } from '../src/edge'
import { defineNode } from '../src/node'

describe('Edge', () => {
  let context
  beforeEach(async () => {
    const alphaNodeType = generateNodeType({name: 'Alpha'})
    const betaNodeType = generateNodeType({name: 'Beta'})
    const Alpha = defineNode(alphaNodeType)
    const Beta = defineNode(betaNodeType)
    const alpha = await Alpha.create({ name: 'Alpha' })
    const beta = await Beta.create({ name: 'Beta' })
    const type = generateEdgeType({ from: 'Alpha', to: 'Beta' })
    const AlphaBetaEdge = defineEdge(type)
    const edge = new AlphaBetaEdge(alpha, beta)
    context = {
      Alpha,
      Beta,
      type,
      AlphaBetaEdge,
      alpha,
      beta,
      edge
    }
  })

  describe('operations', () => {

    describe('#get', () => {
      it('returns a promise', () => {
        const {AlphaBetaEdge} = context
        expect(AlphaBetaEdge.get()).to.be.an.instanceof(Promise)
      })
    })

    describe('#range', () => {
      it('returns a promise', () => {
        const {AlphaBetaEdge} = context
        expect(AlphaBetaEdge.range()).to.be.an.instanceof(Promise)
      })
    })

    describe('#count', () => {
      it('returns a promise', () => {
        const {AlphaBetaEdge} = context
        expect(AlphaBetaEdge.count()).to.be.an.instanceof(Promise)
      })
    })

    describe('.connect', () => {
      it('returns a promise', () => {
        const {AlphaBetaEdge, alpha, beta} = context
        const edge = new AlphaBetaEdge(alpha, beta)
        expect(edge.connect()).to.be.an.instanceof(Promise)
      })
    })

    describe('.disconnect', () => {
      it('returns a promise', () => {
        const {AlphaBetaEdge, alpha, beta} = context
        const edge = new AlphaBetaEdge(alpha, beta)
        expect(edge.disconnect()).to.be.an.instanceof(Promise)
      })
    })

  })
})

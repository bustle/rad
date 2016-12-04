import Promise from 'bluebird'
import { generateEdgeType } from './fixtures'
import Graph from '../src/graph'
import Edge from '../src/edge'

describe('Edge', () => {
  let context
  beforeEach(async () => {
    const graph = new Graph('EdgeTest')
    graph.schema(define => {
      define.node('Alpha', node => {
        node.hasOne('Beta')
      })
      define.node('Beta', node => {
        node.hasOne('Alpha')
      })
    })
    const AlphaNode = graph.nodeTypes['Alpha'].Base
    const BetaNode = graph.nodeTypes['Beta'].Base
    const alpha = await AlphaNode.create({ name: 'Alpha' })
    const beta = await AlphaNode.create({ name: 'Beta' })
    const AlphaBetaEdge = graph.edgeTypes['AlphaBeta'].Base
    const BetaAlphaEdge = graph.edgeTypes['BetaAlpha'].Base
    context = {
      graph,
      AlphaNode,
      BetaNode,
      alpha,
      beta,
      AlphaBetaEdge,
      BetaAlphaEdge
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

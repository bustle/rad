import Graph from '../src/graph'
import Node from '../src/node'
import MemoryAdapter from '../src/adapter/memory'

describe('MemoryAdapter', () => {
  let context
  beforeEach(() => {
    const adapter = new MemoryAdapter()
    const graph = new Graph('MemoryAdapterGraph', { adapter })
    graph.schema(define => {
      define.node('Post')
      define.node('User')

      define.node('Alpha', node => {
        node.hasOne('Beta')
      })

      define.node('Beta', node => {
        node.hasOne('Alpha')
      })
    })
    const Post = graph.nodeTypes['Post'].Base
    const Alpha = graph.nodeTypes['Alpha'].Base
    const Beta = graph.nodeTypes['Beta'].Base
    context = {adapter, graph, Post, Alpha, Beta}
  })

  describe('Node operations', () => {

    describe('#get', () => {
      it('is found in the store', async () => {
        const {Post} = context
        const post = await Post.create({ title: '#get' })
        const got = await Post.get(post.id)
        expect(got).to.equal(post)
      })
    })

    describe('#create', () => {
      it('stores the node', async () => {
        const {Post} = context
        const post = await Post.create({ title: 'Title' })
        expect(post.id).to.be.a.number
      })
    })

    describe('#all', () => {
      it('only contains created nodes', async () => {
        const {Post, Alpha} = context
        const posts = [
          await Post.create({title: 'a'}),
          await Post.create({title: 'b'}),
          await Post.create({title: 'c'})
        ]
        const alphas = [
          await Alpha.create({title: 'a'}),
          await Alpha.create({title: 'b'}),
          await Alpha.create({title: 'c'})
        ]
        const got = await Post.all()
        posts.forEach(post => expect(got).to.include(post))
        got.forEach(post => expect(posts).to.include(post))
      })
    })

    describe('#count', () => {
      it('has correct count', async () => {
        const {Post,Alpha} = context
        const post = await Post.create({title: 'one'})
        await Post.create({title: 'two'})
        const alpha = await Alpha.create({title: 'two'})
        await Alpha.create({title: 'two'})
        expect(await Post.count()).to.equal(2)
        expect(await Alpha.count()).to.equal(2)
        await post.destroy()
        await alpha.destroy()
        expect(await Post.count()).to.equal(1)
        expect(await Alpha.count()).to.equal(1)
      })
    })

    describe('.save', () => {
      it('saves and can be found in the store', async () => {
        const {Post} = context
        const post = new Post({title: '.save'})
        expect(post.id).to.be.null
        await post.save()
        expect(post.id).not.to.be.null
        const got = await Post.get(post.id)
        expect(got).not.to.be.null
      })
    })

    describe('.update', () => {
      it('updates an already saved node', async () => {
        const {Post} = context
        const post = await Post.create({title: '.update'})
        post.attributes.title = 'Title'
        await post.update()
        const got = await Post.get(post.id)
        expect(got.attributes).to.equal(post.attributes)
      })
    })

    describe('.destroy', () => {
      it('removes the node from the store', async () => {
        const {Post} = context
        const post = await Post.create({title: '.destroy'})
        await post.destroy()
        const got = await Post.get(post.id)
        expect(got).to.be.null
      })
    })
  })

  describe('Edge operations', () => {
    beforeEach(async () => {
      const {graph, Alpha, Beta} = context
      const AlphaBeta = graph.edgeTypes['AlphaBeta'].Base
      const BetaAlpha = graph.edgeTypes['BetaAlpha'].Base
      const alpha = await Alpha.create({ test: 'edge connect alpha' })
      const beta = await Beta.create({ test: 'edge connect beta' })
      const edge = new AlphaBeta(alpha, beta)
      context.edge = edge
      context.AlphaBeta = AlphaBeta
    })

    describe('#get', () => {
      it('gets an edge', async () => {
        const {edge, AlphaBeta} = context
        await edge.connect()
        const got = AlphaBeta.get(edge.id)
        expect(got).not.to.be.null
      })
    })

    describe('.connect', () => {
      it('connects two nodes', async () => {
        const {edge, AlphaBeta} = context
        await edge.connect()
        expect(edge.id).not.to.be.null
        const got = await AlphaBeta.get(edge.id)
        expect(got).to.equal(edge)
      })
    })

    describe('.disconnect', () => {
      it('disconnects two nodes', async () => {
        const {edge, AlphaBeta} = context
        await edge.connect()
        await edge.disconnect()
        const got = await AlphaBeta.get(edge.id)
        expect(got).to.be.null
      })
    })
  })
})

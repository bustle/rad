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
    })
    const Post = graph.nodeTypes['Post'].Base
    const post = new Post()
    context = {adapter, graph, Post, post}
  })

  describe('Node operations', () => {

    describe('#get', () => {
      it('is found in the store', async () => {
        const {Post, post} = context
        await post.save()
        const got = await Post.get(post.id)
        expect(got).to.equal(post)
      })
    })

    describe('#create', () => {
      it('stores the node', async () => {
        const {Post} = context
        const post = await Post.create({ title: 'Title' })
        const got = await Post.get(post.id)
        expect(got).to.equal(post)
      })
    })

    describe('#all', () => {
      it('finds all the nodes', async () => {
        const {Post} = context
        const posts = [
          await Post.create({title: 'a'}),
          await Post.create({title: 'b'}),
          await Post.create({title: 'c'})
        ]
        const got = await Post.all()
        posts.forEach(post => expect(got).to.include(post))
      })
    })

    describe('#count', () => {
      it('returns a number', async () => {
        const {Post} = context
        await Post.create({title: 'a'})
        const count = await Post.count()
        expect(count).to.be.at.least(1)
      })
    })

    describe('.save', () => {
      it('saves and can be found in the store', async () => {
        const {Post, post} = context
        expect(post.id).to.be.null
        await post.save()
        expect(post.id).not.to.be.null
        const got = await Post.get(post.id)
        expect(got).not.to.be.null
      })
    })

    describe('.update', () => {
      it('updates an already saved node', async () => {
        const {Post, post} = context
        await post.save()
        post.attributes.title = 'Title'
        await post.update()
        const got = await Post.get(post.id)
        expect(got.attributes).to.equal(post.attributes)
      })
    })
  })

  describe('.destroy', () => {
    it('removes the node from the store', async () => {
      const {Post} = context
      const post = await Post.create({title: 'Destroy!'})
      await post.destroy()
      const got = await Post.get(post.id)
      expect(got).to.be.undefined
    })
  })
})

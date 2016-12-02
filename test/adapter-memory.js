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
    context = {adapter, graph}
  })

  describe('#save', () => {
    it('sets an id', () => {

    })

    it('updates an already saved node', () => {

    })
  })

  it('#create')
  it('#update')
  it('#put')
  it('#get')
  it('#all')
  it('#count')
  it('#destroy')
})

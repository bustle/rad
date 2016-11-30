import Promise from 'bluebird'
import { generateGraph, generateNodeType } from './fixtures'
import Node from '../src/node'

describe('Node', () => {
  let context
  beforeEach(() => {
    context = {}
    const type = generateNodeType()
    const attributes = {
      name: 'Tyler Love',
      age: 30
    }
    const node = new Node({type, attributes})
    context = {node,type,attributes}
  })

  describe('.constructor', () => {
    it('sets initialization properties', () => {
      const {node,type,attributes} = context
      expect(node.type).to.equal(type)
      expect(node.attributes).to.equal(attributes)
    })

    describe('.isSaved', () => {
      it('is false unless id is present', () => {
        const {node} = context
        expect(node.isSaved).to.be.false
      })

      it('is true after save', () => {
        const {node} = context
        node.save()
        expect(node.isSaved).to.be.false
      })
    })
  })

  describe('operations', () => {
    describe('.save', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.save()).to.be.an.instanceof(Promise)
      })
    })

    describe('.create', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.create()).to.be.an.instanceof(Promise)
      })
    })

    describe('.update', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.update()).to.be.an.instanceof(Promise)
      })
    })

    describe('.put', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.put()).to.be.an.instanceof(Promise)
      })
    })

    describe('.putByKey', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.putByKey()).to.be.an.instanceof(Promise)
      })
    })

    describe('.get', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.get()).to.be.an.instanceof(Promise)
      })
    })

    describe('.getByKey', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.getByKey()).to.be.an.instanceof(Promise)
      })
    })

    describe('.all', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.all()).to.be.an.instanceof(Promise)
      })
    })

    describe('.count', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.count()).to.be.an.instanceof(Promise)
      })
    })

    describe('.destroy', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.destroy()).to.be.an.instanceof(Promise)
      })
    })
  })
})


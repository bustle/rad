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
    const node = new Node(type, attributes)
    context = {node, type, attributes}
  })

  describe('.constructor', () => {
    it('sets initialization properties', () => {
      const {node, type, attributes} = context
      expect(node.type).to.equal(type)
      expect(node.attributes).to.equal(attributes)
    })

    describe('.isSaved', () => {
      it('is false before a save', () => {
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

  describe('static operations', () => {
    describe('#get', () => {
      it('returns a promise', () => {
        expect(Node.get()).to.be.an.instanceof(Promise)
      })
    })

    describe('#create', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(Node.create()).to.be.an.instanceof(Promise)
      })
    })

    describe('#all', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(Node.all()).to.be.an.instanceof(Promise)
      })
    })

    describe('#count', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(Node.count()).to.be.an.instanceof(Promise)
      })
    })
  })

  describe('instance operations', () => {

    describe('.save', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.save()).to.be.an.instanceof(Promise)
      })
    })

    describe('.update', () => {
      it('returns a promise', () => {
        const {node} = context
        expect(node.update()).to.be.an.instanceof(Promise)
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


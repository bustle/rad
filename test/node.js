import Promise from 'bluebird'
import { generateGraph, generateNodeType } from './fixtures'
import { defineNode } from '../src/node'

describe('Node', () => {
  let context
  beforeEach(() => {
    context = {}
    const type = generateNodeType({name: 'PersonTestType'})
    const attributes = {
      name: 'Tyler Love',
      age: 30
    }
    const Person = defineNode(type)
    const node = new Person(attributes)
    context = {Person, node, type, attributes}
  })

  describe('.constructor', () => {
    it('sets initialization properties', () => {
      const {node, type, attributes} = context
      expect(node.type).to.equal(type)
      expect(node.attributes).to.equal(attributes)
    })
  })

  describe('static operations', () => {
    describe('#get', () => {
      it('returns a promise', async () => {
        const {Person, node} = context
        await node.save()
        expect(Person.get(node.id)).to.be.an.instanceof(Promise)
      })
    })

    describe('#create', () => {
      it('returns a promise', () => {
        const {Person, attributes} = context
        expect(Person.create(attributes)).to.be.an.instanceof(Promise)
      })
    })

    describe('#all', () => {
      it('returns a promise', () => {
        const {Person, node} = context
        expect(Person.all()).to.be.an.instanceof(Promise)
      })
    })

    describe('#count', () => {
      it('returns a promise', () => {
        const {Person, node} = context
        expect(Person.count(node.type)).to.be.an.instanceof(Promise)
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


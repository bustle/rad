import Promise from 'bluebird'
import { generateGraph, generateNodeType } from './fixtures'
import Node from '../src/node'

describe('Node', () => {
  describe('.constructor', () => {
    let context
    beforeEach(() => {
      const type = generateNodeType()
      const attributes = {
        name: 'Tyler Love',
        age: 30
      }
      const node = new Node({type, attributes})
      context = {node,type,attributes}
    })

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

    describe('.save', () => {
      it('returns an async function. aka promise', () => {
        const {node} = context
        expect(node.save()).to.be.an.instanceof(Promise)
      })
    })

    it('.create')
    it('.update')
    it('.put')
    it('.putByKey')
    it('.get')
    it('.getByKey')
    it('.all')
    it('.count')
    it('.destroy')
  })
})


# RadGraph
*WIP* project to prototype working with a graph database at scale. The goal is to provide developers with the best possible interface for working against data in a graph. This means clearly defined NodeTypes, EdgeTypes, and packagable schemas.

#### Example Schema
```
import graph from 'rad'

const graph = new Graph('Bustle')

graph.schema(define => {
  define.node('User', node => {
    node.hasMany('Post')
    node.hasMany('User', { as: 'Friend' })
  })
  define.node('Post', node => {
    node.hasOne('User')
  })
})

const User = graph.nodeTypes['User']
const tyler = await user.create({ name: 'Tyler' })
const steve = await user.create({ name: 'Steve' })
const zahra = await user.create({ name: 'Zahra' })
tyler.friends // => []
tyler.friends.push(steve, zahra) 
tyler.friends // => [User, User]

```

# Testing and Debugging
* `npm t`
* `npm t -- --watch`
* `npm t -- debug` _to use `node-inspector` so you can set `debugger` breakpoints that halt in a repl. Use the key `c` to continue since `node-inspecor` always breaks on the first executed line. Type `repl` to start a `repl` session and have access to the currently executing scope of the breakpoint._

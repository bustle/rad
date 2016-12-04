# RadGraph
*WIP* project to prototype working with a graph database at scale. The goal is to provide developers with the best possible interface for working against data in a graph. This means clearly defined NodeTypes, EdgeTypes, and packagable schemas.

#### Example Schema
```
import graph from 'rad'

const graph = new Graph('Bustle')

graph.schema(define => {
  define.node('User', node => {
    node.hasOne('Post')
  })
  define.node('Post', node => {
    node.hasOne('User')
  })
})

const UserType = graph.nodeTypes['User']
const PostType = graph.nodeTypes['User']

const User = User.Base
const Post = Post.Base

const tyler = await User.create({ name: 'Tyler' })
const post = await Post.create({ title: 'My Post' })

tyler.post = post

```

# Testing and Debugging
* `npm t`
* `npm t -- --watch`
* `npm t -- debug` _to use `node-inspector` so you can set `debugger` breakpoints that halt in a repl. Use the key `c` to continue since `node-inspecor` always breaks on the first executed line. Type `repl` to start a `repl` session and have access to the currently executing scope of the breakpoint._

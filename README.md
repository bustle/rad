# Testing and Debugging
* `npm t`
* `npm t -- --watch`
* `npm t -- debug` uses `node-inspector` so you can set `debugger` breakpoints that halt in a repl. Use the key `c` to continue since `node-inspector` always breaks on the first executed line. Type `repl` to start a `repl` session and have access to the currently executing scope of the breakpoint.

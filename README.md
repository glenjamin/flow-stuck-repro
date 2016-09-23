# Flow Stuck Repro

```sh
npm install
npm test
```

The result I get on OS X 10.11.3

```
> npm test

> flow-stuck-repro@1.0.0 test /Users/glen/Development/GitHub/flow-stuck-repro
> flow check

Worker interrupted with signal: sigill
Failure("Subprocess(87694): fail 2")
operations.js:25
 25:     target.items
                ^^^^^ property `items`. Property not found in
 25:     target.items
         ^^^^^^ object type


Found 1 error
npm ERR! Test failed.  See above for more details.
```

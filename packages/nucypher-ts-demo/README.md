# nucypher-ts-demo

Based on [`useDapp` example](https://github.com/EthWorks/useDapp/tree/master/packages/example). See `README.old.md` for details.

## Installation

Make sure `umbral-pre` is built:
```bash
cd ../nucypher-ts && yarn build
```

Install deps and run:
```bash
cd ../nucypher-ts-demo 
./link-local.sh # workaround for webpack not resolving symbolic links
yarn
yarn start
```

## Notes

Fixing `yarn` not recognizing local dependencies:

First, we use a copy of `nucypher-ts` so that ill-resolved dependencies that point to location of original `nucypher-ts` can be resolved locally.

Then, after `yarn install` we fix a broken link to `nucypher-ts`:
```$bash
./link-local.sh
```

Sometimes `esbuild` fails. Run:

```bash
node _modules/esbuild/install.js
```
# Angular and TypeScript Workshop Labs

Please note that this is an "admin" project that isn't intended to be run directly.

Plunker builder adapted from the Google Angular Team's angular.io tools (adaptations by John Papa).

## To Make Version Updates

* Update package.json versions in labs folders
* Update the following versions in the index.html files in the labs folders:

```
<script src="//unpkg.com/zone.js@0.6.26?main=browser"></script>
<script src="//unpkg.com/systemjs@0.19.40/dist/system.src.js"></script>
```

* Update systemjs.config.js files:

```
'ts':                         'npm:plugin-typescript@7.0.6/lib/plugin.js',
'typescript':                 'npm:typescript@2.2.1/lib/typescript.js',
```
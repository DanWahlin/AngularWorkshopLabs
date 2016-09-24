# Ultimate Angular 2 Workshop Labs

Please note that this is an "admin" project that isn't intended to be run directly.

Plunker builder adapted from the Google Angular Team's angular.io tools (adaptations by John Papa).

## To Make Version Updates

* Update package.json versions in labs folders
* Update the following versions in the index.html files in the labs folders:

<script src="//unpkg.com/zone.js@0.6.25?main=browser"></script>
<script src="//unpkg.com/reflect-metadata@0.1.8"></script>
<script src="//unpkg.com/systemjs@0.19.38/dist/system.src.js"></script>

* Update systemjs.config.js files:

'ts':                         'npm:plugin-typescript@5.1.2/lib/plugin.js',
'typescript':                 'npm:typescript@2.0.3/lib/typescript.js',
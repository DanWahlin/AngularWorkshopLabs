var PlunkerBuilder = require('./builder');

function buildPlunkers(basePath, destPath, options) {
  configureBuilder(options);
  var builder = new PlunkerBuilder(basePath, destPath, options);
  builder.buildPlunkers();
}

function configureBuilder(options) {
  options.addField = addField;
  options.plunkerFileName = 'eplnkr';
  //Dan Wahlin edited (added show=readme.md to options.url)
  options.url = 'https://embed.plnkr.co?show=preview&show=readme.md';
  options.writeNoLink = false;
  //Dan Wahlin edited (changed embedded to false)
  options.embedded = false;
  options.extraData = extraData;
}

function extraData(postData, config) {
  postData['source[type]'] = config.description || 'Angular example';
  postData['source[url]'] = 'https://angular.io'
}

function addField(postData, name, content) {
  var encoding = 'utf8';
  if (name.split('.').pop === 'png') {
    encoding = 'base64';
  }
  postData[`entries[${name}][content]`] = content;
  postData[`entries[${name}][encoding]`] = encoding;
}

module.exports = {
  buildPlunkers: buildPlunkers
};

var logGenerator = require('./generate.js');

logGenerator.logger.level("debug");
console.log(logGenerator.logger.levels());

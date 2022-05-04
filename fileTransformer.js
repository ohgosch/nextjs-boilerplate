const path = require('path');

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `export default ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};

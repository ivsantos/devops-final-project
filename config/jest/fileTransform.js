"use strict";

import path from "path";

export default {
  process(_, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));

    return `module.exports = ${assetFilename};`;
  },
};
const { generateDNAs } = require("./src/dna-generator.js");
const { generateImages } = require("./src/image-generator.js");
const { generateEditionsMetaFiles } = require("./src/meta-generator.js");

(() => {
  //> Step One
  generateDNAs();
  //> Step Two
  // generateImages();
  //> Step Three
  //Safe Images on ipfs
  //Replace base uri in config.js with the uri given by ipfs
  //> Step Four
  // generateEditionsMetaFiles();
})();

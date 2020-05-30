module.exports = function(eleventyConfig) {

  // Allow data cascading instead of replacing. Mainly for tags.
  eleventyConfig.setDataDeepMerge(true);
};
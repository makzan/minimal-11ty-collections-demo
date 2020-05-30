module.exports = function(eleventyConfig) {

  // Folders and files to copy into output.
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addFilter("toISOString", function(date) {
    return date.toISOString().split('T')[0];
  });

  eleventyConfig.addCollection("lastThreeTasks", function(collection) {
    return collection.getFilteredByTag('task').slice().reverse().slice(0, 3)
  });

};
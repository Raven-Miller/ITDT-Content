module.exports = function (eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addWatchTarget("styles");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("Images");

  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md", "liquid"],
    pathPrefix: "/ITDT-Content/",
    dir: {
      input: ".",
      output: "_site",
    },
  };
};

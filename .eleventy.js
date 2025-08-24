export const markdownTemplateEngine = "njk";

export default function (eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addWatchTarget("styles");
  eleventyConfig.addPassthroughCopy("styles");

  return {
    templateFormats: ["html", "njk", "md", "liquid"],
    // pathPrefix: "/InThisDullTown/",
    dir: {
      input: ".",
      output: "_site",
    },
  };
}

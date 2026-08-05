const { EleventyRenderPlugin, HtmlBasePlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function (eleventyConfig) {

  // ── Plugins ──────────────────────────────────────────────────
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // ── Passthrough copies ───────────────────────────────────────
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("uploads");
  eleventyConfig.addPassthroughCopy("media");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "content/favicon.ico": "favicon.ico" });

  // ── Watch targets ────────────────────────────────────────────
  eleventyConfig.addWatchTarget("assets/");

  // ── Collections ──────────────────────────────────────────────
  eleventyConfig.addCollection("stories", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("content/stories/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("events", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("content/events/*.md")
      .sort((a, b) => new Date(a.data.eventDate) - new Date(b.data.eventDate));
  });

  eleventyConfig.addCollection("programs", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("content/programs/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  });

  // ── Filters ───────────────────────────────────────────────────
  eleventyConfig.addFilter("formatDate", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    if (!dateObj) return "";
    return new Date(dateObj).toISOString();
  });

  eleventyConfig.addFilter("upcomingEvents", (events) => {
    const now = new Date();
    return events.filter((e) => new Date(e.data.eventDate) >= now);
  });

  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  eleventyConfig.addFilter("keys", (obj) => Object.keys(obj || {}));

  // ── Shortcodes ────────────────────────────────────────────────
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  eleventyConfig.addNunjucksAsyncShortcode("image", async function (src, alt, widths, sizes, cls) {
    const fullSrc = src.startsWith("/") ? "." + src : src;
    let metadata;
    try {
      metadata = await Image(fullSrc, {
        widths: widths || [400, 800, 1200],
        formats: ["avif", "webp", "jpeg"],
        outputDir: "./_site/img/",
        urlPath: "/img/",
      });
    } catch {
      return `<img src="${src}" alt="${alt || ""}" class="${cls || ""}" loading="lazy">`;
    }
    const imageAttributes = {
      alt: alt || "",
      sizes: sizes || "100vw",
      loading: "lazy",
      decoding: "async",
      class: cls || "",
    };
    return Image.generateHTML(metadata, imageAttributes);
  });

  // ── Config ────────────────────────────────────────────────────
  return {
    pathPrefix: "/dtobingfoundation/",
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};

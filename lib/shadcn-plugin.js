// Simple implementation of the shadcn plugin
function shadcnPlugin() {
  return {
    name: "shadcn-plugin",
    // This is a minimal implementation to prevent build errors
    handler: () => ({
      postcssPlugin: "shadcn-plugin",
      Once() {
        // No-op
      },
    }),
  }
}

module.exports = { shadcnPlugin }

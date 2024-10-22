// build/vite.es.config.ts
import { defineConfig } from "file:///Users/wangtianyang/Documents/Projects/Components/vue/swd-design/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.9_sass@1.77.6_terser@5.31.1/node_modules/vite/dist/node/index.js";
import { readdirSync, readdir } from "fs";
import { resolve } from "path";
import { defer, delay, filter, map, includes } from "file:///Users/wangtianyang/Documents/Projects/Components/vue/swd-design/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import { visualizer } from "file:///Users/wangtianyang/Documents/Projects/Components/vue/swd-design/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.18.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { hooksPlugin as hooks } from "file:///Users/wangtianyang/Documents/Projects/Components/vue/swd-design/libs/vite-plugins/.dist/index.js";
import shell from "file:///Users/wangtianyang/Documents/Projects/Components/vue/swd-design/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js";
import vue from "file:///Users/wangtianyang/Documents/Projects/Components/vue/swd-design/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.9_sass@1.77.6_terser@5.31.1__vue@3.4.30_typescript@5.5.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///Users/wangtianyang/Documents/Projects/Components/vue/swd-design/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.9_rollup@4.18.0_typescript@5.5.2_vite@5.3.1_@types+no_jizaieenka354ofteejqciv6yu/node_modules/vite-plugin-dts/dist/index.mjs";
import terser from "file:///Users/wangtianyang/Documents/Projects/Components/vue/swd-design/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.18.0/node_modules/@rollup/plugin-terser/dist/es/index.js";
var __vite_injected_original_dirname = "/Users/wangtianyang/Documents/Projects/Components/vue/swd-design/packages/core/build";
var TRY_MOVE_STYLES_DELAY = 750;
var isProd = process.env.NODE_ENV === "production";
var isDev = process.env.NODE_ENV === "development";
var isTest = process.env.NODE_ENV === "test";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
function moveStyles() {
  readdir("./dist/es/theme", (err) => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
    defer(() => shell.mv("./dist/es/theme", "./dist"));
  });
}
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: "dist/stats.es.html"
    }),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    }),
    terser({
      compress: {
        sequences: isProd,
        arguments: isProd,
        drop_console: isProd && ["log"],
        drop_debugger: isProd,
        passes: isProd ? 4 : 1,
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          "@PROD": JSON.stringify(isProd),
          "@TEST": JSON.stringify(isTest)
        }
      },
      format: {
        semicolons: false,
        shorthand: isProd,
        braces: !isProd,
        beautify: !isProd,
        comments: !isProd
      },
      mangle: {
        toplevel: isProd,
        eval: isProd,
        keep_classnames: isDev,
        keep_fnames: isDev
      }
    }),
    hooks({
      rmFiles: [
        "./dist/es",
        "./dist/theme",
        "./dist/types",
        "./dist/stats.es.html"
      ],
      afterBuild: moveStyles
    })
  ],
  build: {
    outDir: "dist/es",
    minify: false,
    cssCodeSplit: true,
    sourcemap: !isProd,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "../index.ts"),
      name: "SwdUI",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          if (chunkInfo.type === "asset" && /\.(css)$/i.test(chunkInfo.name)) {
            return "theme/[name].[ext]";
          }
          return chunkInfo.name;
        },
        manualChunks(id) {
          if (includes(id, "node_modules")) return "vendor";
          if (includes(id, "/packages/hooks")) return "hooks";
          if (includes(id, "/packages/utils") || includes(id, "plugin-vue:export-helper"))
            return "utils";
          for (const item of getDirectoriesSync("../components")) {
            if (includes(id, `/packages/components/${item}`)) return item;
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQvdml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd2FuZ3RpYW55YW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9Db21wb25lbnRzL3Z1ZS9zd2QtdWkvcGFja2FnZXMvY29yZS9idWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3dhbmd0aWFueWFuZy9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9uZW50cy92dWUvc3dkLXVpL3BhY2thZ2VzL2NvcmUvYnVpbGQvdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3dhbmd0aWFueWFuZy9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9uZW50cy92dWUvc3dkLXVpL3BhY2thZ2VzL2NvcmUvYnVpbGQvdml0ZS5lcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHJlYWRkaXIgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmZXIsIGRlbGF5LCBmaWx0ZXIsIG1hcCwgaW5jbHVkZXMgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuaW1wb3J0IHsgaG9va3NQbHVnaW4gYXMgaG9va3MgfSBmcm9tIFwiQHN3ZC11aS92aXRlLXBsdWdpbnNcIjtcbmltcG9ydCBzaGVsbCBmcm9tIFwic2hlbGxqc1wiO1xuXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHRlcnNlciBmcm9tIFwiQHJvbGx1cC9wbHVnaW4tdGVyc2VyXCI7XG5cbmNvbnN0IFRSWV9NT1ZFX1NUWUxFU19ERUxBWSA9IDc1MCBhcyBjb25zdDtcblxuY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiO1xuY29uc3QgaXNUZXN0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiO1xuXG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllc1N5bmMoYmFzZVBhdGg6IHN0cmluZykge1xuICBjb25zdCBlbnRyaWVzID0gcmVhZGRpclN5bmMoYmFzZVBhdGgsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KTtcblxuICByZXR1cm4gbWFwKFxuICAgIGZpbHRlcihlbnRyaWVzLCAoZW50cnkpID0+IGVudHJ5LmlzRGlyZWN0b3J5KCkpLFxuICAgIChlbnRyeSkgPT4gZW50cnkubmFtZVxuICApO1xufVxuXG5mdW5jdGlvbiBtb3ZlU3R5bGVzKCkge1xuICByZWFkZGlyKFwiLi9kaXN0L2VzL3RoZW1lXCIsIChlcnIpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gZGVsYXkobW92ZVN0eWxlcywgVFJZX01PVkVfU1RZTEVTX0RFTEFZKTtcbiAgICBkZWZlcigoKSA9PiBzaGVsbC5tdihcIi4vZGlzdC9lcy90aGVtZVwiLCBcIi4vZGlzdFwiKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdmlzdWFsaXplcih7XG4gICAgICBmaWxlbmFtZTogXCJkaXN0L3N0YXRzLmVzLmh0bWxcIixcbiAgICB9KSxcbiAgICBkdHMoe1xuICAgICAgdHNjb25maWdQYXRoOiBcIi4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcbiAgICAgIG91dERpcjogXCJkaXN0L3R5cGVzXCIsXG4gICAgfSksXG4gICAgdGVyc2VyKHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIHNlcXVlbmNlczogaXNQcm9kLFxuICAgICAgICBhcmd1bWVudHM6IGlzUHJvZCxcbiAgICAgICAgZHJvcF9jb25zb2xlOiBpc1Byb2QgJiYgW1wibG9nXCJdLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiBpc1Byb2QsXG4gICAgICAgIHBhc3NlczogaXNQcm9kID8gNCA6IDEsXG4gICAgICAgIGdsb2JhbF9kZWZzOiB7XG4gICAgICAgICAgXCJAREVWXCI6IEpTT04uc3RyaW5naWZ5KGlzRGV2KSxcbiAgICAgICAgICBcIkBQUk9EXCI6IEpTT04uc3RyaW5naWZ5KGlzUHJvZCksXG4gICAgICAgICAgXCJAVEVTVFwiOiBKU09OLnN0cmluZ2lmeShpc1Rlc3QpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZvcm1hdDoge1xuICAgICAgICBzZW1pY29sb25zOiBmYWxzZSxcbiAgICAgICAgc2hvcnRoYW5kOiBpc1Byb2QsXG4gICAgICAgIGJyYWNlczogIWlzUHJvZCxcbiAgICAgICAgYmVhdXRpZnk6ICFpc1Byb2QsXG4gICAgICAgIGNvbW1lbnRzOiAhaXNQcm9kLFxuICAgICAgfSxcbiAgICAgIG1hbmdsZToge1xuICAgICAgICB0b3BsZXZlbDogaXNQcm9kLFxuICAgICAgICBldmFsOiBpc1Byb2QsXG4gICAgICAgIGtlZXBfY2xhc3NuYW1lczogaXNEZXYsXG4gICAgICAgIGtlZXBfZm5hbWVzOiBpc0RldixcbiAgICAgIH0sXG4gICAgfSksXG4gICAgaG9va3Moe1xuICAgICAgcm1GaWxlczogW1xuICAgICAgICBcIi4vZGlzdC9lc1wiLFxuICAgICAgICBcIi4vZGlzdC90aGVtZVwiLFxuICAgICAgICBcIi4vZGlzdC90eXBlc1wiLFxuICAgICAgICBcIi4vZGlzdC9zdGF0cy5lcy5odG1sXCIsXG4gICAgICBdLFxuICAgICAgYWZ0ZXJCdWlsZDogbW92ZVN0eWxlcyxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiZGlzdC9lc1wiLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIHNvdXJjZW1hcDogIWlzUHJvZCxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwiU3dkVUlcIixcbiAgICAgIGZpbGVOYW1lOiBcImluZGV4XCIsXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgIFwidnVlXCIsXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIsXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIsXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZVwiLFxuICAgICAgICBcIkBwb3BwZXJqcy9jb3JlXCIsXG4gICAgICAgIFwiYXN5bmMtdmFsaWRhdG9yXCIsXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoY2h1bmtJbmZvKSA9PiB7XG4gICAgICAgICAgaWYgKGNodW5rSW5mby5uYW1lID09PSBcInN0eWxlLmNzc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJpbmRleC5jc3NcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2h1bmtJbmZvLnR5cGUgPT09IFwiYXNzZXRcIiAmJlxuICAgICAgICAgICAgL1xcLihjc3MpJC9pLnRlc3QoY2h1bmtJbmZvLm5hbWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIFwidGhlbWUvW25hbWVdLltleHRdXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaHVua0luZm8ubmFtZSBhcyBzdHJpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIGlmIChpbmNsdWRlcyhpZCwgXCJub2RlX21vZHVsZXNcIikpIHJldHVybiBcInZlbmRvclwiO1xuXG4gICAgICAgICAgaWYgKGluY2x1ZGVzKGlkLCBcIi9wYWNrYWdlcy9ob29rc1wiKSkgcmV0dXJuIFwiaG9va3NcIjtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGluY2x1ZGVzKGlkLCBcIi9wYWNrYWdlcy91dGlsc1wiKSB8fFxuICAgICAgICAgICAgaW5jbHVkZXMoaWQsIFwicGx1Z2luLXZ1ZTpleHBvcnQtaGVscGVyXCIpXG4gICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIFwidXRpbHNcIjtcblxuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBnZXREaXJlY3Rvcmllc1N5bmMoXCIuLi9jb21wb25lbnRzXCIpKSB7XG4gICAgICAgICAgICBpZiAoaW5jbHVkZXMoaWQsIGAvcGFja2FnZXMvY29tcG9uZW50cy8ke2l0ZW19YCkpIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3YSxTQUFTLG9CQUFvQjtBQUNyYyxTQUFTLGFBQWEsZUFBZTtBQUNyQyxTQUFTLGVBQWU7QUFDeEIsU0FBUyxPQUFPLE9BQU8sUUFBUSxLQUFLLGdCQUFnQjtBQUNwRCxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLGVBQWUsYUFBYTtBQUNyQyxPQUFPLFdBQVc7QUFFbEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFWbkIsSUFBTSxtQ0FBbUM7QUFZekMsSUFBTSx3QkFBd0I7QUFFOUIsSUFBTSxTQUFTLFFBQVEsSUFBSSxhQUFhO0FBQ3hD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

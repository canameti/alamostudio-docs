import { extendViteConfig, defineNuxtModule } from '@nuxt/kit'
import type { Plugin } from 'vite'

function fixWindowsImportPaths(): Plugin {
  return {
    name: 'docus:fix-windows-import-paths',
    enforce: 'post',
    transform(code) {
      if (!code.includes('\\'))
        return

      const fixed = code.replace(
        /from\s+(['"])([^'"]+)\1/g,
        (match, quote, importPath) => {
          // Only normalize filesystem paths. Leave Vue/Vite virtual modules
          // like "\0plugin-vue:export-helper" untouched.
          if (!importPath.includes('\\'))
            return match
          if (importPath.startsWith('\\0') || importPath.startsWith('\0'))
            return match
          if (!/[A-Za-z]:\\/.test(importPath) && !importPath.includes('node_modules'))
            return match
          return `from ${quote}${importPath.replace(/\\/g, '/')}${quote}`
        },
      )

      if (fixed !== code)
        return { code: fixed, map: null }
    },
  }
}

export default defineNuxtModule({
  meta: {
    name: 'docus:fix-windows-import-paths',
  },
  setup() {
    if (process.platform !== 'win32')
      return

    extendViteConfig((config) => {
      config.plugins ??= []
      config.plugins.push(fixWindowsImportPaths())
    })
  },
})

import antfu from '@antfu/eslint-config'

export default antfu({
    // pnpm: true,
    stylistic: {
        indent: 4,
    },
    typescript: {
        tsconfigPath: 'tsconfig.json',
    },
    ignores: [],
})

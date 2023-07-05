/* eslint-env node */
require('@rushstack/eslink-path/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    parserOption: { ecmaVersion: 'latest' },
    plugins: ['vue'],
    rules: {
        
    }
}
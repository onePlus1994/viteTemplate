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
        camelcase: ['warn', { properties: 'always' }],
        'no-new-func': 'warn',
        'no-return-assign': 'warn',
        'no-useless-concat': 'warn',
        'prefer-template': 'warn',
        'no-eq-null': 'warn',
        'max-depth': ['warn', 4],
        complexity: ['warn', { max: 20 }],
        'vue/html-self-closing': 0,
        // 不能有声明后未被使用的变量或参数
        'no-unused-vars': [
            1,
            {
                vars: 'all',
                args: 'after-used'
            }
        ],
        // 未定义前不能使用
        'no-use-before-define': 1,
        //禁止不必要的call和apply
        'no-useless-call': 2,
        // 如果if语句里面有return,后面不能跟else语句
        'no-else-return': 'warn',
        'array-callback-return': 'error',
        quotes: [1, 'single'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-var': 'warn',
        'no-alert': 'error',
        'no-self-compare': 'warn',
        'no-empty': 'warn',
        'no-sequences': 'error',
        'no-useless-comuted-key': 'error',
        'no-constant-condition': 'error',
        'no-useless-return': 'warn',
        'no-loss-of-precision': 'off',
        indent: [1, 2, { SwitchCase: 1 }],
        'no-useless-escape': ['off'],
        'no-implicit-coercion': 'error',
        'max-len': ['warn', { code: 200 }],
        'space-brfore-function-paren': [0, 'always'],
        'vue/max-attributes-pre-line': [
            0,
            'warn',
            {
                singleline: 6,
                multiline: {
                    max: 3,
                    allowFirstLine: true
                }
            }
        ],
        'vue/attribute-hyphenation': [0, 'never', { ignore: [] }],
        'vue/no-unused-components': ['error', { ignoreWhenBindingPresent: true }],
        'vue/html-closing-bracket-newline': [
            'off',
            {
                singleline: 'never',
                multiline: 'always'
            }
        ],
        'vue/multi-word-component-names': 'off',
        'max-lines-per-function': ['warn', { max: 50 }],
        'spaced-comment': ['error', 'always'],
        'vue/no-v-model-argument': 'off',

        /**
         * 基本使用方式
         * 'off'   或者0 关闭规则
         * 'warn'  或者1 将规则打开,出现告警提示
         * 'error' 或者2 将规则打开,出现错误提示
         */

        // 原则4 团队使用一致的排版风格
        // 要求操作符周围有空格
        'space-infix-ops': 'error',

        // 强制使用一致的换行风格
        'linebreak-style': ['error', 'unix'],

        // 禁用行尾空格
        'no-trailing-spaces': 'warn',

        // 安全规范 规则2.1 禁用 与类似eval方式
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-script-url': 'error',

        // 安全规范 规则3.7 禁止修改内置对象模型
        'no-extend-native': 'error',

        // 安全规范 规则3.9 禁用__proto__
        'no-proto': 'error',

        //规则1 要求构造函数首字母大写
        'new-cap': 'error',

        //规则3 强制标识符的最大长度  (规范指定的15在此不适用)
        'id-length': [
            'error',
            {
                max: 35,
                min: 1
            }
        ],

        //规则5 不要用保留字作用键名或者变量名,请用保留字的同义词
        'no-shadow-restricted-names': 'error',

        //规则6 禁用魔术数学
        'no-magic-numbers': [
            'off',
            {
                ignoreArrayIndexes: true,
                ignore: [-1, 0, 1, 2]
            }
        ],

        //规则9 强制多行注释风格
        'multiline-comment-style': ['error', 'separate-lines'],

        //规则10 强制注释的位置,放在所注释代码上方,并与代码采用同样的缩进
        'line-comment-position': ['error', { position: 'above' }],

        //规则11 强制注释周围有空行 // 和注释内容直接要有一个空格
        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: true,
                beforeLineComment: false,
                allowBlockStart: true
            }
        ],

        //规则12 正式交付给客户的代码不应包含 terms数组内的注释
        'no-warning-comments': [
            'error',
            {
                terms: ['TODO', 'FIXME', 'DTS'],
                location: 'anywhere'
            }
        ],

        //规则17 把 else 放在 if 代码块关闭括号的同一行
        'brace-style': 'error',

        // 规则18 强制关键字周围空格的一致性
        'keyword-spacing': ['error', { before: true }],

        // 规则19 禁止出现多个连续空格
        'no-multi-spaces': 'error',

        //规则20 if,for,do,while 等语句的执行体遵循大括号约定
        curly: 'error',

        //规则24 每行声明一个变量
        'one-var': ['error', 'never'],

        //规则25 禁止连续赋值
        'no-multi-assign': 'error',

        //规则26 禁止将变量初始化为undefined
        'no-undef-init': 'error',

        //规则27 使用基本类型的字面量而不是其封装类型
        'no-new-object': 'error',

        //规则28 不要把方法的入参当作工作变量/临时变量
        'no-param-reassign': ['error'],

        //规则29 要求使用剩余参数而不是 arguments
        'prefer-rest-params': 'error',

        //规则30 用到匿名函数时优先使用箭头函数(或 Functipn#bind),别保存this的引用
        'prefer-arrow-callback': 'error',

        //规则31 按规则要求箭头函数的参数使用圆括号(规避错误)
        'arrow-parens': ['error', 'always'],

        //要求箭头函数体使用大括号
        'arrow-body-style': ['error', 'as-needed'],

        //规则32 要求使用一致的 return 语句
        'consistent-return': 'error',

        //规则35 禁止在构造函数中,在调用 super() 之前使用 this 或 super
        'no-this-before-super': 'error',

        //规则40 优先使用数组和对象解构
        'prefer-destructuring': [
            'off',
            {
                array: true,
                object: true
            }
        ],

        //规则41 使用点号来访问对象的属性,只有属性是动态的时候使用 []
        'dot-notation': 'error',

        //规则42 getter和setter应该成对出现在对象中
        'accessor-pairs': 'error',

        //规则43 禁止直接调用 Object.prototypes 的内置属性
        'no-prototype-builtins': 'error',

        //规则44 需要约束 for-in.使用for-in循环必须结合实际具体应用场景正确使用hasOwnProperty方法
        'guard-for-in': 2,

        //规则46 禁止使用嵌套的三元表达式
        'no-nested-ternary': 'error',

        //规则47 要求 switch 语句中有 default 分支,即使他不包含任何代码
        'default-case': 'error',

        //规则48 在switch语句的每一个case中都放置一条break语句
        'no-fallthrough': 'error',

        //规则49 case 语句中需要声明词法时,花括号{}不能省略
        'no-case-declarations': 2,

        //规则52 禁止重复模块导入
        'no-duplicate-imports': 'error',

        //规则57 禁止数学字面量中使用前导和末尾小数点
        'no-floating-decimal': 'error',

        //规则58 要求调用 isNan() 检查 NaN
        'use-isnan': 2,

        //规则59 禁止在 finally 语句块中出现控制流语句
        'no-unsafe-finally': 'error',

        //规则60 禁止不必要的 return await
        'no-return-await': 'error',

        //规则61 禁止使用with() {}
        'no-with': 'error',

        //规则67和28 禁止变量声明与外层作用域的变量重名
        'no-shadow': 'error',

        //建议5 方法的参数尽量在一行显示
        'function-paren-newline': ['warn', 'multiline'],

        //建议6 对象字面量属性超过4个，需要都换行
        'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],

        //建议7 链式调用对象方法时,一行最多调用4次,否则需要换行
        'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],

        //建议10 要求在类成员之间出现空行
        'lines-between-class-members': [
            'warn',
            'always',
            { exceptAfterSingleLine: true }
        ],

        //建议11 禁止块类收尾有空行
        'padded-blocks': ['off', { classes: 'never' }],

        //建议12 禁止出现多行空行
        'no-multiple-empty-lines': ['warn', { max: 1 }],

        //建议13 在大括号中使用一致的空格
        'object-curly-spacing': ['warn', 'always'],

        //建议14 数组的括号内不要有空格
        'array-bracket-spacing': ['warn', 'never'],

        //建议15 要求末尾逗号
        'comma-dangle': ['warn', 'always-multiline'],

        //建议16 要求使用分号
        semi: ['warn', 'always'],

        //建议17 强制在逗号之后使用空格
        'comma-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],

        //建议19 文件不超过2000行
        'max-lines': ['warn', 2000],

        //建议23 回调函数嵌套的层数不超过4层
        'max-nested-callbacks': ['error', 4],

        //建议26 强制函数定义中最多允许的参数数量不超过5个
        'max-params': ['warn', 5],

        //建议31 function 声明或表达式的一致性
        'func-style': ['warn', 'expression', { allowArrowFunctions: true }],

        //建议47 要求使用 === 和 !==
        eqeqeq: 'warn',

        //建议48 简化条件表达式
        'no-unexpected-multiline': 'warn',

        //建议49和50 不要使用否定表达式
        'no-negated-condition': 'warn',

        //建议51 在混合使用不同的操作符时，采用括号明确运算的优先级
        'no-mixed-operators': [
            'warn',
            {
                group: [
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                allowSamePrecedence: true
            }
        ],

        //建议53 不要用逻辑运算符代替控制语句
        //建议54 禁止正则表达式字面量中出现多个空格 (eslint:recommended已包含)
        //建议58 禁止在全局范围使用变量和函数声明
        'no-implicit-globals': 'warn',

        //建议64 异常的使用:抛出的异常应该是 Error 错误或 Error 的子类,永远不要抛出字符串或其他对象
        'no-throw-literal': 'warn',

        //建议65 要求使用 Error 对象作为 Promise拒绝的原因
        'prefer-promise-reject-errors': 'warn',

        //建议66 禁用 continue 语句
        'no-continue': 'warn',

        //建议68 var 声明会被提升至该作用域的顶部,所以变量声明应该在作用域顶部
        'vars-on-top': 'warn',

        //建议69 在 ECMAscript 5,建议函数内部使用 "use strict"
        strict: ['warn', 'function'],

        /* 自定义规则 */
        //禁止使用 new 以避免产生副作用
        'no-new': 'error',

        //要求使用 const 声明那些声明后不在被修改的变量
        'prefer-const': 'off',

        //注释内禁用tab
        'no-tabs': 'error',

        /* 云龙codecheck规格 */
        //空函数要求显式的注释说明
        'no-empty-function': 'off',

        //switch中的case标签不能重复
        'no-duplicate-case': 2,

        //禁止混用tab和空格
        'no-mixed-spaces-and-tabs': ['error'],
        'no-dupe–class-members': 'off',

        //要求或禁止文件末尾存在空行
        'eol-last': 'error',

        //强制大括号内换行符的一致性
        'object-curly-newline': [
            'warn',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 4
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 4
                },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 4
                },
                ExortDeclaration: {
                    multiline: true,
                    minProperties: 4
                },
            }
        ],

        //要求对象字面量属性名称不使用引号
        'quote-props': ['error', 'as-needed'],

        //强制在对象字面量的键和值之间使用一致的空格
        'key-spacing': ['error'],

        //要求或禁止语句块之前的空格
        'space-before-blocks': ['error'],

        //强制分号前后有空格
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],

        //要求箭头函数的箭头之前或之后有空格
        'arrow-spacing': ['error'],

        'space-in-parens': ['error', 'never']

    }
}
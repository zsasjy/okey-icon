export default {
    react: {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules:false,
                    targets: {
                        browsers: [
                            "> 0.5%",
                            "last 2 versions",
                            "Firefox ESR",
                            "not dead",
                            "IE 11",
                            "not IE 10"
                        ]
                    }
                }
            ],
            '@babel/preset-react',
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: false,
                },
            ],
        ],
    },
    vue: {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
                    },
                },
            ],
            '@vue/babel-preset-jsx',
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: false,
                },
            ],
        ],
    },
    svg: {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
                    },
                },
            ],
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: false,
                },
            ],
        ],
    },
    'vue3': {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
                    },
                },
            ],
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: false,
                },
            ],
            '@vue/babel-plugin-jsx',
        ],
    }
}
export const firstTitleCase = (str: string): string => {
    return str.length > 0
        ? str.slice(0,1).toUpperCase() + str.slice(1)
        : '';
}

export const SvgoPlugins = [
    {
        name: 'convertColors',
        params: { currentColor: /^(?!url|none)./ },
    },
    {
        name: 'cleanupListOfValues',
        active: true,
    },
]
const styleVars = {
    primary: '#1982c4',
    primaryLight: '#38a3e5',
    primaryDark: '#136090',
    secondary: '#8556C8',
    secondaryLight: '#A684D7',
    secondaryDark: '#6737A9',
    error: '#ff1f26',
    errorLight: '#ff595e',
    errorDark: '#e00007',
    warning: '#ffc31f',
    warningLight: '#ffca3a',
    warningDark: '#ffbe0a',
    success: '#8ac926',
    successLight: '#a9de54',
    successDark: '#6a9a1d',
    code: '#ffbe0a',
    bgDark: '#282c34',
    bgDarker: '#353b45',
}

const initStyles = () => {
    for (const [key, value] of Object.entries(styleVars)) {
        document.documentElement.style.setProperty('--c-' + key, value)
    }
}

export { styleVars, initStyles }

export const propEnum = {
    theme: [
        { label: '线性', value: 'outline' }, 
        { label: '填充', value: 'filled' }, 
        { label: '双色', value: 'two-tone' }, 
        { label: '多色', value: 'multi-color' }, 
    ],
    strokeLinecap: [
        { label: 'butt', value: 'butt' }, 
        { label: 'round', value: 'round' }, 
        { label: 'square', value: 'square' }, 
    ],
    strokeLinejoin: [
        { label: 'miter', value: 'miter' }, 
        { label: 'round', value: 'round' }, 
        { label: 'bevel', value: 'bevel' }, 
    ]
}


export const obj2str = (obj: Record<string, string| number>): string => {
    return Object.keys(obj).reduce((total,cur) => {
        if(cur === 'strokeWidth'){
            total += ` ${cur}={${obj[cur]}}`
        }else{
            total += ` ${cur}="${obj[cur]}"`
        }
        return total;
    },'')
}

export const downloadSvg = (svg: string, name: string) => {
    const blob = new Blob([svg] ,{type: 'image/svg+xml'})
    const url = URL.createObjectURL(blob);
    triggerDownload(url, name)
} 

const triggerDownload = (url: string, fileName: string = 'image.svg'): void => {
    const evt: MouseEvent = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    const aLink: HTMLAnchorElement = document.createElement("a");
    aLink.setAttribute('href', url);
    aLink.setAttribute('download', fileName);
    aLink.dispatchEvent(evt);
}
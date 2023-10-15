export const addScrollLock = () => {
    document.querySelector('html').classList.add('stop-scroll');
}

export const removeScrollLock = () => {
    document.querySelector('html').classList.remove('stop-scroll');
}

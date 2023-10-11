export const addScrollLock = () => {
    document.querySelector('body').classList.add('stop-scroll');
}

export const removeScrollLock = () => {
    document.querySelector('body').classList.remove('stop-scroll');
}

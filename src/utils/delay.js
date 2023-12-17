export const pause = duration => {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

export const doWork = duration => {
    const start = Date.now()
    while (Date.now() - start < duration) { }
}
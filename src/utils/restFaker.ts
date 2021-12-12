const handleAsyncData = (data: any, pass: boolean = true, errorMessage?: string) => {
    return new Promise((resolve, reject) => {
        if (pass) {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        } else {
            setTimeout(() => {
                reject(errorMessage)
            }, 2000)
        }
    })
}

export default handleAsyncData

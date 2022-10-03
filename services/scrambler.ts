export function generateRandomKey() {
    const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('')

    for (let i = key.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[key[i], key[j]] = [key[j], key[i]]
    }

    return key.join('').substring(0, 36)
}

export function encodeData(key: string, data: string) {
    const originalKey = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
    let result = ''

    data.split('').forEach((char: string) => {
        const index = originalKey.indexOf(char.toLowerCase())
        result += index > -1 ? key[index] : char
    })

    return result
}

export function decodeData(key: string, data: string) {
    const originalKey = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
    let result = ''

    data.split('').forEach((char: string) => {
        const index = key.indexOf(char)
        result += index > -1 ? originalKey[index] : char
    })

    return result
}

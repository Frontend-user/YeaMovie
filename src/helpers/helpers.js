export function formatRequestParams(options) {
    let result = '?'
    let entries = Object.entries(options)
    for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i]
        if (i + 1 === entries.length) {
            result += `${key}=${value}`
        } else {
            result += `${key}=${value}&`

        }
    }
    console.log(result)
    return result
}

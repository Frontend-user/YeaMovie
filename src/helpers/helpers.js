export function formatRequestParams(options) {
    let result = '?'
    console.log(options,'oo')
    let entries = Object.entries(options)
    console.log(entries,'eioo')
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

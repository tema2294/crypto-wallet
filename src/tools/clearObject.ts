export const clearObject = (object: {[key:string]: any}):any => {

    const cleanObject:{[key:string]:any} = {}

    for (const key in object) {
        const value = object[key]
        const isEmptyString = typeof(value) === "string" ?  value.trim() === "" : false
        const isUndefined = !value

        if (!isUndefined && !isEmptyString) {
            cleanObject[key] = value
        }
    }
    return cleanObject
}
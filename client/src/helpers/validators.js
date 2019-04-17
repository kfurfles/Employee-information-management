export function isNull(value,param){
    if (!value) {
        throw Error(`param {${param}} expected`)
    } else{
        return true
    }
}
 
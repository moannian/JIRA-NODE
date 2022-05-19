const extractSelctParms = (obj) => {
    let arr = ["2=2"]
    for (let key in obj) {
        let element = `${key}=${obj[key]}`
        arr.push(element)
    }
    str = arr.join(' and ');
    return str
}
module.exports = { extractSelctParms }
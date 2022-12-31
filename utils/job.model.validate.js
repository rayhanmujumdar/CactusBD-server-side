const phoneValidate = (value) => {
    const validator = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
    return validator
}

const emailValidate = (value) => {
    const validator = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(value)
    return validator
}

const cvLinkValidate = (value) => {
    const validator = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm.test(value)
    return validator
}

module.exports = {
    phoneValidate,
    emailValidate,
    cvLinkValidate
}
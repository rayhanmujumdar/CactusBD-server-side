const cvLinkValidate = (value) => {
    const validator = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm.test(value)
    // console.log(validator)
    return validator
}

cvLinkValidate('https://drive.google.com/file/d/1PTqCP6G3r0mnEbe4QjgYPhhuR7dSE9Q7/view')

const emailValidate = (value) => {
    const validator = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(value)
    console.log(validator)
    return validator
}

emailValidate('rayhanmujumdar0177gmail.com')

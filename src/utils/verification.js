/**
 * 手机号验证
 * @param {*} value  手机号
 */

export function checkPhone(value) {
    let regPhong = /^1[3456789]\d{9}$/;
    return regPhong.test(value)
}

/*
6 - 20数字加英文
*/


export function checkPassword(value) {
    let regPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    return regPassword.test(value)
}
/*
6 位数字加英文
*/

export function checkCode(value) {
    let regCode = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
    return regCode.test(value)
}
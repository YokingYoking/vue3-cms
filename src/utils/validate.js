// 过滤特殊字符
export const stripScipts = (str) => {
  var pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~!@#￥……&*())&mdash;—|{}【】‘；：”“'。，、？]"
  );
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, "");
  }
  return rs;
};
// 验证邮箱
export const validateEmail = (str) => {
  let reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg.test(str)
};
// 验证纯数字英文
export const validatePwd = (rule, value, callback) => {
  let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  if (value === "") {
    return callback(new Error("Please input your password"));
  } else if (!reg.test(value)) {
    callback(new Error("Please input correct password"));
  } else {
    callback();
  }
};

//引入七牛依赖
const qiniu = require("qiniu");
//客户端调用接口，生成token
let bucket = 'pikaqiiu'
let accessKey = 'NCS8aqPfRETTi8zuUUn-_6kCH3Oy3vAc5owtxqeN';
let secretKey = 'N53ZXJ6m4l7CcxiG8buVMimafOXmXsDYiPxVk6IY';
let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

let options = {
  scope: bucket //七牛资源目录
};
let putPolicy = new qiniu.rs.PutPolicy(options);
let uploadToken = putPolicy.uploadToken(mac);
console.log(uploadToken, 'token');
//把uploadToken返回给客户端

//生成上传 Token
token = uptoken(bucket)
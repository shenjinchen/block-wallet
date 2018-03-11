var fs = require("fs");
var ethJS = require('ethereumjs-wallet');
var thirdparty = require('ethereumjs-wallet/thirdparty');
var wallet = ethJS.generate();
/*console.info(wallet.getAddress());
var time = Date.now();
console.info(wallet.getAddress());
console.info(wallet.getPublicKey());
console.info(wallet.valueOf().getChecksumAddressString());
var file = wallet.valueOf().getV3Filename(time);
console.info(wallet.valueOf().getPrivateKey());

var v3 = wallet.toV3("123456");
console.info(v3.valueOf());

var json = JSON.stringify(v3);

console.info(file);
fs.writeFileSync(file, json);*/
/*fs.open(file, "w", function (err, fd) {
    if (err) {
        return console.error("open file error.");
    }

    fs.write(fd, json, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("--------我是分割线-------------")
        console.log("读取写入的数据！");
        /!*fs.readFile('input.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("异步读取文件数据: " + data.toString());
        });*!/
    });


});*/

setTimeout(function() {
    var data = fs.readFileSync("/Users/shenjinchen/WebstormProjects/web/UTC--2018-03-10T01-27-51.051Z--c0cc07917b56b35ad3f05a22fa2b9412788468e5");
    console.info(data.toString());
    var wallet2 = ethJS.fromV3(data.toString(),"123456")
    console.info(wallet2.getAddress());
}, 1000);


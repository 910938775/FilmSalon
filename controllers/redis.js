// 导入 redis 数据库
const client = require('../models/dbRedis.js')


// 监听 数据库错误
client.on('error', function(error) {
    // 抛出错误
    exports.Check(Error)
})


/**redis 数据库错误检测
 * @param data 检测数据 [必填]
 * @param type 检测类型 [选填]
 */
exports.Check = function(data, type) {
    // 设置 错误信息变量
    let ErrorMessage = '';
    // 设置 类型变量
    let NewType = '';

    // 检验数据类型
    arguments.length && (
        NewType = Object.prototype.toString.call(data),
        type && (type = '[object ' + type + ']')
    );

    // 1. 检验数据类型：2 个参数
    // 检验数据类型
    (arguments.length === 2) && !(NewType === type) && (
        ErrorMessage = '数据类型必须是' + type
    );

    // 2. 数据存在性检测：1 个参数
    // 系统报错 等其他错误
    (arguments.length === 1) && (type instanceof Error) && (
        ErrorMessage = '数据连接失败或错误'
    );
    // 数据库操作失败
    (arguments.length === 1) && (type instanceof null) && (
        ErrorMessage = '数据库操作失败'
    );

    // 3. 传参错误检测
    (arguments.length === 0) && (
        ErrorMessage = '请正确传参'
    );
    if (arguments.length >= 1) {
        switch (NewType) {
            case "[object Function]":
                break;
            case "[object String]":
                break;
            case "[object Null]":
                break;
            case "[object Number]":
                break;
            default:
                ErrorMessage = '请正确传参';
                break
        }
    };
    if (arguments.length === 2) {
        switch (typeof(type)) {
            case "string":
                break;
            default:
                ErrorMessage = '请正确传参';
                break
        }
    };

    // 抛出错误信息
    if (ErrorMessage) {
        throw ErrorMessage
    }
}


/**String 类型 储存
 * @param key 关键字 [必填]
 * @param value 字符串值 [必填]
 * @param time 过期时间 [选填]
 */
exports.setString = function(key, value, time) {
    // 检验数据类型
    exports.Check(key, 'String');
    exports.Check(value, 'String');
    time && exports.Check(time, 'Number');

    // 储存数据
    client.set(key, value, function(error, data) {
        // 储存错误
        if (error) {
            Check(null);
            return
        };
        // 储存成功
        // 设置过期时间
        client.expire(key, time, function(error, data) {
            // 设置错误
            if (error) {
                Check(null);
                return
            }
        })
    })
}


/**String 类型 读取
 * @param key 关键字 [必填]
 */
exports.getString = function(key) {
    // 检验数据类型
    exports.Check(key, 'String');

    // 返回数据
    return new Promise(function(resolve, reject) {
        // 读取数据
        client.get(key, function(error, data) {
            // 读取错误
            if (error) {
                reject(error);
                return
            };
            // 读取成功
            resolve(data)
        })
    })
}


/**String 类型 删除
 * @param key 关键字 [必填]
 */
exports.delString = function(key) {
    // 检验数据类型
    exports.Check(key, 'String');

    // 删除数据
    client.del(key, function(error, data) {
        // 删除错误
        if (error) {
            reject(error);
            return
        }
    })
}
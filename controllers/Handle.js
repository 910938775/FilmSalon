/**  封装 数据处理方法 **/

// 导入 文件操作 模块
var fs = require('fs')

// 导入 MD5 加密模块
var MD5 = require('blueimp-md5')


/** 获取 文件夹目录
 *  @param dir 文件夹路径
 */
exports.FindDir = function(dir) {
    // 处理 异步函数 readdir 的 Promise 函数
    return new Promise(function(resolve, reject) {
        // 声明 储存目录名 的数组变量
        fs.readdir(dir, function(error, data) {
            // 通过 回调函数 reject 返回错误信息
            if (error) {
                reject(error);
                return
            };
            // 通过 回调函数 resolve 返回结果
            // 伪数组：object 对象
            resolve(data)
        })
    })
}


/** 保存文件
 * @param files 文件
 * @param filePath 文件保存路径
 * @param callback 返回文件信息
 */
exports.SaveFile = function(files, filePath, callback) {
    // 接受 文件信息 伪数组对象
    let fileInfos = [];
    for (let i in files) {
        let file = files[i];
        // 循环接收数据 防止函数闭包 数据覆盖
        let fileInfo = {};
        // 修改文件名
        // 格式：fs.renameSync( 存储路径 + 原文件名, 存储路径 + 修改名)
        fs.renameSync(filePath + file.filename, filePath + file.originalname);
        // 获取 文件基本信息
        // 获取 文件类型
        fileInfo.mimetype = file.mimetype;
        // 获取 文件名称
        fileInfo.originalname = file.originalname;
        // 获取 文件尺寸
        fileInfo.size = file.size;
        // 获取 文件路径
        fileInfo.path = file.path;
        // 封装 文件信息
        fileInfos.push(fileInfo);
        // 返回 文件信息
        callback(fileInfos)
    }
}


/** 删除文件
 * @param path 文件保存路径
 */
exports.RemoveFile = function(path) {
    // 处理 异步函数 unlink 的 Promise 函数
    return new Promise(function(resolve, reject) {
        fs.unlink(path, function(error, data) {
            if (error) {
                // 通过 回调函数 reject 返回错误信息
                reject(error);
                return
            };
            // 通过 回调函数 resolve 返回结果
            resolve(data)
        })
    })
}


/** 读取文件
 * @param path 文件保存路径
 */
exports.ReadFile = function(path) {
    // 处理 异步函数 readFile 的 Promise 函数
    return new Promise(function(resolve, reject) {
        fs.readFile(path, 'utf8', function(error, data) {
            if (error) {
                // 通过 回调函数 reject 返回错误信息
                reject(error);
                return
            };
            // 通过 回调函数 resolve 返回结果
            resolve(data)
        })
    })
}


/** 生成数据请求 Token 字符串
 * @returns Token
 */
exports.token = function() {
    // 随机生成十位字母：小写字母
    let letter = '';
    for (let i = 0; i < 10; i++) {
        letter += String.fromCharCode(Math.round(Math.random() * -25) + 122)
    };
    // 加密处理
    letter = MD5(letter);
    // 返回 Token
    return letter
}


/** 数据库热度值排序
 * @param search 排序对象（原始数据库数据）
 */
exports.Ranking = function(search) {
    // 保存 排序数据
    let Rdata = search;
    // 声明 查询数据
    let db = {};
    // 声明 保存结果变量
    let RankingData = [];
    // 声明 垃圾数据回收变量
    let Rubbish = [];
    // 判断 查询对象 类型：
    // 数据库模型 构造方法
    if (typeof(search) === Function) {
        // 查询数据库所有数据
        FindDB(db, search)

        .then(
            // 数据查询成功
            function(data) {
                // 保存 排序数据
                Rdata = data
            })

        .catch(
            // 查询错误
            function(error) {
                // 返回 错误信息
                return error
            })
    };

    // 封装数据排序 自执行函数
    RankingData = (function rank(Rdata) {
        // 设置 递归出口
        // 获取 排序数据长度
        let extent = Rdata.length;
        if (extent <= 1) {
            return Rdata
        };
        // 数组 拆分
        let middle = Math.floor(extent / 2);
        let left = Rdata.slice(0, middle);
        let right = Rdata.slice(middle);
        // 递归：对 数组进行 细分 [xxx, xxx]
        left = rank(left);
        right = rank(right);

        // 声明 中间变量
        let rankData = [];
        // 最终排序：数组取值
        // 数组只要有值就循环：最终其中一个数组为 空，另一个只剩 一个元素
        while (left.length && right.length) {
            // 取出数组第一个元素的 比较值
            // 学术室排序
            if (left[0].Academics && right[0].Academics) {
                // 热度值
                let LAcademicValue = left[0].Academics[0].Message[0].AcademicValue;
                let LSearchValue = left[0].Academics[0].Message[0].AcademicValue.SearchValue;
                let LTagValue = left[0].Academics[0].Message[0].AcademicValue.TagValue;
                let LClickValue = left[0].Academics[0].Message[0].AcademicValue.ClickValue;
                var leftRank = 0;
                if (LAcademicValue) {
                    // 1. LSearchValue 存在
                    LSearchValue && (leftRank = LSearchValue);
                    // 2. LTagValue 存在
                    LTagValue && (leftRank = LTagValue);
                    // 3. LClickValue 存在
                    LClickValue && (leftRank = LClickValue);
                    // 4. LSearchValue LTagValue 存在
                    LSearchValue && LTagValue && (leftRank = LSearchValue + LTagValue);
                    // 5. LSearchValue LClickValue 存在
                    LSearchValue && LClickValue && (leftRank = LSearchValue + LClickValue);
                    // 6. TagValue WatchValue 存在
                    LTagValue && LClickValue && (leftRank = LTagValue + LClickValue);
                    // 7. LSearchValue LTagValue LClickValue 存在
                    LSearchValue && LTagValue && LClickValue && (leftRank = LSearchValue + LTagValue + LClickValue)
                };
                // 创建时间
                var leftCreate = left[0].createTime ? left[0].createTime : '';
                // 名称
                let LName = left[0].Academics[0].Message[0].Name;
                let LChineseName = left[0].Academics[0].Message[0].Name.ChineseName;
                let LEnglishName = left[0].Academics[0].Message[0].Name.EnglishName;
                var leftName = '';
                if (LName) {
                    // 1. LChineseName 存在
                    LChineseName && (leftName = LChineseName);
                    // 2. LEnglishName 存在
                    LEnglishName && (leftName = LEnglishName);
                    // 3. LChineseName LEnglishName 存在
                    LChineseName && LEnglishName && (leftName = LChineseName + '.' + LEnglishName)
                };

                // 热度值
                let RAcademicValue = right[0].Academics[0].Message[0].AcademicValue;
                let RSearchValue = right[0].Academics[0].Message[0].AcademicValue.SearchValue;
                let RTagValue = right[0].Academics[0].Message[0].AcademicValue.TagValue;
                let RClickValue = right[0].Academics[0].Message[0].AcademicValue.ClickValue;
                var rightRank = 0;
                if (RAcademicValue) {
                    // 1. RSearchValue 存在
                    RSearchValue && (rightRank = RSearchValue);
                    // 2. RTagValue 存在
                    RTagValue && (rightRank = RTagValue);
                    // 3. RClickValue 存在
                    RClickValue && (rightRank = RClickValue);
                    // 4. RSearchValue RTagValue 存在
                    RSearchValue && RTagValue && (rightRank = RSearchValue + RTagValue);
                    // 5. RSearchValue RClickValue 存在
                    RSearchValue && RClickValue && (rightRank = RSearchValue + RClickValue);
                    // 6. TagValue WatchValue 存在
                    RTagValue && RClickValue && (rightRank = RTagValue + RClickValue);
                    // 7. RSearchValue RTagValue RClickValue 存在
                    RSearchValue && RTagValue && RClickValue && (rightRank = RSearchValue + RTagValue + RClickValue)
                };
                // 创建时间
                var rightCreate = right[0].createTime ? right[0].createTime : '';
                // 名称
                let RName = right[0].Academics[0].Message[0].Name;
                let RChineseName = right[0].Academics[0].Message[0].Name.ChineseName;
                let REnglishName = right[0].Academics[0].Message[0].Name.EnglishName;
                var rightName = '';
                if (RName) {
                    // 1. RChineseName 存在
                    RChineseName && (rightName = RChineseName);
                    // 2. REnglishName 存在
                    REnglishName && (rightName = REnglishName);
                    // 3. RChineseName REnglishName 存在
                    RChineseName && REnglishName && (rightName = RChineseName + '.' + REnglishName)
                }
            };

            // 资料馆排序
            if (left[0].Films && right[0].Films) {
                // 热度值
                let LFilmsValue = left[0].Films[0].Message[0].FilmsValue;
                let LSearchValue = left[0].Films[0].Message[0].FilmsValue.SearchValue;
                let LTagValue = left[0].Films[0].Message[0].FilmsValue.TagValue;
                let LWatchValue = left[0].Films[0].Message[0].FilmsValue.WatchValue;
                var leftRank = 0;
                if (LFilmsValue) {
                    // 1. LSearchValue 存在
                    LSearchValue && (leftRank = LSearchValue);
                    // 2. LTagValue 存在
                    LTagValue && (leftRank = LTagValue);
                    // 3. LWatchValue 存在
                    LWatchValue && (leftRank = LWatchValue);
                    // 4. LSearchValue LTagValue 存在
                    LSearchValue && LTagValue && (leftRank = LSearchValue + LTagValue);
                    // 5. LSearchValue LWatchValue 存在
                    LSearchValue && LWatchValue && (leftRank = LSearchValue + LWatchValue);
                    // 6. TagValue WatchValue 存在
                    LTagValue && LWatchValue && (leftRank = LTagValue + LWatchValue);
                    // 7. LSearchValue LTagValue LWatchValue 存在
                    LSearchValue && LTagValue && LWatchValue && (leftRank = LSearchValue + LTagValue + LWatchValue)
                };
                // 创建时间
                var leftCreate = left[0].createTime ? left[0].createTime : '';
                // 名称
                let LName = left[0].Films[0].Message[0].Name;
                let LChineseName = left[0].Films[0].Message[0].Name.ChineseName;
                let LEnglishName = left[0].Films[0].Message[0].Name.EnglishName;
                var leftName = '';
                if (LName) {
                    // 1. LChineseName 存在
                    LChineseName && (leftName = LChineseName);
                    // 2. LEnglishName 存在
                    LEnglishName && (leftName = LEnglishName);
                    // 3. LChineseName LEnglishName 存在
                    LChineseName && LEnglishName && (leftName = LChineseName + '.' + LEnglishName)
                };

                // 热度值
                let RFilmsValue = right[0].Films[0].Message[0].FilmsValue;
                let RSearchValue = right[0].Films[0].Message[0].FilmsValue.SearchValue;
                let RTagValue = right[0].Films[0].Message[0].FilmsValue.TagValue;
                let RWatchValue = right[0].Films[0].Message[0].FilmsValue.WatchValue;
                var rightRank = 0;
                if (RFilmsValue) {
                    // 1. RSearchValue 存在
                    RSearchValue && (rightRank = RSearchValue);
                    // 2. RTagValue 存在
                    RTagValue && (rightRank = RTagValue);
                    // 3. RWatchValue 存在
                    RWatchValue && (rightRank = RWatchValue);
                    // 4. RSearchValue RTagValue 存在
                    RSearchValue && RTagValue && (rightRank = RSearchValue + RTagValue);
                    // 5. RSearchValue RWatchValue 存在
                    RSearchValue && RWatchValue && (rightRank = RSearchValue + RWatchValue);
                    // 6. TagValue WatchValue 存在
                    RTagValue && RWatchValue && (rightRank = RTagValue + RWatchValue);
                    // 7. RSearchValue RTagValue RWatchValue 存在
                    RSearchValue && RTagValue && RWatchValue && (rightRank = RSearchValue + RTagValue + RWatchValue)
                };
                // 创建时间
                var rightCreate = right[0].createTime ? right[0].createTime : '';
                // 名称
                let RName = right[0].Films[0].Message[0].Name;
                let RChineseName = right[0].Films[0].Message[0].Name.ChineseName;
                let REnglishName = right[0].Films[0].Message[0].Name.EnglishName;
                var rightName = '';
                if (RName) {
                    // 1. RChineseName 存在
                    RChineseName && (rightName = RChineseName);
                    // 2. REnglishName 存在
                    REnglishName && (rightName = REnglishName);
                    // 3. RChineseName REnglishName 存在
                    RChineseName && REnglishName && (rightName = RChineseName + '.' + REnglishName)
                }
            };

            // 课程排序
            if (left[0].ImageText || right[0].ImageText || left[0].Videos || right[0].Videos) {
                // 热度值
                let LCourseValue;
                left[0].ImageText && (LCourseValue = left[0].ImageText[0].Message[0].CourseValue);
                left[0].Videos && (LCourseValue = left[0].Videos[0].Message[0].CourseValue);
                let LPartition;
                left[0].ImageText && (LPartition = left[0].ImageText[0].Message[0].Partition);
                left[0].Videos && (LPartition = left[0].Videos[0].Message[0].Partition);
                let leftRank = 0;
                if (LCourseValue) {
                    // 影视类
                    if (LPartition === 'Course') {
                        let LSearchValue;
                        left[0].ImageText && (LSearchValue = left[0].ImageText[0].Message[0].CourseValue[0].SearchValue);
                        left[0].Videos && (LSearchValue = left[0].Videos[0].Message[0].CourseValue[0].SearchValue);
                        let LTagValue;
                        left[0].ImageText && (LTagValue = left[0].ImageText[0].Message[0].CourseValue[0].TagValue);
                        left[0].Videos && (LTagValue = left[0].Videos[0].Message[0].CourseValue[0].TagValue);
                        let LlearningValue;
                        left[0].ImageText && (LlearningValue = left[0].ImageText[0].Message[0].CourseValue[0].learningValue);
                        left[0].Videos && (LlearningValue = left[0].Videos[0].Message[0].CourseValue[0].learningValue)
                    };

                    // 其他类
                    if (LPartition === 'Other') {
                        let LSearchValue;
                        left[0].ImageText && (LSearchValue = left[0].ImageText[0].Message[0].OtherValue[0].SearchValue);
                        left[0].Videos && (LSearchValue = left[0].Videos[0].Message[0].OtherValue[0].SearchValue);
                        let LTagValue;
                        left[0].ImageText && (LTagValue = left[0].ImageText[0].Message[0].OtherValue[0].TagValue);
                        left[0].Videos && (LTagValue = left[0].Videos[0].Message[0].OtherValue[0].TagValue);
                        let LlearningValue;
                        left[0].ImageText && (LlearningValue = left[0].ImageText[0].Message[0].OtherValue[0].learningValue);
                        left[0].Videos && (LlearningValue = left[0].Videos[0].Message[0].OtherValue[0].learningValue)
                    };

                    // 1. LSearchValue 存在
                    LSearchValue && (leftRank = LSearchValue);
                    // 2. LTagValue 存在
                    LTagValue && (leftRank = LTagValue);
                    // 3. LlearningValue 存在
                    LlearningValue && (leftRank = LlearningValue);
                    // 4. LSearchValue LTagValue 存在
                    LSearchValue && LTagValue && (leftRank = LSearchValue + LTagValue);
                    // 5. LSearchValue LlearningValue 存在
                    LSearchValue && LlearningValue && (leftRank = LSearchValue + LlearningValue);
                    // 6. TagValue WatchValue 存在
                    LTagValue && LlearningValue && (leftRank = LTagValue + LlearningValue);
                    // 7. LSearchValue LTagValue LlearningValue 存在
                    LSearchValue && LTagValue && LlearningValue && (leftRank = LSearchValue + LTagValue + LlearningValue)
                };
                // 创建时间
                var leftCreate = left[0].createTime ? left[0].createTime : '';
                // 名称
                let leftName;
                left[0].ImageText && (leftName = left[0].ImageText[0].Message[0].Name);
                left[0].Videos && (leftName = left[0].Videos[0].Message[0].Name);

                // 热度值
                let RCourseValue;
                right[0].ImageText && (RCourseValue = right[0].ImageText[0].Message[0].CourseValue);
                right[0].Videos && (RCourseValue = right[0].Videos[0].Message[0].CourseValue);
                let RPartition;
                right[0].ImageText && (RPartition = right[0].ImageText[0].Message[0].Partition);
                right[0].Videos && (RPartition = right[0].Videos[0].Message[0].Partition);
                let rightRank = 0;
                if (RCourseValue) {
                    // 影视类
                    if (RPartition === 'Course') {
                        let RSearchValue;
                        right[0].ImageText && (RSearchValue = right[0].ImageText[0].Message[0].CourseValue[0].SearchValue);
                        right[0].Videos && (RSearchValue = right[0].Videos[0].Message[0].CourseValue[0].SearchValue);
                        let RTagValue;
                        right[0].ImageText && (RTagValue = right[0].ImageText[0].Message[0].CourseValue[0].TagValue);
                        right[0].Videos && (RTagValue = right[0].Videos[0].Message[0].CourseValue[0].TagValue);
                        let RlearningValue;
                        right[0].ImageText && (RlearningValue = right[0].ImageText[0].Message[0].CourseValue[0].learningValue);
                        right[0].Videos && (RlearningValue = right[0].Videos[0].Message[0].CourseValue[0].learningValue)
                    };

                    // 其他类
                    if (RPartition === 'Other') {
                        let RSearchValue;
                        right[0].ImageText && (RSearchValue = right[0].ImageText[0].Message[0].OtherValue[0].SearchValue);
                        right[0].Videos && (RSearchValue = right[0].Videos[0].Message[0].OtherValue[0].SearchValue);
                        let RTagValue;
                        right[0].ImageText && (RTagValue = right[0].ImageText[0].Message[0].OtherValue[0].TagValue);
                        right[0].Videos && (RTagValue = right[0].Videos[0].Message[0].OtherValue[0].TagValue);
                        let RlearningValue;
                        right[0].ImageText && (RlearningValue = right[0].ImageText[0].Message[0].OtherValue[0].learningValue);
                        right[0].Videos && (RlearningValue = right[0].Videos[0].Message[0].OtherValue[0].learningValue)
                    };

                    // 1. RSearchValue 存在
                    RSearchValue && (rightRank = RSearchValue);
                    // 2. RTagValue 存在
                    RTagValue && (rightRank = RTagValue);
                    // 3. RlearningValue 存在
                    RlearningValue && (rightRank = RlearningValue);
                    // 4. RSearchValue RTagValue 存在
                    RSearchValue && RTagValue && (rightRank = RSearchValue + RTagValue);
                    // 5. RSearchValue RlearningValue 存在
                    RSearchValue && RlearningValue && (rightRank = RSearchValue + RlearningValue);
                    // 6. TagValue WatchValue 存在
                    RTagValue && RlearningValue && (rightRank = RTagValue + RlearningValue);
                    // 7. RSearchValue RTagValue RlearningValue 存在
                    RSearchValue && RTagValue && RlearningValue && (rightRank = RSearchValue + RTagValue + RlearningValue)
                };
                // 创建时间
                var rightCreate = right[0].createTime ? right[0].createTime : '';
                // 名称
                let rightName;
                right[0].ImageText && (rightName = right[0].ImageText[0].Message[0].Name);
                right[0].Videos && (rightName = right[0].Videos[0].Message[0].Name)
            };

            // 取出两个数组第一个元素的 最大值
            // 1. 默认：热度值排序
            if (leftRank !== rightRank) {
                rankData.push(
                    leftRank > rightRank ? left.shift() : right.shift()
                )
            };
            // 2. 创建时间排序：热度值相同
            if (
                leftRank === rightRank && leftCreate !== '' &&
                rightCreate !== '' && leftCreate !== rightCreate
            ) {
                rankData.push(
                    leftCreate > rightCreate ? left.shift() : right.shift()
                )
            };
            // 3. 名称排序：热度值相同，创建时间相同
            if (
                (leftCreate === '' || rightCreate === '' || leftCreate === rightCreate) &&
                leftRank === rightRank && leftName !== '' && rightName !== '' && leftName !== rightName
            ) {
                // 比较字符串的 ASCII 码
                if (leftName.length === rightName.length) {
                    // 字符串长度相等：逐个比较
                    let i = 0;
                    while (i < leftName.length) {
                        let LNcode = leftName.split('')[i].charCodeAt();
                        let RNcode = rightName.split('')[i].charCodeAt();
                        if (LNcode !== RNcode) {
                            rankData.push(
                                LNcode > RNcode ? left.shift() : right.shift()
                            );
                            break
                        };
                        ++i
                    }
                };

                if (leftName.length > rightName.length) {
                    // 字符串长度不相等：逐个比较
                    let i = 0;
                    while (i < rightName.length) {
                        let LNcode = leftName.split('')[i].charCodeAt();
                        let RNcode = rightName.split('')[i].charCodeAt();
                        if (LNcode !== RNcode) {
                            rankData.push(
                                LNcode > RNcode ? left.shift() : right.shift()
                            );
                            break
                        };
                        ++i
                    };
                    // 谁长谁大：最短的字符串相同
                    if (i === rightName.length) {
                        rankData = left.shift()
                    }
                };

                if (leftName.length < rightName.length) {
                    // 字符串长度不相等：逐个比较
                    let i = 0;
                    while (i < leftName.length) {
                        let LNcode = leftName.split('')[i].charCodeAt();
                        let RNcode = rightName.split('')[i].charCodeAt();
                        if (LNcode !== RNcode) {
                            rankData.push(
                                LNcode > RNcode ? left.shift() : right.shift()
                            );
                            break
                        };
                        ++i
                    };
                    // 谁长谁大：最短的字符串相同
                    if (i === leftName.length) {
                        rankData = right.shift()
                    }
                };
                // 4. 垃圾数据回收
                if (
                    (leftCreate === '' || rightCreate === '' || leftCreate === rightCreate) &&
                    leftRank === rightRank && (leftName === '' || rightName === '' || leftName === rightName)
                ) {
                    let LRubbish = left.shift();
                    Rubbish.push(LRubbish);
                    let RRubbish = right.shift();
                    Rubbish.push(RRubbish)
                }
            }
        };

        // 数组合并
        // 1. left 存在数据
        left.length && (
            left.forEach(item => {
                rankData.push(item)
            })
        );
        // 2. right 存在数据
        right.length && (
            right.forEach(item => {
                rankData.push(item)
            })
        );

        // 返回数据
        return rankData
    })(Rdata);

    // 垃圾数据处理
    RankingData = RankingData.concat(Rubbish);
    return RankingData
}
/* 封装对外屏蔽 [ 数据库类型、内部关键字、数据结构 ] 的数据库操作对象 */
// @params：dbmodel 数据库模型 [必填]
var DataHandle = function(dbmodel) {
    // 数据库模型
    this.dbmodel = dbmodel;
    // 数据库 数据储存
    this.dbData = [];
    // 错误名称
    this.ErrorName = '';
    // 错误信息
    this.ErrorMessage = '';
    // 自动更新开关
    this.updata = true;
    // 关键字结构
    this.dbKeyWord = '';
    // 数据库视图变量
    this.FindView = {};

    // 数据检验
    this.Error(dbmodel, 'Function')
}


/* 数据校验 返回错误 */
// @params 1：check 要检验的数据 [必填]
// @params 2：type 数据类型 [选填]
// @params [check]：dbmodel --- 数据库模型 Function
// @params [check]：findWord --- 查询关键字 Object
// @params [check]：saveWord --- 保存关键字 Object
// @params [check]：updataWord --- 更新关键字 Object
// @params [check]：removeWord --- 删除关键字 Object
// @params [check]：db --- 原始数据库关键字 Object
// @params [check]：Fdb --- 原始数据库查询关键字 Object
// @params [check]：options --- 筛选的条件 Object
// @params [check]：processValue --- 处理原始数据 Object
// @params [check]：useWord --- 读取关键字 Array
// @params [check]：getData --- 查询数据 Array
// @params [check]：updata --- 更新开关 Boolean
// @params [check]：keyWord --- 关键字 String
// @params [check]：Academics --- 关键字 String
// @params [check]：Films --- 关键字 String
// @params [check]：ImageText --- 关键字 String
// @params [check]：Videos --- 关键字 String
// @params [check]：Users --- 关键字 String
// @params [check]：Scroll --- 关键字 String
// @params [check]：process --- 处理关键字 String
// @params [check]：error --- 错误信息 Error
DataHandle.prototype.Error = function(check, type) {
    // 1. 清空 错误名称变量 错误信息变量
    this.ErrorName = '';
    this.ErrorMessage = '';
    // 2. 获取数据类型
    let NewType = '';
    arguments.length && (
        NewType = Object.prototype.toString.call(check),
        type = '[object ' + type + ']'
    );
    // 3. 检验数据类型
    (arguments.length === 2) && !(NewType === type) && (
        this.ErrorName = 'type',
        this.ErrorMessage = '数据类型必须是' + type
    );
    // 4. 数据存在性检测
    // 一个参数：关键字
    (arguments.length === 1) && (check instanceof String) && (
        this.ErrorName = 'keyWord',
        this.ErrorMessage = '关键字错误或不存在'
    );
    // 一个参数：数据库模型
    (arguments.length === 1) && (check instanceof Function) && (
        this.ErrorName = 'model',
        this.ErrorMessage = '数据库模型不存在'
    );
    // 一个参数：系统报错 等其他错误
    (arguments.length === 1) && (check instanceof Error) && (
        this.ErrorName = 'other',
        this.ErrorMessage = '数据错误或者程序执行错误'
    );
    // 5. 传参错误检测
    (arguments.length === 0) && (
        this.ErrorName = 'params',
        this.ErrorMessage = '请正确传参'
    );
    if (arguments.length >= 1) {
        switch (NewType) {
            case "[object Function]":
                break;
            case "[object Object]":
                break;
            case "[object String]":
                break;
            case "[object Boolean]":
                break;
            case "[object Array]":
                break;
            default:
                this.ErrorName = 'params';
                this.ErrorMessage = '请正确传参';
                break
        }
    };
    if (arguments.length === 2) {
        switch (typeof(type)) {
            case "string":
                break;
            default:
                this.ErrorName = 'params';
                this.ErrorMessage = '请正确传参';
                break
        }
    };
    // 6. 抛出错误信息
    if (this.ErrorName && this.ErrorMessage) {
        throw this.ErrorMessage
    }
}


/* 数据库 数据读取 */
// @params 1：findWord 查询关键字 [必填]
// @params 2：useWord 读取关键字 [选填]
// @params 3：options 筛选关键字 [选填]
// @params 4 [options 扩展]：FindView 查询视图 [选填]
DataHandle.prototype.Find = async function(findWord, useWord, options) {
    // 数据检验
    this.Error(findWord, 'Object');
    useWord && this.Error(useWord, 'Array');
    options && this.Error(options, 'Object');
    // 提取查询关键字结构
    let FindWords = {};
    findWord && Object.keys(findWord).forEach(item => {
        this.KeyWord(item);
        FindWords[this.dbKeyWord] = findWord[item]
    });
    // 筛选关键字：sort 关键字结构
    options && options.sort && (
        this.KeyWord(options.sort),
        options.sort = this.dbKeyWord
    );
    // 获取参数长度
    let paramsLength = arguments.length;
    // 查询数据
    // 同步函数以便于返回结果
    this.dbData = await this.FindDB(FindWords, this.dbmodel, options)

    .catch(
        // 捕获错误
        function(error) {
            this.Error(error)
        });

    // 返回数据
    if (paramsLength === 1) {
        return this.dbData
    };
    // 读取数据 返回对象
    if (paramsLength >= 2) {
        // 返回生成的对象数组
        return this.Get(this.dbData, useWord)
    }
}


/* 数据库 数据获取 */
// @params 1：getData 查询数据 [必填]
// @params 2：useWord 读取关键字 [必填]
// @notice [getData]：查询数据必须是 原生 的数据库数据
DataHandle.prototype.Get = function(getData, useWord) {
    // 数据检验
    this.Error(getData, 'Array');
    this.Error(useWord, 'Array');
    // 读取数据 返回对象
    let useData = [];
    getData.forEach((result, index) => {
        useData[index] = {};
        useWord.forEach(item => {
            // 提取读取关键字结构 返回数据
            let NewData = this.ProcessDB(item, result);
            (NewData === 0 || NewData) && (
                useData[index][item] = NewData
            )
        })
    });
    // 返回生成的对象数组
    return useData
}


/* 数据库 文档总数量获取 */
// @params：findWord 查询关键字 [必填]
DataHandle.prototype.Count = async function(findWord) {
    // 数据检验
    this.Error(findWord, 'Object');
    // 提取查询关键字结构
    let FindWords = {};
    findWord && Object.keys(findWord).forEach(item => {
        this.KeyWord(item);
        FindWords[this.dbKeyWord] = findWord[item]
    });
    // 获取 文档总数量
    // 同步函数以便于返回结果
    this.dbData = await this.CountDB(FindWords, this.dbmodel)

    .catch(
        // 捕获错误
        function(error) {
            this.Error(error)
        });

    return this.dbData
}


/* 数据库 数据保存 */
// @params：saveWord 保存关键字 [必填]
DataHandle.prototype.Save = async function(saveWord) {
    // 数据检验
    this.Error(saveWord, 'Object');
    // 保存数据
    // 同步函数以便于返回结果
    this.dbData = await this.SaveDB(saveWord, this.dbmodel)

    .catch(
        // 捕获错误
        function(error) {
            this.Error(error)
        });

    // 返回数据
    return this.dbData
}


/* 数据库 数据更新 */
// @params 1：findWord 查询关键字 [必填]
// @params 2：updataWord 更新关键字 [必填]
// @params 3：updata 自动更新开关 [选填]
DataHandle.prototype.Updata = async function(findWord, updataWord, updata) {
    // 数据检验
    this.Error(findWord, 'Object');
    this.Error(updataWord, 'Object');
    updata && this.Error(updata, 'Boolean');
    // 自动更新开关
    updata && (this.updata = updata);
    // 更新数据
    // 同步函数以便于返回结果
    this.dbData = await this.UpdataDB(findWord, updataWord, this.dbmodel)

    .catch(
        // 捕获错误
        function(error) {
            this.Error(error)
        });

    // 返回数据
    return this.dbData
}


/* 数据库 数据删除 */
// @params：removeWord 删除关键字 [必填]
DataHandle.prototype.Remove = async function(removeWord) {
    // 数据检验
    this.Error(removeWord, 'Object');
    // 删除数据
    // 同步函数以便于返回结果
    this.dbData = await this.RemoveDB(removeWord, this.dbmodel)

    .catch(
        // 捕获错误
        function(error) {
            this.Error(error)
        });

    // 返回数据
    return this.dbData
}


/* 数据库 关键字生成 */
// @params：keyWord 关键字 [必填]
DataHandle.prototype.KeyWord = function(keyWord) {
    // 数据校验
    this.Error(keyWord, 'String');
    // 关键字生成
    switch (this.dbmodel.modelName) {
        case 'Academics':
            this.Academics(keyWord);
            break;
        case 'Films':
            this.Films(keyWord);
            break;
        case 'ImageText':
            this.ImageText(keyWord);
            break;
        case 'Videos':
            this.Videos(keyWord);
            break;
        case 'Users':
            this.Users(keyWord);
            break;
        case 'Scroll':
            this.Scroll(keyWord);
            break;
        default:
            this.Error(this.dbmodel);
            break
    }
}


/* 学术室数据库 关键字生成 */
// @params：Academics 关键字 [必填]
DataHandle.prototype.Academics = function(Academics) {
    // 数据校验
    this.Error(Academics, 'String');
    // 学术室数据库模型
    switch (Academics) {
        case 'Status':
            this.dbKeyWord = 'Academics.Status';
            break;
        case 'ID':
            this.dbKeyWord = 'Academics.Message.ID';
            break;
        case 'ChineseName':
            this.dbKeyWord = 'Academics.Message.Name.ChineseName';
            break;
        case 'EnglishName':
            this.dbKeyWord = 'Academics.Message.Name.EnglishName';
            break;
        case 'Presenter':
            this.dbKeyWord = 'Academics.Message.Presenter';
            break;
        case 'Time':
            this.dbKeyWord = 'Academics.Message.Time';
            break;
        case 'Country':
            this.dbKeyWord = 'Academics.Message.Country';
            break;
        case 'Area':
            this.dbKeyWord = 'Academics.Message.Area';
            break;
        case 'Production':
            this.dbKeyWord = 'Academics.Message.Production';
            break;
        case 'Explain':
            this.dbKeyWord = 'Academics.Message.Explain';
            break;
        case 'EditNumber':
            this.dbKeyWord = 'Academics.Message.EditNumber';
            break;
        case 'EditUsers':
            this.dbKeyWord = 'Academics.Message.EditUsers';
            break;
        case 'CaseName':
            this.dbKeyWord = 'Academics.Message.AcademicCase.CaseName';
            break;
        case 'SearchValue':
            this.dbKeyWord = 'Academics.Message.AcademicValue.SearchValue';
            break;
        case 'TagValue':
            this.dbKeyWord = 'Academics.Message.AcademicValue.TagValue';
            break;
        case 'ClickValue':
            this.dbKeyWord = 'Academics.Message.AcademicValue.ClickValue';
            break;
        case 'Ranking':
            this.dbKeyWord = 'Academics.Message.Ranking';
            break;
        case 'Symbol':
            this.dbKeyWord = 'Academics.Message.Symbol';
            break;
        case 'AcademicTag':
            this.dbKeyWord = 'Academics.Message.AcademicTag';
            break;
        default:
            this.Error(Academics);
            break
    }
}


/* 资料馆数据库 关键字生成 */
// @params：Films 关键字 [必填]
DataHandle.prototype.Films = function(Films) {
    // 数据校验
    this.Error(Films, 'String');
    // 资料馆数据库模型
    switch (Films) {
        case 'Status':
            this.dbKeyWord = 'Films.Status';
            break;
        case 'ID':
            this.dbKeyWord = 'Films.Message.ID';
            break;
        case 'ChineseName':
            this.dbKeyWord = 'Films.Message.Name.ChineseName';
            break;
        case 'EnglishName':
            this.dbKeyWord = 'Films.Message.Name.EnglishName';
            break;
        case 'Country':
            this.dbKeyWord = 'Films.Message.Country';
            break;
        case 'Area':
            this.dbKeyWord = 'Films.Message.Area';
            break;
        case 'Time':
            this.dbKeyWord = 'Films.Message.Time';
            break;
        case 'type':
            this.dbKeyWord = 'Films.Message.type';
            break;
        case 'Director':
            this.dbKeyWord = 'Films.Message.Director';
            break;
        case 'Writter':
            this.dbKeyWord = 'Films.Message.Writter';
            break;
        case 'TheLocalBoxOffice':
            this.dbKeyWord = 'Films.Message.BoxOffice.TheLocalBoxOffice';
            break;
        case 'ChinaBoxOffice':
            this.dbKeyWord = 'Films.Message.BoxOffice.ChinaBoxOffice';
            break;
        case 'WorldWideBoxOffice':
            this.dbKeyWord = 'Films.Message.BoxOffice.WorldWideBoxOffice';
            break;
        case 'IMDB':
            this.dbKeyWord = 'Films.Message.Grade.IMDB';
            break;
        case 'TOMATOMETER':
            this.dbKeyWord = 'Films.Message.Grade.ROTTENTOMATOES.TOMATOMETER';
            break;
        case 'ReviewsCounted':
            this.dbKeyWord = 'Films.Message.Grade.ROTTENTOMATOES.ReviewsCounted';
            break;
        case 'AUDIENCESCORE':
            this.dbKeyWord = 'Films.Message.Grade.ROTTENTOMATOES.AUDIENCESCORE';
            break;
        case 'UserRatings':
            this.dbKeyWord = 'Films.Message.Grade.ROTTENTOMATOES.UserRatings';
            break;
        case 'MetaScore':
            this.dbKeyWord = 'Films.Message.Grade.MTC.MetaScore';
            break;
        case 'UserScore':
            this.dbKeyWord = 'Films.Message.Grade.MTC.UserScore';
            break;
        case 'DouBan':
            this.dbKeyWord = 'Films.Message.Grade.DouBan';
            break;
        case 'Mtime':
            this.dbKeyWord = 'Films.Message.Grade.Mtime';
            break;
        case 'Plot':
            this.dbKeyWord = 'Films.Message.Plot';
            break;
        case 'Starring':
            this.dbKeyWord = 'Films.Message.Performers.Cast.Starring';
            break;
        case 'Protagonist':
            this.dbKeyWord = 'Films.Message.Performers.Cast.Protagonist';
            break;
        case 'GuestAppearance':
            this.dbKeyWord = 'Films.Message.Performers.Cast.GuestAppearance';
            break;
        case 'SpecialSuggestion':
            this.dbKeyWord = 'Films.Message.Performers.Cast.SpecialSuggestion';
            break;
        case 'Role':
            this.dbKeyWord = 'Films.Message.Performers.Cast.Actor.Role';
            break;
        case 'Producer':
            this.dbKeyWord = 'Films.Message.Performers.Staff.Producer';
            break;
        case 'Present':
            this.dbKeyWord = 'Films.Message.Performers.Staff.Present';
            break;
        case 'ProductionDesigner':
            this.dbKeyWord = 'Films.Message.Performers.Staff.ProductionDesigner';
            break;
        case 'ArtDirector':
            this.dbKeyWord = 'Films.Message.Performers.Staff.ArtDirector';
            break;
        case 'DirectorOfClothing':
            this.dbKeyWord = 'Films.Message.Performers.Staff.DirectorOfClothing';
            break;
        case 'DirectorOfPhotography':
            this.dbKeyWord = 'Films.Message.Performers.Staff.DirectorOfPhotography';
            break;
        case 'Gaffer':
            this.dbKeyWord = 'Films.Message.Performers.Staff.Gaffer';
            break;
        case 'FightDirector':
            this.dbKeyWord = 'Films.Message.Performers.Staff.FightDirector';
            break;
        case 'OriginalMusic':
            this.dbKeyWord = 'Films.Message.Performers.Staff.OriginalMusic';
            break;
        case 'OriginalStory':
            this.dbKeyWord = 'Films.Message.Performers.Staff.OriginalStory';
            break;
        case 'ScriptGirl':
            this.dbKeyWord = 'Films.Message.Performers.Staff.ScriptGirl';
            break;
        case 'Montage':
            this.dbKeyWord = 'Films.Message.Performers.Staff.Montage';
            break;
        case 'StageManager':
            this.dbKeyWord = 'Films.Message.Performers.Staff.StageManager';
            break;
        case 'Property':
            this.dbKeyWord = 'Films.Message.Performers.Staff.Property';
            break;
        case 'MakeUp':
            this.dbKeyWord = 'Films.Message.Performers.Staff.MakeUp';
            break;
        case 'ProductionSoundMixers':
            this.dbKeyWord = 'Films.Message.Performers.Staff.ProductionSoundMixers';
            break;
        case 'HairDresser':
            this.dbKeyWord = 'Films.Message.Performers.Staff.HairDresser';
            break;
        case 'VisualEffect':
            this.dbKeyWord = 'Films.Message.Performers.Staff.VisualEffect';
            break;
        case 'Corporation':
            this.dbKeyWord = 'Films.Message.Corporation';
            break;
        case 'Achievement':
            this.dbKeyWord = 'Films.Message.Achievement';
            break;
        case 'Notes':
            this.dbKeyWord = 'Films.Message.Notes';
            break;
        case 'EditNumber':
            this.dbKeyWord = 'Films.Message.EditNumber';
            break;
        case 'EditUsers':
            this.dbKeyWord = 'Films.Message.EditUsers';
            break;
        case 'SearchValue':
            this.dbKeyWord = 'Films.Message.FilmsValue.SearchValue';
            break;
        case 'TagValue':
            this.dbKeyWord = 'Films.Message.FilmsValue.TagValue';
            break;
        case 'WatchValue':
            this.dbKeyWord = 'Films.Message.FilmsValue.WatchValue';
            break;
        case 'Ranking':
            this.dbKeyWord = 'Films.Message.Ranking';
            break;
        case 'Symbol':
            this.dbKeyWord = 'Films.Message.Symbol';
            break;
        case 'FilmsTag':
            this.dbKeyWord = 'Films.Message.FilmsTag';
            break;
        default:
            this.Error(Films);
            break
    }
}


/* 图文课程数据库 关键字生成 */
// @params：ImageText 关键字 [必填]
DataHandle.prototype.ImageText = function(ImageText) {
    // 数据校验
    this.Error(ImageText, 'String');
    // 图文课程数据库模型
    switch (ImageText) {
        case 'Status':
            this.dbKeyWord = 'ImageText.Status';
            break;
        case 'ID':
            this.dbKeyWord = 'ImageText.Message.ID';
            break;
        case 'Name':
            this.dbKeyWord = 'ImageText.Message.Name';
            break;
        case 'Author':
            this.dbKeyWord = 'ImageText.Message.Author';
            break;
        case 'createTime':
            this.dbKeyWord = 'ImageText.Message.Time.createTime';
            break;
        case 'updateTime':
            this.dbKeyWord = 'ImageText.Message.Time.updateTime';
            break;
        case 'Content':
            this.dbKeyWord = 'ImageText.Message.Content';
            break;
        case 'Production':
            this.dbKeyWord = 'ImageText.Message.Production';
            break;
        case 'Catalogue':
            this.dbKeyWord = 'ImageText.Message.Catalogue';
            break;
        case 'Partition':
            this.dbKeyWord = 'ImageText.Message.Partition';
            break;
        case 'CSearchValue':
            this.dbKeyWord = 'ImageText.Message.CourseValue.SearchValue';
            break;
        case 'CTagValue':
            this.dbKeyWord = 'ImageText.Message.CourseValue.TagValue';
            break;
        case 'ClearningValue':
            this.dbKeyWord = 'ImageText.Message.CourseValue.learningValue';
            break;
        case 'OSearchValue':
            this.dbKeyWord = 'ImageText.Message.OtherValue.SearchValue';
            break;
        case 'OTagValue':
            this.dbKeyWord = 'ImageText.Message.OtherValue.TagValue';
            break;
        case 'OlearningValue':
            this.dbKeyWord = 'ImageText.Message.OtherValue.learningValue';
            break;
        case 'Ranking':
            this.dbKeyWord = 'ImageText.Message.Ranking';
            break;
        case 'Symbol':
            this.dbKeyWord = 'ImageText.Message.Symbol';
            break;
        case 'Marker':
            this.dbKeyWord = 'ImageText.Message.ImageTextTag.Marker';
            break;
        case 'Comment':
            this.dbKeyWord = 'ImageText.Message.Comment';
            break;
        default:
            this.Error(ImageText);
            break
    }
}


/* 视频课程数据库 关键字生成 */
// @params：Videos 关键字 [必填]
DataHandle.prototype.Videos = function(Videos) {
    // 数据校验
    this.Error(Videos, 'String');
    // 视频课程数据库模型
    switch (Videos) {
        case 'Status':
            this.dbKeyWord = 'Videos.Status';
            break;
        case 'ID':
            this.dbKeyWord = 'Videos.Message.ID';
            break;
        case 'Name':
            this.dbKeyWord = 'Videos.Message.Name';
            break;
        case 'Author':
            this.dbKeyWord = 'Videos.Message.Author';
            break;
        case 'createTime':
            this.dbKeyWord = 'Videos.Message.Time.createTime';
            break;
        case 'updateTime':
            this.dbKeyWord = 'Videos.Message.Time.updateTime';
            break;
        case 'Content':
            this.dbKeyWord = 'Videos.Message.Content';
            break;
        case 'Production':
            this.dbKeyWord = 'Videos.Message.Production';
            break;
        case 'Catalogue':
            this.dbKeyWord = 'Videos.Message.Catalogue';
            break;
        case 'Partition':
            this.dbKeyWord = 'Videos.Message.Partition';
            break;
        case 'CSearchValue':
            this.dbKeyWord = 'Videos.Message.CourseValue.SearchValue';
            break;
        case 'CTagValue':
            this.dbKeyWord = 'Videos.Message.CourseValue.TagValue';
            break;
        case 'ClearningValue':
            this.dbKeyWord = 'Videos.Message.CourseValue.learningValue';
            break;
        case 'OSearchValue':
            this.dbKeyWord = 'Videos.Message.OtherValue.SearchValue';
            break;
        case 'OTagValue':
            this.dbKeyWord = 'Videos.Message.OtherValue.TagValue';
            break;
        case 'OlearningValue':
            this.dbKeyWord = 'Videos.Message.OtherValue.learningValue';
            break;
        case 'Ranking':
            this.dbKeyWord = 'Videos.Message.Ranking';
            break;
        case 'Symbol':
            this.dbKeyWord = 'Videos.Message.Symbol';
            break;
        case 'ScheduleTag':
            this.dbKeyWord = 'Videos.Message.VideoTag.ScheduleTag';
            break;
        case 'Marker':
            this.dbKeyWord = 'Videos.Message.VideoTag.Marker';
            break;
        case 'Comment':
            this.dbKeyWord = 'Videos.Message.Comment';
            break;
        default:
            this.Error(Videos);
            break
    }
}


/* 用户数据库 关键字生成 */
// @params：Users 关键字 [必填]
DataHandle.prototype.Users = function(Users) {
    // 数据校验
    this.Error(Users, 'String');
    // 用户数据库模型
    switch (Users) {
        case 'Status':
            this.dbKeyWord = 'Users.Status';
            break;
        case 'ID':
            this.dbKeyWord = 'Users.Message.ID';
            break;
        case 'NickName':
            this.dbKeyWord = 'Users.Message.NickName';
            break;
        case 'Gender':
            this.dbKeyWord = 'Users.Message.Gender';
            break;
        case 'Age':
            this.dbKeyWord = 'Users.Message.Age';
            break;
        case 'Birthdate':
            this.dbKeyWord = 'Users.Message.Birthdate';
            break;
        case 'NativePlace':
            this.dbKeyWord = 'Users.Message.NativePlace';
            break;
        case 'Hobby':
            this.dbKeyWord = 'Users.Message.Hobby';
            break;
        case 'Introduction':
            this.dbKeyWord = 'Users.Message.Introduction';
            break;
        case 'Account':
            this.dbKeyWord = 'Users.Message.Account';
            break;
        case 'Password':
            this.dbKeyWord = 'Users.Message.Password';
            break;
        case 'Email':
            this.dbKeyWord = 'Users.Message.Email';
            break;
        case 'ContributionValue':
            this.dbKeyWord = 'Users.Message.ContributionValue';
            break;
        case 'Ranking':
            this.dbKeyWord = 'Users.Message.Ranking';
            break;
        case 'Symbol':
            this.dbKeyWord = 'Users.Message.Symbol';
            break;
        case 'MonthContributionValue':
            this.dbKeyWord = 'Users.Message.MonthContributionValue';
            break;
        case 'DateContributionValue':
            this.dbKeyWord = 'Users.Message.DateContributionValue';
            break;
        case 'FilmsContributionValue':
            this.dbKeyWord = 'Users.Message.FilmsContributionValue';
            break;
        case 'FilmsEditValue':
            this.dbKeyWord = 'Users.Message.FilmsEditValue';
            break;
        case 'AcademicContributionValue':
            this.dbKeyWord = 'Users.Message.AcademicContributionValue';
            break;
        case 'AcademicEditValue':
            this.dbKeyWord = 'Users.Message.AcademicEditValue';
            break;
        case 'CourseContributionValue':
            this.dbKeyWord = 'Users.Message.CourseContributionValue';
            break;
        case 'CourseEditValue':
            this.dbKeyWord = 'Users.Message.CourseEditValue';
            break;
        case 'OtherContributionValue':
            this.dbKeyWord = 'Users.Message.OtherContributionValue';
            break;
        case 'OtherEditValue':
            this.dbKeyWord = 'Users.Message.OtherEditValue';
            break;
        default:
            this.Error(Users);
            break
    }
}


/* 滚动栏数据库 关键字生成 */
// @params：Scroll 关键字 [必填]
DataHandle.prototype.Scroll = function(Scroll) {
    // 数据校验
    this.Error(Scroll, 'String');
    // 滚动栏数据库模型
    switch (Scroll) {
        case 'Status':
            this.dbKeyWord = 'Scroll.Status';
            break;
        case 'ID':
            this.dbKeyWord = 'Scroll.Message.ID';
            break;
        case 'Name':
            this.dbKeyWord = 'Scroll.Message.Name';
            break;
        case 'link':
            this.dbKeyWord = 'Scroll.Message.link';
            break;
        case 'notes':
            this.dbKeyWord = 'Scroll.Message.notes';
            break;
        default:
            this.Error(Scroll);
            break
    }
}


/* 数据库 原始保存数据 封装方法 */
// @params 1：db 保存的数据 [必填]
// @params 2：dbmodel 对应的数据模型 [必填]
DataHandle.prototype.SaveDB = function(db, dbmodel) {
    // 数据检验
    this.Error(db, 'Object');
    this.Error(dbmodel, 'Function');
    // 处理 异步函数 save 的 Promise 函数
    return new Promise(function(resolve, reject) {
        new dbmodel(db).save(function(error, data) {
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


/* 数据库 原始查询数据 封装方法 */
// @params 1：db 查询的数据 [必填]
// @params 2：dbmodel 对应的数据模型 [必填]
// @params 3：options 筛选的条件 [选填]
DataHandle.prototype.FindDB = function(db, dbmodel, options) {
    // 数据检验
    this.Error(db, 'Object');
    this.Error(dbmodel, 'Function');
    options && this.Error(options, 'Object');
    // 处理 异步函数 find 的 Promise 函数
    return new Promise(function(resolve, reject) {
        dbmodel.find(db, this.FindView, options, function(error, data) {
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


/* 数据库 原始更新数据 封装方法 */
// @params 1：Fdb 查询的数据 [必填]
// @params 2：db 更新的数据 [必填]
// @params 3：dbmodel 对应的数据模型 [必填]
DataHandle.prototype.UpdataDB = function(Fdb, db, dbmodel) {
    // 数据检验
    this.Error(Fdb, 'Object');
    this.Error(db, 'Object');
    this.Error(dbmodel, 'Function');
    // 处理 异步函数 find 的 Promise 函数
    return new Promise(function(resolve, reject) {
        // upsert: true; 数据不存在 保存数据
        dbmodel.update(Fdb, db, { upsert: this.updata }, function(error, data) {
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


/* 数据库 原始删除数据 封装方法 */
// @params 1：db 删除的数据 [必填]
// @params 2：dbmodel 对应的数据模型 [必填]
DataHandle.prototype.RemoveDB = function(db, dbmodel) {
    // 数据检验
    this.Error(db, 'Object');
    this.Error(dbmodel, 'Function');
    // 处理 异步函数 find 的 Promise 函数
    return new Promise(function(resolve, reject) {
        dbmodel.remove(db, function(error, data) {
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


/* 数据库 文档总数量 封装方法 */
// @params 1：db 查询的数据 [必填]
// @params 2：dbmodel 对应的数据模型 [必填]
DataHandle.prototype.CountDB = function(db, dbmodel) {
    // 数据检验
    this.Error(db, 'Object');
    this.Error(dbmodel, 'Function');
    // 处理 异步函数 find 的 Promise 函数
    return new Promise(function(resolve, reject) {
        dbmodel.count(db, function(error, data) {
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


/* 数据库 原始数据 再处理方法 */
// @params 1：process 处理关键字 [必填]
// @params 2：processValue 处理原始数据 [必填]
DataHandle.prototype.ProcessDB = function(process, processValue) {
    // 数据检验
    this.Error(process, 'String');
    this.Error(processValue, 'Object');
    // 获取处理关键字结构
    let dbProcess = '';
    let Value = '';
    if (this.dbKeyWord.endsWith(process)) {
        dbProcess = this.dbKeyWord
    } else {
        this.KeyWord(process);
        dbProcess = this.dbKeyWord;
    };
    // 设置关键字的原始值
    Value = eval('processValue.' + dbProcess);
    // 数据转换：Gender
    if (process === 'Gender') {
        switch (Value) {
            case 1:
                Value = '男性';
                break;
            case -1:
                Value = '女性';
                break;
            default:
                Value = '保密';
                break
        }
    };
    // 数据转换：Time
    if (process === 'Time') {
        switch (Value) {
            case '':
                Value = '';
                break;
            case undefined:
                Value = '';
                break;
            default:
                Value = Value.getFullYear() + '-' + (Value.getMonth() + 1) + '-' + Value.getDate();
                break
        }
    };
    // 数据转换：Symbol
    if (process === 'Symbol') {
        switch (Value) {
            case '无':
                Value = '';
                break;
            default:
                break
        }
    };
    // 数据转换：Director
    if (process === 'Director') {
        switch (Value[0]) {
            case '无':
                Value = [''];
                break;
            default:
                break
        }
    };
    // 返回数据
    return Value
}


// 模块暴露
module.exports = DataHandle
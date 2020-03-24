/* 封装对外屏蔽 [ 请求过程 ] 的前台数据请求对象 */
// @params：UsrData 用户参数 [必填]
// @params [UsrData]：pattern 请求方法 [选填]
// @params [UsrData]：content 请求数据 [选填]
// @params [UsrData]：url 请求地址 [必填]
// @params [UsrData]：tool 请求工具 [必填]
var DataRequest = function(UsrData) {
    // 用户传参
    UsrData && (this.UsrData = Object.assign({
        // 请求方法：默认 get
        pattern: 'get',
        // 请求数据
        content: {},
        // 请求地址
        url: '',
        // 请求工具：用户上传 或者 绑定this环境
        tool: this,
        // 数据传输格式：默认 json 格式
        type: { emulateJSON: true }
    }, UsrData));
    // 错误名称
    this.ErrorName = '';
    // 错误信息
    this.ErrorMessage = '';
    // 储存服务器 响应数据
    this.ResponseData = {};

    // 数据检验：兼容 this 指向改变
    UsrData && (this.Error(UsrData, 'Object') || (
        DataRequest.prototype.Error(UsrData, 'Object')
    ))
}


/* 数据校验 返回错误 */
// @params 1：detection 要检验的数据 [必填]
// @params 2：type 数据类型 [选填]
// @params [detection]：UsrData --- 用户参数 Object
// @params [detection]：vueData --- 用户参数 Object
// @params [detection]：VueGets --- 用户参数 Object
// @params [detection]：VuePosts --- 用户参数 Object
// @params [detection]：content --- 用户参数-请求数据 Object
// @params [detection]：url --- 用户参数-数据请求地址 String
// @params [detection]：pattern --- 用户参数-请求方法 String
// @params [detection]：tool --- 用户参数-数据请求工具 Function
DataRequest.prototype.Error = function(detection, type) {
    // 1. 清空 错误名称变量 错误信息变量
    this.ErrorName = '';
    this.ErrorMessage = '';
    // 2. 获取数据类型
    let NewType = '';
    arguments.length && (
        NewType = Object.prototype.toString.call(detection),
        type = '[object ' + type + ']'
    );
    // 3. 检验数据类型
    (arguments.length === 2) && !(NewType === type) && (
        this.ErrorName = 'type',
        this.ErrorMessage = '数据类型必须是' + type
    );
    // 4. 数据存在性检测
    // 一个参数：系统报错 等其他错误
    // 一个参数：数据库模型
    (arguments.length === 1) && (detection instanceof Function) && (
        this.ErrorName = 'tool',
        this.ErrorMessage = '数据请求工具错误'
    );
    (arguments.length === 1) && (detection instanceof Error) && (
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


/* vue 数据请求 方法 */
// @params：vueData 用户参数 [必填]
// @params [vueData]：pattern 请求方法 [选填]
// @params [vueData]：content 请求数据 [选填]
// @params [vueData]：url 请求地址 [必填]
// @params [vueData]：tool 请求工具 [必填]
DataRequest.prototype.Vue = async function(vueData) {
    // 参数检测
    !this.UsrData && !vueData && (this.Error(Error) || (
        DataRequest.prototype.Error(Error)
    ));
    // 数据检测
    vueData && (this.Error(vueData, 'Object') || (
        DataRequest.prototype.Error(vueData, 'Object')
    ));
    // 用户传参
    this.UsrData && (this.vueData = Object.assign({
        // 请求方法：默认 get
        pattern: 'get',
        // 请求数据
        content: {},
        // 请求地址
        url: '',
        // 请求工具：用户上传 或者 绑定this环境
        tool: this,
        // 数据传输格式：默认 json 格式
        type: { emulateJSON: true }
    }, this.UsrData));
    vueData && (this.vueData = Object.assign({
        // 请求方法：默认 get
        pattern: 'get',
        // 请求数据
        content: {},
        // 请求地址
        url: '',
        // 请求工具：用户上传 或者 绑定this环境
        tool: this,
        // 数据传输格式：默认 json 格式
        type: { emulateJSON: true }
    }, vueData));
    // 判断 请求方式
    switch (this.vueData.pattern) {
        case 'post':
            this.ResponseData = await DataRequest.prototype.VuePost({
                content: this.vueData.content,
                url: this.vueData.url,
                tool: this.vueData.tool,
                type: this.vueData.type
            });
            return this.ResponseData
        default:
            this.ResponseData = await DataRequest.prototype.VueGet({
                url: this.vueData.url,
                tool: this.vueData.tool
            });
            return this.ResponseData
    }
}


/* vue 数据请求 get 方法 */
// @params：VueGets 用户参数 [必填]
// @params [VueGets]：url 请求地址 [必填]
// @params [VueGets]：tool 请求工具 [必填]
DataRequest.prototype.VueGet = async function(VueGets) {
    // 参数检测
    !this.UsrData && !VueGets && (this.Error(Error) || (
        DataRequest.prototype.Error(Error)
    ));
    // 数据检测
    VueGets && (this.Error(VueGets, 'Object') || (
        DataRequest.prototype.Error(VueGets, 'Object')
    ));
    VueGets && (this.Error(VueGets.url, 'String') || (
        DataRequest.prototype.Error(VueGets.url, 'String')
    ));
    VueGets && (this.Error(VueGets.tool, 'Object') || (
        DataRequest.prototype.Error(VueGets.tool, 'Object')
    ));
    // 用户传参
    this.UsrData && (this.VueGets = Object.assign({
        // 请求地址
        url: '',
        // 请求工具：用户上传 或者 绑定this环境
        tool: this
    }, this.UsrData));
    VueGets && (this.VueGets = Object.assign({
        // 请求地址
        url: '',
        // 请求工具：用户上传 或者 绑定this环境
        tool: this
    }, VueGets));
    // 工具环境检测
    !(this.VueGets.tool.$http) && this.Error(this.VueGets.tool);
    // 发送数据请求 返回结果
    this.ResponseData = await this.VueGets.tool.$http.get(this.VueGets.url)

    .catch(function(error) {
        DataRequest.prototype.Error(error)
    });

    // 返回数据
    return this.ResponseData.body
}


/* vue 数据请求 post 方法 */
// @params：VuePosts 用户参数 [必填]
// @params [VuePosts]：content 请求数据 [必填]
// @params [VuePosts]：url 请求地址 [必填]
// @params [VuePosts]：tool 请求工具 [必填]
DataRequest.prototype.VuePost = async function(VuePosts) {
    // 参数检测
    !this.UsrData && !VuePosts && (this.Error(Error) || (
        DataRequest.prototype.Error(Error)
    ));
    // 数据检测
    VuePosts && (this.Error(VuePosts, 'Object') || (
        DataRequest.prototype.Error(VuePosts, 'Object')
    ));
    VuePosts && (this.Error(VuePosts.content, 'Object') || (
        DataRequest.prototype.Error(VuePosts.content, 'Object')
    ));
    VuePosts && (this.Error(VuePosts.url, 'String') || (
        DataRequest.prototype.Error(VuePosts.url, 'String')
    ));
    VuePosts && (this.Error(VuePosts.tool, 'Object') || (
        DataRequest.prototype.Error(VuePosts.tool, 'Object')
    ));
    VuePosts && (this.Error(VuePosts.type, 'Object') || (
        DataRequest.prototype.Error(VuePosts.type, 'Object')
    ));
    // 用户传参
    this.UsrData && (this.VuePosts = Object.assign({
        // 请求数据
        content: {},
        // 请求地址
        url: '',
        // 请求工具：用户上传 或者 绑定this环境
        tool: this,
        // 数据传输格式：默认 json 格式
        type: { emulateJSON: true }
    }, this.UsrData));
    VuePosts && (this.VuePosts = Object.assign({
        // 请求数据
        content: {},
        // 请求地址
        url: '',
        // 请求工具：用户上传 或者 绑定this环境
        tool: this,
        // 数据传输格式：默认 json 格式
        type: { emulateJSON: true }
    }, VuePosts));
    // 工具环境检测
    !(this.VuePosts.tool.$http) && this.Error(this.VuePosts.tool);
    // 发送数据请求 返回结果
    this.ResponseData = await this.VuePosts.tool.$http.post(
        this.VuePosts.url,
        this.VuePosts.content,
        this.VuePosts.type
    )

    .catch(function(error) {
        DataRequest.prototype.Error(error)
    });

    // 返回数据
    return this.ResponseData.body
}


// 模块曝光
module.exports = DataRequest
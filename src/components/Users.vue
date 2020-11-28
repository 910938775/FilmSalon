<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Users-root">

        <!-- 前台分页区 用户信息组件 用户登录外部容器 -->
        <!-- 表单体系所在的父元素加上 class="layui-form" -->
        <div class="UsersLogin layui-form">
            <!-- 前台分页区 用户信息组件 表单容器 -->
            <form class="layui-form layui-form-pane" lay-filter="FS_login">
                <!-- 前台分页区 用户信息组件 标题容器 -->
                <div class="UsersLoginTitle">登 &nbsp;&nbsp;&nbsp;&nbsp; 录</div>

                <!-- 前台分页区 用户信息组件 错误信息提示容器 -->
                <div class="LErrorMessage">请正确填写账号与密码</div>

                <!-- 前台分页区 用户信息组件 用户名密码容器 -->
                <div class="LUserNamePassword">
                    <div class="layui-form-item">
                        <i class="layui-icon">&#xe612;</i>
                        <input type="text" name="Account" required lay-verify="AccountVerify" lay-reqText="账号不能为空" placeholder="用户名、手机号或邮箱" title="填写账号" autocomplete="off" class="layui-input" />
                    </div>
                    <div class="layui-form-item">
                        <i class="layui-icon">&#xe673;</i>
                        <input type="password" name="Password" required lay-verify="PasswordVerify" lay-reqText="密码不能为空" placeholder="密码" title="设置密码" autocomplete="off" class="layui-input" />
                    </div>
                </div>

                <!-- 前台分页区 用户信息组件 额外选项容器 -->
                <div class="LExtraOptions">
                    <div class="Remember">
                        <input type="checkbox" name="remember" title="记住我" lay-skin="primary" checked lay-filter="remember" />
                    </div>
                    <router-link tag="span" to="">注册</router-link>
                    <router-link tag="span" to="">遇到问题?</router-link>
                </div>

                <!-- 前台分页区 用户信息组件 登录按钮容器 -->
                <div class="LoginButton">
                    <div class="layui-form-item">
                        <button class="layui-btn" lay-submit lay-filter="user_login">登录</button>
                        <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                    </div>
                </div>
            </form>
        </div>


        <!-- 前台分页区 用户信息组件 用户信息容器 -->
        <div class="UserInfo">
            <!-- 前台分页区 用户信息组件 标题容器 -->
            <div class="UserInfoTitle">
                <router-link tag="i" to="" title="进入我的中心" class="layui-icon">&#xe770;</router-link>
                <span>个人中心</span>
            </div>

            <!-- 前台分页区 用户信息组件 头像容器 -->
            <div class="HeadPortrait">
                <!-- 前台分页区 用户信息组件 头像 -->
                <div class="HeadImage" title="我的头像">
                    <img :src="this.MyHeadPortrait" />
                </div>
            </div>

            <!-- 前台分页区 用户信息组件 昵称账户名容器 -->
            <div class="NickNameUser">
                <!-- 前台分页区 用户信息组件 昵称容器 -->
                <div class="NickNameContainer">
                    <!-- 前台分页区 用户信息组件 昵称 -->
                    <span class="NickNameTitle">昵称</span>
                    <!-- 前台分页区 用户信息组件 昵称内容 -->
                    <span class="NickNameContent">{{ this.NickName }}</span>
                </div>

                <!-- 前台分页区 用户信息组件 账户名容器 -->
                <div class="UserNameContainer">
                    <!-- 前台分页区 用户信息组件 账户名 -->
                    <span class="UserNameTitle">账户名</span>
                    <!-- 前台分页区 用户信息组件 账户名内容 -->
                    <span class="UserNameContent">{{ this.Account }}</span>
                </div>
            </div>

            <!-- 前台分页区 用户信息组件 性别年龄容器 -->
            <div class="GenderAge">
                <!-- 前台分页区 用户信息组件 性别容器 -->
                <div class="GenderContainer">
                    <!-- 前台分页区 用户信息组件 性别 -->
                    <span class="GenderTitle">性别</span>
                    <!-- 前台分页区 用户信息组件 性别内容 -->
                    <span class="GenderContent">{{ this.Gender }}</span>
                </div>

                <!-- 前台分页区 用户信息组件 年龄容器 -->
                <div class="AgeContainer">
                    <!-- 前台分页区 用户信息组件 年龄 -->
                    <span class="AgeTitle">年龄</span>
                    <!-- 前台分页区 用户信息组件 年龄内容 -->
                    <span class="AgeContent">{{ this.Age }}</span>
                </div>
            </div>

            <!-- 前台分页区 用户信息组件 国家地区容器 -->
            <div class="CountryArea">
                <!-- 前台分页区 用户信息组件 国家地区 -->
                <span class="CountryAreaTitle">国家地区</span>
                <!-- 前台分页区 用户信息组件 国家地区内容 -->
                <span class="CountryAreaContent">{{ this.NativePlace }}</span>
            </div>

            <!-- 前台分页区 用户信息组件 贡献值容器 -->
            <div class="ContributionValue">
                <table class="layui-table" lay-size="sm" lay-skin="line row">
                    <thead>
                        <tr>
                            <th>总贡献榜</th>
                            <th>月贡献榜</th>
                            <th>日贡献榜</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ this.ContributionValue }}</td>
                            <td>{{ this.MonthContributionValue }}</td>
                            <td>{{ this.DateContributionValue }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<!-- 组件实例接口区域 -->
<script>
// 导入 mint-ui 消息提示 组件
import { Toast } from 'mint-ui';
// 导入 数据请求 模块
import DataRequest from '../../controllers/DataRequest.js'


// 接口区域
export default {
    // 数据 接口
    data() {
        return {
            // 前台分页区 用户信息组件 用户登录外部容器 登录 绝对地址
            UserLogin: '/login/',
            // 前台分页区 用户信息组件 用户信息容器 身份验证 绝对地址
            Verification: '/verify/',
            // 前台分页区 用户信息组件 用户信息容器 头像地址
            MyHeadPortrait: '',
            // 前台分页区 用户信息组件 用户信息容器 昵称
            NickName: '',
            // 前台分页区 用户信息组件 用户信息容器 账户名
            Account: '',
            // 前台分页区 用户信息组件 用户信息容器 性别
            Gender: '',
            // 前台分页区 用户信息组件 用户信息容器 年龄
            Age: '',
            // 前台分页区 用户信息组件 用户信息容器 国家地区
            NativePlace: '',
            // 前台分页区 用户信息组件 用户信息容器 总贡献榜
            ContributionValue: '',
            // 前台分页区 用户信息组件 用户信息容器 月贡献榜
            MonthContributionValue: '',
            // 前台分页区 用户信息组件 用户信息容器 日贡献榜
            DateContributionValue: ''
        }
    },
    // 方法 接口
    methods: {
        // 向服务端请求身份验证方法
        async Authentication() {
            // 封装 请求数据 对象
            let getData = {
                url: this.Verification,
                tool: this,
                pattern: 'post'
            };
            // 实例化请求对象
            let VueOB = new DataRequest();
            // 发起数据请求
            let result = await VueOB.Vue(getData);
            // 获取 用户登录栏
            let UsersLogin = document.getElementsByClassName('UsersLogin')[0];
            // 获取 用户个人中心栏
            let UserInfo = document.getElementsByClassName('UserInfo')[0];
            // 1. 用户身份信息有效：数据 获取成功
            (result.status === 0) && (
                // 隐藏 用户登录栏
                UsersLogin.style.display = 'none',
                // 显示 用户个人中心栏
                UserInfo.style.display = 'flex',
                // 保存 相应的数据
                this.MyHeadPortrait = result.content.MyHeadPortrait,
                this.NickName = result.content.NickName,
                this.Account = result.content.Account,
                this.Gender = result.content.Gender,
                this.Age = result.content.Age,
                this.NativePlace = result.content.NativePlace,
                this.ContributionValue = result.content.ContributionValue,
                this.MonthContributionValue = result.content.MonthContributionValue,
                this.DateContributionValue = result.content.DateContributionValue
            );

            // 2. 用户身份信息失效
            (result.status === 2) && (
                // 隐藏 用户个人中心栏
                UserInfo.style.display = 'none',
                // 显示 用户登录栏
                UsersLogin.style.display = 'flex'
            );

            // 3. 数据 获取失败
            (result.status === 1) && (
                Toast({
                    // 提示信息
                    message: result.message,
                    // 提示信息 显示位置
                    position: 'middle',
                    // 提示信息 持续时间 单位：us
                    duration: 3000
                })
            )
        }
    },
    // 组件挂载完毕 用户可以看到页面 自动执行这个 生命周期函数
    mounted() {
        // 解决 layui 函数内部 this 指向性问题
        let that = this;

        // 加载 layui UI 框架模块
        layui.use(['form', 'jquery'], function(){
            // 加载 form 表单模块
            let form = layui.form;
            // 加载内部 JQuery 模块
            let $ = layui.jquery;

            // 动态渲染 表单元素
            form.render();

            // 设置 layui UI 表单验证
            form.verify({
                // value：表单值；item：表单 DOM 对象
                // 账号验证规则
                AccountVerify: function(value, item) {
                    // 获取 错误信息提示容器
                    let error = document.getElementsByClassName('LErrorMessage')[0];

                    // 规则：数字 字母 下划线 组成的 6-15 位字符，且不能以 数字 开头
                    if (! /^[a-zA-Z_]\w{5,14}$/.test(value)) {
                        // 不符合规则 错误信息提示容器 文本内容
                        error.innerHTML = '数字 字母 下划线 组成的 6-15 位字符，且不能以 数字 开头';
                        return '数据格式错误'
                    };

                    // 满足规则 错误信息提示容器 文本内容
                    error.innerHTML = '账号填写正确！'
                },

                // 密码验证规则
                PasswordVerify: function(value, item) {
                    // 获取 错误信息提示容器
                    let error = document.getElementsByClassName('LErrorMessage')[0];

                    // 规则：6-15 位字符组成
                    if (value.length < 6 || value.length > 15) {
                        // 不符合规则 错误信息提示容器 文本内容
                        error.innerHTML = error.innerHTML + '<br>' + '密码应由 6-15 位字符组成';
                        return '数据格式错误'
                    };

                    // 满足规则 错误信息提示容器 文本内容
                    error.innerHTML = error.innerHTML + '<br>' + '密码填写正确！'
                }
            });

            // 设置 layui 监听 submit 提交
            // lay-filter 加上就会出错：submit(xxx)
            form.on('submit', function(data) {
                // 获取 账户名
                let account = data.field.Account;
                // 获取 密码
                let password = data.field.Password;
                // 获取 checkbox 是否被选中
                let rememberTime = data.field.remember;

                // ajax 方法 发送数据 到后台
                $.ajax({
                    // 发送数据的 url 地址
                    url: that.UserLogin,
                    // 发送数据的 方式
                    type: 'post',
                    // 要发送的数据
                    data: JSON.stringify( {Account: account, Password: password, Time: rememberTime} ),
                    // 设置 数据类型
                    dataType: 'json',
                    // 禁止 jQuery 对数据进行处理
                    processData: false,
                    // 禁止 jQuery 修改数据类型
                    // 统一 request response 头部类型
                    contentType: 'application/json; charset=utf-8',
                    // 数据发送 成功的 回调
                    success: function(data) {
                        // 获取 用户登录栏
                        let UsersLogin = document.getElementsByClassName('UsersLogin')[0];
                        // 获取 用户个人中心栏
                        let UserInfo = document.getElementsByClassName('UserInfo')[0];
                        // 数据获取成功：密码验证通过
                        (data.status === 0) && (
                            // 隐藏 用户登录栏
                            UsersLogin.style.display = 'none',
                            // 显示 用户个人中心栏
                            UserInfo.style.display = 'flex',
                            // 保存相应的数据
                            that.MyHeadPortrait = data.content.MyHeadPortrait,
                            that.NickName = data.content.NickName,
                            that.Account = data.content.Account,
                            that.Gender = data.content.Gender,
                            that.Age = data.content.Age,
                            that.NativePlace = data.content.NativePlace,
                            that.ContributionValue = data.content.ContributionValue,
                            that.MonthContributionValue = data.content.MonthContributionValue,
                            that.DateContributionValue = data.content.DateContributionValue
                        );

                        // [1] 账户名不存在
                        // [2] 密码错误
                        // [3] 服务器发生错误
                        (data.status !== 0) && (
                            Toast({
                                // 提示信息
                                message: data.message,
                                // 提示信息 显示位置
                                position: 'middle',
                                // 提示信息 持续时间 单位：us
                                duration: 3000
                            })
                        )
                    }
                });

                // 阻止页面跳转
                return false
            })
        });

        // 每次网页挂载后 自动向服务器验证身份
        this.Authentication()
    }
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 前台分区页 用户信息组件 基本样式 */

// 前台分区页 用户信息组件 模板根节点 基本样式
.Users-root {
    display: flex; position: relative; width: 100%; height: 100%;
    background-color: rgba($color: #2F4F4F, $alpha: 0.8);
    font-family: Arial, Helvetica, sans-serif; font-size: 13px
}


// 前台分区页 用户信息组件 用户登录外部容器 基本样式
.UsersLogin {
    display: flex; position: relative; width: 100%; height: 65%
}


// 前台分区页 用户信息组件 表单容器 基本样式
.layui-form-pane {
    display: flex; flex-direction: column; position: relative; width: 100%;
    height: 100%; align-items: center
}


// 前台分区页 用户信息组件 标题容器 基本样式
.UsersLoginTitle {
    display: flex; position: relative; width: 100%; height: 15%; justify-content: center;
    font-size: 25px; font-weight: bold; color: #D2691E; padding: 15px
}


// 前台分区页 用户信息组件 错误信息提示容器 基本样式
.LErrorMessage {
    display: flex; position: relative; width: 100%; height: 20%; justify-content: center;
    align-items: center; color: #FF0000
}


// 前台分区页 用户信息组件 用户名密码容器 基本样式
.LUserNamePassword {
    display: flex; flex-direction: column; position: relative; width: 100%; height: 35%
}
// 前台分区页 用户信息组件 用户名密码容器 表单 基本样式
.LUserNamePassword .layui-form-item {
    display: flex; position: relative; width: 100%; height: 50%; border: 1px solid #A9A9A9;
    background-color: rgba($color: #DCDCDC, $alpha: 1.0)
}
.LUserNamePassword .layui-form-item i {
    display: flex; position: relative; width: 10%; height: 100%; font-size: 20px;
    align-items: center; justify-content: center
}
.LUserNamePassword .layui-form-item input {
    display: flex; position: relative; width: 90%; height: 100%;
    font-family: Arial, Helvetica, sans-serif; font-size: 15px;
    background-color:rgba($color: #F5F5F5, $alpha: 1.0); border-top: none;
    border-right: none; border-bottom: none
}


// 前台分区页 用户信息组件 额外选项容器 基本样式
.LExtraOptions {
    display: flex; position: relative; width: 100%; height: 10%;
    background-color: rgba($color: #F8F8FF, $alpha: 1.0)
}
// 前台分区页 用户信息组件 额外选项容器 额外选项 基本样式
.Remember {
    display: flex; position: relative; width: 40%; height: 100%;
    justify-content: flex-start; align-items: center
}
.LExtraOptions span {
    display: flex; position: relative; width: 30%; height: 100%; justify-content: flex-start;
    align-items: center; cursor: pointer; color: rgba($color: #4682B4, $alpha: 0.8)
}
.LExtraOptions span:hover {
    color: #B22222
}


// 前台分区页 用户信息组件 登录按钮容器 基本样式
.LoginButton {
    display: flex; position: relative; width: 100%; height: 20%; justify-content: center
}
// 前台分区页 用户信息组件 登录按钮容器 按钮 基本样式
.LoginButton .layui-form-item {
    display: flex; position: relative; height: 100%; align-items: center
}


/* 前台分区页 用户信息组件 个人中心 基本样式 */

// 前台分区页 用户信息组件 用户信息容器 基本样式
.UserInfo {
    display: none; flex-direction: column; position: relative; width: 100%; height: 100%;
    background-color: rgba($color: #87CEFA, $alpha: 0.8)
}


// 前台分区页 用户信息组件 标题容器 基本样式
.UserInfoTitle {
    display: flex; position: relative; width: 100%; height: 10%;
    background-color: rgba($color: #F5F5F5, $alpha: 0.8)
}
// 前台分区页 用户信息组件 标题 基本样式
.UserInfoTitle i {
    display: flex; position: relative; width: 15%; height: 100%; align-items: center;
    justify-content: center; font-size: 20px; font-weight: bold;
    background-color: rgba($color: #D2B48C, $alpha: 0.8)
}
.UserInfoTitle span {
    display: flex; position: relative; width: 85%; height: 100%; align-items: center;
    justify-content: center; color: #D2691E; font-weight: bold; font-size: 18px;
    font-family: "Courier New", Courier, monospace
}
.UserInfoTitle::after {
    content: ''; display: flex; position: absolute; width: 100%; height: 3px; bottom: 1px;
    box-shadow: 0px 3px 3px rgba($color: #808080, $alpha: 0.5)
}
// 前台分区页 用户信息组件 图标 鼠标交互样式
.UserInfoTitle i:hover {
    color: #B22222; font-size: 25px; cursor: pointer
}


// 前台分区页 用户信息组件 头像容器 基本样式
.HeadPortrait {
    display: flex; position: relative; width: 100%; height: 30%;
    justify-content: center; align-items: center
}
// 前台分区页 用户信息组件 头像 基本样式
.HeadImage {
    display: flex; position: relative; width: 40%; height: 80%;
    border: 1px solid rgba($color: #A9A9A9, $alpha: 1.0); border-radius: 200px;
    overflow: hidden; cursor: pointer
}
.HeadImage img {
    display: flex; position: relative; width: 100%; height: 100%
}


// 前台分区页 用户信息组件 昵称账户名容器 基本样式
.NickNameUser {
    display: flex; flex-direction: column; position: relative; width: 100%; height: 20%
}

// 前台分区页 用户信息组件 昵称容器 账户名容器 基本样式
.NickNameContainer, .UserNameContainer {
    display: flex; position: relative; width: 100%; height: 50%
}

// 前台分区页 用户信息组件 昵称 账户名 基本样式
.NickNameTitle, .UserNameTitle {
    display: flex; position: relative; width: 20%; height: 100%; align-items: center;
    color: rgba($color: #191970, $alpha: 0.8); font-weight: bold
}

// 前台分区页 用户信息组件 昵称内容 账户名内容 基本样式
.NickNameContent, .UserNameContent {
    display: flex; position: relative; width: 80%; height: 100%; align-items: center;
    color: rgba($color: #F5F5F5, $alpha: 1.0)
}

// 前台分区页 用户信息组件 昵称内容 账户名内容 鼠标交互样式
.NickNameContent:hover, .UserNameContent:hover {
    color: rgba($color: #DCDCDC, $alpha: 1.0); cursor: pointer
}


// 前台分区页 用户信息组件 性别年龄容器 基本样式
.GenderAge {
    display: flex; position: relative; width: 100%; height: 10%
}

// 前台分区页 用户信息组件 性别容器 年龄容器 基本样式
.GenderContainer, .AgeContainer {
    display: flex; position: relative; width: 50%; height: 100%
}

// 前台分区页 用户信息组件 性别 年龄 基本样式
.GenderTitle, .AgeTitle {
    display: flex; position: relative; width: 40%; height: 100%; align-items: center;
    color: rgba($color: #191970, $alpha: 0.8); font-weight: bold
}

// 前台分区页 用户信息组件 性别内容 年龄内容 基本样式
.GenderContent, .AgeContent {
    display: flex; position: relative; width: 60%; height: 100%; align-items: center;
    color: rgba($color: #F5F5F5, $alpha: 1.0)
}

// 前台分区页 用户信息组件 性别内容 年龄内容 鼠标交互样式
.GenderContent:hover, .AgeContent:hover {
    color: rgba($color: #DCDCDC, $alpha: 1.0); cursor: pointer
}


// 前台分区页 用户信息组件 国家地区容器 基本样式
.CountryArea {
    display: flex; position: relative; width: 100%; height: 10%
}

// 前台分区页 用户信息组件 国家地区 基本样式
.CountryAreaTitle {
    display: flex; position: relative; width: 30%; height: 100%; align-items: center;
    color: rgba($color: #191970, $alpha: 0.8); font-weight: bold
}

// 前台分区页 用户信息组件 国家地区内容 基本样式
.CountryAreaContent {
    display: flex; position: relative; width: 70%; height: 100%; align-items: center;
    color: rgba($color: #F5F5F5, $alpha: 1.0)
}

// 前台分区页 用户信息组件 国家地区内容 鼠标交互样式
.CountryAreaContent:hover {
    color: rgba($color: #DCDCDC, $alpha: 1.0); cursor: pointer
}


// 前台分区页 用户信息组件 贡献值容器 基本样式
.ContributionValue {
    display: flex; position: relative; width: 100%; height: 20%; align-items: flex-start
}

// 前台分区页 用户信息组件 贡献值容器 表单 基本样式
.ContributionValue .layui-table {
    cursor: pointer
}

</style>
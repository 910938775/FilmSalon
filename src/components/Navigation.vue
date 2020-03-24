<!-- 组件模板区域 -->
<template>
	<!-- 模板根节点 -->
	<div>

		<!-- 导航栏 区域 -->
		<!-- 导航栏 外部容器 一级容器 -->
		<header class="navbar-wrapper">
			<!-- 导航栏 外部容器 二级容器 -->
			<div class="navbar navbar-black navbar-fixed-top">
				<!-- 导航栏 外部容器 三级容器 -->
				<div class="containers">
					<!-- 导航栏 logo 菜单开关 外部容器 -->
					<nav class="logocontainer">
					<!-- 导航栏 logo 区域 -->
					<router-link class="logo navbar-logo" to="/">拉片网</router-link>
					<router-link class="logo navbar-logo-m" to="/">FilmSalon</router-link>
					<span class="logo navbar-slogan">大众 &middot; 多样 &middot; 面向世界</span>
					<!-- 导航栏 手机上 菜单开关 --> 
					<nav class="navbar-userbar" @click="conceal = !conceal">
						<img src="../../node_modules/open-iconic/svg/chevron-bottom.svg" class="iconic-sprite" alt="Open Menu">
					</nav>
					</nav>
					<!-- 导航栏 菜单 区域 -->
					<!-- 导航栏 菜单 一级容器 -->
					<nav class="nav navbar-nav nav-collapse" v-show="conceal">
						<!-- 导航栏 菜单 二级容器 -->
						<ul class="cl">
							<!-- 导航栏 菜单 三级容器 -->
							<li class="current"><router-link to="/FilmsLibrary">资料馆</router-link></li>
							<li><router-link to="/AcademicRoom">学术室</router-link></li>
							<li><router-link to="/FilmsCourse">影视课程</router-link></li>
							<!-- 导航栏 下拉菜单 一级容器 二级容器 -->
							<li class="dropDown dropDown_hover"><router-link to="/" class="dropDown_A" @click.prevent>其他<i class="dropDown_B"></i></router-link>
								<!-- 导航栏 下拉菜单 三级容器 -->
								<ul class="dropDown-menu menu radius box-shadow">
									<!-- 导航栏 下拉菜单 四级容器 -->
									<li><router-link to="/OtherCourse/Photography">摄影&摄像</router-link></li>
									<li><router-link to="/OtherCourse/Art">美术</router-link></li>
									<li><router-link to="/OtherCourse/Culture">文化&文学</router-link></li>
									<li><router-link to="/OtherCourse/Architecture">建筑</router-link></li>
									<li><router-link to="/OtherCourse/Clothing">服装</router-link></li>
									<li><router-link to="/OtherCourse/MakeUp">化妆</router-link></li>
									<li><router-link to="/OtherCourse/Other">其他</router-link></li>
								</ul>
							</li>
							<li><router-link to="/AboutUs">关于我们</router-link></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

	</div>
</template>

<!-- 组件实例接口区域 -->
<script>

// 对外暴露 数据接口
export default {
	// vue 数据方法 对象
	data() {
		return {
			// 控制菜单 隐藏 数据
			conceal: true
		}
	},
	// 自动调用 生命周期函数 组件挂载完成
	// 根据 屏幕大小 响应式布局
	mounted() {
		// 获取 屏幕宽带
		let w = document.documentElement.offsetWidth || document.body.offsetWidth;
		// 响应式 属性数据
		if(w < 768){
			this.conceal = false
		}
	}
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

// 导航栏 一级容器 header 高度
.navbar-wrapper {
	height: 45px
}
// 导航栏 二级容器 navbar 样式
// 防重叠指数：1030
.navbar {
	position: relative; z-index: 1300; padding: 0px 16px
}
// 导航栏 三级容器 containers 样式
.containers {
	position: relative; padding: 0px 25px
}
.navbar .containers {
	right: 0px; top: 0
}
// 固定导航栏 二级容器 navbar：
// 可覆盖 navbar 样式
// 防重叠指数：1300
// 清除 header 的默认样式
.navbar-fixed-top {
	position: fixed; top: 0; left: 0; right: 0; z-index: 1300!important
}


/* logo 区域 */

// logo 菜单开关 容器
.logocontainer {
	position: relative; float: left
}
// logo 区域展示样式
.logo {
	display: inline-block; text-decoration: none; cursor: pointer
}
a.logo:hover {
	text-decoration: none
}
// logo 区域内容样式：
.navbar .logo {
	height: 44px; line-height: 44px; margin-right: 10px; float: left
}
.navbar-logo, .navbar-logo-m {
	font-size: 16px
}
.navbar-slogan {
	font-size: 12px; cursor: default
}


/* 手机菜单 开关 区域 */

// 菜单开关 基本样式
// 电脑端 隐藏 菜单开关
.navbar-userbar {
	position: relative; display: none
}
.navbar .containers .navbar-userbar {
	height: 16px; width: 16px; background: #F5F5F5; border-radius: 5px; box-shadow: 1px 1px 3px #F8F8FF
}
// 开关图标 样式
.iconic-sprite {
	width: 8px; height: 8px; opacity: 0.8; position: absolute; top: 5px; right: 4px;
	-webkit-transform: scale(2,2);
	-moz-transform: scale(2,2);
	transform: scale(2,2)
}


/* 导航栏菜单区域 */

// 一级菜单容器 nav 防重叠
.nav {
	z-index: 1!important
}
// 消除 二级菜单容器 ul 默认属性
// 使 菜单栏 成为 行内元素 与 logo 区域 一行显示
.nav > ul {
	font-size: 0; line-height: 0; display: inline-block; list-style-type: none; margin-bottom: 0px
}
// 三级菜单容器 li 内容样式
// 菜单容器 a 内容样式
.nav > ul > li {
	position: relative
}
.nav > ul > li, .nav > ul > li > a {
	display: inline-block; height: 44px; line-height: 44px; text-align: center; font-size: 14px
}
// 菜单容器 a 鼠标交互 样式动画
.nav > ul > li > a {
	padding: 0 20px;
	// 兼容性 动画 设置
	-webkit-transition: background-color 0.3s ease 0s;
	-moz-transition: background-color 0.3s ease 0s;
	-o-transition: background-color 0.3s ease 0s;
	-ms-transition: background-color 0.3s ease 0s;
	transition: background-color 0.3s ease 0s
}
.nav > ul > li > a:hover {
	text-decoration: none
}


/* 导航栏 响应式布局 */
// 平板端显示效果
@media (max-width: 810px) {
	// 重定义 菜单容器 a 内容样式
	.navbar-nav > ul > li > a {
		padding: 0px 16px
	}
}


/* 导航栏 响应式布局 */
// 平板端显示效果
@media (max-width: 768px) {
	// 重定义 导航栏 二级容器 navbar 样式
	.navbar {
		padding: 0px
	}
	// 重定义 导航栏 三级容器 containers 样式
	.containers {
		padding: 0px 13px
	}
}


/* 导航栏 响应式布局 */
// 手机端显示效果
@media (max-width: 767px) {
	// 重定义 导航栏 二级容器 navbar 样式
	.navbar {
		padding: 0px
	}
	// 重定义 导航栏 三级容器 containers 样式
	.containers {
		padding: 0px 10px
	}

	// 重定义 logo 区域内容样式
	.navbar .logo {
		margin: 3px 7px; height: 30px; line-height: 30px
	}

	// 重定义 一级菜单栏容器 navbar-nav 独占一行
	// 菜单栏 与 logo 区域 各占一行
	.navbar-nav {
		display: block
	}
	// 消除 二级菜单容器 ul 三级菜单容器 li 的默认样式
	// 使 菜单栏 成为 行内元素
	.nav-collapse > ul, .nav-collapse > ul > li {
		display: inline-block; padding-inline-start: 0px
	}
	// 重定义 二级菜单容器 ul 使得菜单栏 居中显示
	.navbar-nav > ul {
		margin: 0px
	}
	// 重定义 三级菜单容器 li 内容样式
	.navbar-nav > ul > li {
		text-align: left; height: 30px; line-height: 30px
	}

	// 重定义 菜单容器 a 内容样式
	.navbar-nav > ul > li > a {
		display: block; padding: 0px 12px; text-align: left; height: 30px; line-height: 30px
	}


	/* 手机端 显示 菜单开关 */
	.navbar-userbar {
		display: inline-block
	}
	// 重定义 菜单开关 基本样式
	.navbar .containers .navbar-userbar {
		top: 8px; right: -30%
	}
}


/* 导航栏 响应式布局 */
// 手机端显示效果
@media (max-width: 375px) {
	// 重定义 logo 区域内容样式
	.navbar .logo {
		margin: 3px 7px; height: 30px; line-height: 30px
	}
	.navbar-logo, .navbar-logo-m {
		font-size: 13px
	}
	.navbar-slogan {
		font-size: 10px
	}

	// 重定义 三级菜单容器 li 内容样式
	.navbar-nav > ul > li {
		text-align: left; height: 25px; line-height: 25px
	}

	// 重定义 菜单容器 a 内容样式
	.navbar-nav > ul > li > a {
		display: block; padding: 0px 8px; text-align: left; height: 25px; line-height: 25px; font-size: 13px
	}

	// 重定义 菜单开关 基本样式
	.navbar .containers .navbar-userbar {
		right: -25%
	}
}


/* 导航栏 响应式布局 */
// 手机端显示效果
@media (max-width: 320px) {
	// 重定义 菜单开关 基本样式
	.navbar .containers .navbar-userbar {
		right: -6%
	}

	// 重定义 菜单容器 a 内容样式
	.navbar-nav > ul > li > a {
		padding: 0px 6px
	}
}


/* 导航条风格 */

// 导航栏 二级容器 navbar-black 的 显示风格
.navbar-black {
	background-color: #1E90FF; border-bottom: #00CED1 1px solid; -moz-box-shadow: 0 0 4px #00FF7F;
	-webkit-box-shadow: 0 0 4px #00FF7F; box-shadow: 0 0 4px #00FF7F
}
// 导航栏 logo区域 的 显示风格
.navbar-black .logo {
	color: #fff; font-family: Impact, sans-serif
}
.navbar-black .navbar-logo-m {
	color: #eee; font-family: "Times New Roman", Times, serif
}
.navbar-black .navbar-slogan {
	color: #FDF5E6; font-family: "Trebuchet MS", Helvetica, sans-serif
}
// 导航栏 菜单区域 的 显示风格
.navbar-black .navbar-nav > ul > li,
.navbar-black .navbar-nav > ul > li > a {
	color: #fff
}

// 导航栏 菜单区域 鼠标交互 样式
.navbar-black .navbar-nav > ul > li > a:hover {
	color: #DEB887; background-color: #4169E1
}


/* 导航栏菜单区域 风格 响应式布局 */
// 手机端显示效果
@media (max-width: 767px) {
	// 导航栏 菜单区域 显示风格
	.navbar-black .navbar-nav > ul > li {
		border-bottom: solid 1px #00CED1
	}
	// 导航栏 菜单区域 交互式 样式
	.navbar-black .navbar-nav > ul > li > a:focus {
		background-color: #4169E1
	}
}


/* 打开 下拉菜单 */

// 隐藏 一级下拉菜单
.dropDown > .dropDown-menu {
	visibility: hidden; opacity: 0; position: absolute;  z-index: 2000!important
}
// 显示 一级下拉菜单
// 鼠标交互式动画
.dropDown:hover > .dropDown-menu, .dropDown:focus > .dropDown-menu {
	visibility: visible; display: inline-block; opacity: 1;
	-webkit-transition:all 0.3s ease-in-out 0s;
	-moz-transition:all 0.3s ease-in-out 0s;
	-o-transition:all 0.3s ease-in-out 0s;
	-ms-transition:all 0.3s ease-in-out 0s;
	transition:all 0.3s ease-in-out 0s
}


/* 下拉菜单 基本样式 */

// 导航栏 下栏菜单 二级容器 a 样式
.dropDown_A {
	display: inline-block
}
.dropDown:focus, .dropDown-menu:focus {
	outline: 0
}

// 导航栏 下拉菜单 三级容器 ul 样式
.dropDown-menu {
	background-color: #008B8B; border: solid 1.5px #FAF0E6; top: 105%; left: -30%;
	padding-inline-start: 20px
}
.radius {
	border-radius: 7px
}
.box-shadow {
	border-top: none; box-shadow: 0.8px 1px 1px #D8BFD8; -webkit-box-shadow: 0.8px 1px 1px #D8BFD8;
	-moz-box-shadow: 0.8px 1px 1px #D8BFD8
}

// 导航栏 下拉菜单 四级容器 li 样式
.menu > li {
	position: relative; float: none; display: block
}

// 导航栏 下拉菜单 a 样式
.menu > li > a {
	display: block; clear: both; border-bottom: solid 1px #DEB887; padding: 6px 20px;
	text-align: left; line-height: 1.5; font-weight: normal; white-space: nowrap; color: #FFF8DC;
	// 兼容性 动画 设置
	-webkit-transition:background-color 0.3s ease-in-out 0s;
	-moz-transition:background-color 0.3s ease-in-out 0s;
	-o-transition:background-color 0.3s ease-in-out 0s;
	-ms-transition:background-color 0.3s ease-in-out 0s;
	transition:background-color 0.3s ease-in-out 0s
}
.menu > li:last-child > a {
	border-bottom: none
}

// 导航栏 下拉菜单 鼠标交互 动画
.menu > li > a:hover, .menu > li > a:focus {
	text-decoration: none; background-color: #00CED1; color: #DEB887
}

// 导航栏 下拉菜单 图标 鼠标交互 动画
.dropDown_B {
	border-width: 5px; border-style: solid; border-color: transparent transparent transparent white;
	position: absolute; top: 40%; right: 6px
}
.dropDown:hover .dropDown_B, .dropDown:focus .dropDown_B {
	-webkit-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	transform: rotate(90deg)
}


/* 导航栏 响应式布局 */
// 平板端显示效果
@media (max-width: 810px) {
	// 重定义 导航栏 下拉菜单 图标 鼠标交互 动画
	.dropDown_B {
		right: 2px
	}
}


/* 下拉菜单 基本样式 响应式布局 */
// 手机端 显示效果
@media(max-width: 767px){
	// 重定义 下拉菜单 三级容器ul 样式
	.dropDown > .dropDown-menu {
		position: absolute; padding-inline-start: 0px; width: max-content; -webkit-width: max-content;
		list-style-type: none; font-size: 0px
	}
	.dropDown-menu {
		top: 110%; left: -425%
	}
	// 重定义 下拉菜单 三级容器ul 显示方式
	.dropDown:hover > .dropDown-menu, .dropDown:focus > .dropDown-menu {
		display: block
	}

	// 重定义 导航栏 下拉菜单 四级容器 li 样式
	// 使消除 li 间距 而产生的顶部对齐 居中
	.menu > li, .menu > li > a {
		display: inline-block; vertical-align: middle
	}

	// 重定义 导航栏 下拉菜单 a 样式
	.menu > li > a {
		padding: 3px 8px; font-size: 13px; border-bottom: none; border-right: solid 1px #DEB887
	}
	.menu > li:last-child > a {
		border-right: none; border-bottom-right-radius: 7px; border-top-right-radius: 7px
	}
	.menu > li:first-child > a {
		border-bottom-left-radius: 7px; border-top-left-radius: 7px
	}

	// 重定义 导航栏 下拉菜单 图标 鼠标交互 动画
	.dropDown_B {
		top: 35%; right: 1px
	}
}


/* 下拉菜单 基本样式 响应式布局 */
// 手机端 显示效果
@media(max-width: 375px){
	// 重定义 下拉菜单 三级容器ul 样式
	.dropDown-menu {
		top: 115%; left: -445%
	}

	// 重定义 导航栏 下拉菜单 a 样式
	.menu > li > a {
		padding: 3px 7px; font-size: 12px
	}

	// 重定义 导航栏 下拉菜单 图标 鼠标交互 动画
	.dropDown_B {
		top: 35%; right: -3px
	}
}


/* 下拉菜单 基本样式 响应式布局 */
// 手机端 显示效果
@media(max-width: 320px){
	// 重定义 下拉菜单 三级容器ul 样式
	.dropDown-menu {
		left: -465%
	}

	// 重定义 导航栏 下拉菜单 a 样式
	.menu > li > a {
		padding: 3px 4px; font-size: 10px
	}

	// 重定义 导航栏 下拉菜单 图标 鼠标交互 动画
	.dropDown_B {
		top: 35%; right: -5px
	}
}


/* 禁用菜单 */

// 把 class 为 disable 的标签 隐藏
.menu > li.disabled > a {
	color: #696969; text-decoration: none; cursor: no-drop; background-color: transparent
}

</style>
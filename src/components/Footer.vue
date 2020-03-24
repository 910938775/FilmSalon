<!-- 组件模板区域 -->
<template>
<!-- 模板根节点 -->
<div>

    <!-- 页脚 区域 -->
    <!-- 页脚 外部容器 -->
    <footer class="footer footer-default">
         <!-- 页脚 二级容器 -->
        <div class="footer-container">
            <p>CopyRight©2019&nbsp;&nbsp;小楼楼阁灬轩听雨. &nbsp;All rights reserved.</p>
            <span>苏ICP备xxxxxxxx</span>
            <span class="footer-email">联系邮箱：zhu1994@foxmail.com</span>
        </div>
    </footer>

</div>
</template>

<!-- 组件实例接口区域 -->
<script>

// 接口区域
export default {

}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

// 页脚 外部容器 样式
.footer {
    display: block
}


// 页脚 二级容器 样式
.footer-container {
    position: relative; background-color: #F8F8FF; font-size: 13px; text-align: center;
    font-family: "Palatino Linotype", "Book Antiqua", serif; color: #778899
}


// 页脚 内容 样式
.footer-container > p {
    margin: 0px; padding: 5px 0px
}
.footer-container > span {
    padding: 3px 15px 8px 15px; display: inline-block
}


/* 页脚 响应式布局 */
// 手机端显示效果
@media(max-width: 375px) {
    // 重定义 页脚 内容 样式
    .footer-container > p {
        font-size: 8px
    }
    .footer-container > span {
        padding: 5px 3px
    }
}

</style>
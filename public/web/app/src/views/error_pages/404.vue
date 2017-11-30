<template>
    <div class="error404">
        <div class="error404-body-con">
            <Card>
                <div class="error404-body-con-title">4<span><Icon size="230" type="ios-navigate-outline"></Icon></span>4</div>
                <p class="error404-body-con-message">暂&nbsp;未&nbsp;开&nbsp;放</p>
                <div class="error404-btn-con">
                    <i-button @click="goHome" size="large" style="width: 200px;" type="text">返回首页</i-button>
                    <i-button @click="backPage" size="large" style="width: 200px;margin-left: 40px;" type="primary">返回上一页</i-button>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Error404',
    methods: {
        backPage () {
            this.$router.go(-1);
        },
        goHome () {
            this.$router.push({path: '/'});
        }
    }
};
</script>

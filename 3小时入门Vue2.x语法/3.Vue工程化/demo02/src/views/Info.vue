<template>
    <div class="wrapper">
        <div class="content-box">
            <div class="title">
                标题：{{title}}
            </div>
            <div class="content">
                内容：{{content}}
            </div>
            <div class="btn" @click="reback">返回</div>
        </div>
    </div>
</template>

<script>
import store from '../store/index';
export default {
    name: "Info",
    data() {
        return {
            id: '',
            title: '',
            content: ''
        }
    },
    mounted() {
        var local = window.location.search;
        var len = local.length;
        var id = local.substring(4,len);
        this.title = store.state.lists[id].title;
        this.content = store.state.lists[id].content;
    },
    computed: {
        pageLists() {
            return store.state.lists;
        }
    },
    methods: {
        reback() {
            this.$router.push('/home/list')
        }
    },
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    margin: 2rem auto;
}

.content-box{
    width: 90%;
    margin: 2rem auto;
    border: 1px solid #000;
    border-radius: .5rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 1rem;
}

.title{
    width: 100%;
    line-height: 3rem;
    font-size: 1.4rem;
    margin: 1rem auto;
}

.content{
    width: 100%;
    line-height: 2rem;
    font-size: 1.4rem;
    margin: 1rem auto;
}

.btn{
    width: 5rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: .5rem;
    border: 1px solid #000;
    margin: 1rem auto;
}
</style>
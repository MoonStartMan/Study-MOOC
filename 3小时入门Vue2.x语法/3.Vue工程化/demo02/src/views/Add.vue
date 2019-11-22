<template>
    <div>
        <p class="title">添加内容页面</p>
        <div class="content-box">
            <input type="text" placeholder="请输入添加的标题" v-model="title">
            <textarea placeholder="请输入添加的内容" required="required" v-model="content"></textarea>
            <div class="btn-box">
                <button type="button" @click="sumbuit()">提交</button>
                <button type="button" @click="cancel()">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store/index';
export default {
    name: "Add",
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        sumbuit() {
            store.commit('addItem',{
                title: this.title,
                content: this.content
            })
            this.title = ''
            this.content = ''
            this.$router.push('/home/list');
        },
        cancel() {
            this.$router.push('/home/user');
        }
    },
}
</script>

<style scoped>
.title{
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
}

.content-box{
    width: 90%;
    margin: 2rem auto;
}

input{
    width: 80%;
    height: 3rem;
    display: block;
    border-radius: .5rem;
    outline: none;
    border: 2px solid #000;
    text-indent: 2rem;
    margin: 1rem auto;
}

textarea{
    width: 80%;
    height: 10rem;
    display: block;
    border-radius: .5rem;
    outline: none;
    border: 2px solid #000;
    text-indent: 2rem;
    margin: 1rem auto;
    line-height: 2rem;
}

.btn-box{
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

button {
    width: 30%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background-color: #000;
    border-radius: .5rem;
    color: #ffffff;
    outline: none;
    border: none;
}
</style>
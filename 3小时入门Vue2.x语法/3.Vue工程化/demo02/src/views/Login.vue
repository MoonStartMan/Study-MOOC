<template>
    <div class="container">
        <div class="login-box" v-if="!state">
            <input type="text" placeholder="请输入账号" v-model="user">
            <input type="password" placeholder="请输入密码" v-model="password">
            <div class="btn-box">
                <button type="button" @click="sumbit()">提交</button>
                <button type="button" @click="registered()">注册</button>
            </div>
        </div>
        <div class="login-box" v-if="state">
            <input type="text" placeholder="请输入账号" v-model="user">
            <input type="password" placeholder="请输入密码" v-model="password">
            <input type="password" placeholder="请再次输入密码" v-model="password2">
            <div class="btn-box">
                <button type="button" @click="reback()">返回</button>
                <button type="button" @click="register()">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            state: false,   //  状态
            user: '',   //..账号
            password: '',   //..密码
            password2: '', //.. 再一次输入密码
        }
    },
    methods: {
        reback() {
            this.state = false
        },
        registered() {
            this.state = true
        },
        //  登录
        sumbit() {
            if(parseInt(localStorage.getItem('user')) == this.user && parseInt(localStorage.getItem('password')) == this.password){
                this.user = '',
                this.password = '',
                this.$router.push('/home/list')
            } else {
                alert("用户密码不正确");
            }
        },
        //  注册
        register() {
            if(parseInt(this.password) === parseInt(this.password2)) {
                localStorage.setItem("user", this.user);
                localStorage.setItem("password", this.password);
                this.user = '';
                this.password = '';
                this.password2 = '';
                alert("注册成功!")
                this.state = false;
            } else {
                alert("两次输入密码不一致");
            }
        }
    },
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: url('../assets/bg.jpg') no-repeat;
    background-size: 100% 100%;
}

.login-box{
    width: 80%;
    height: 60%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 1rem;
    background-color: rgba(256,256,256,0.8);
}

input{
    display: block;
    width: 80%;
    height: 3rem;
    line-height: 3rem;
    margin: 2rem auto;
    border-radius: .5rem;
    text-indent: 2rem;
    outline: none;
    border: none;
}

.btn-box{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

button{
    width: 40%;
    height: 60%;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: .5rem;
    border: none;
    outline: none;
}
</style>
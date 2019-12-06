<template>
    <div>
        <ul>
            <li><router-link :to="{name: 'list'}" class="link">新闻列表</router-link></li>
            <li><router-link :to="{name: 'user'}" class="link">个人中心</router-link></li>
        </ul>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style scoped>
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

li{
    width: 50%;
    list-style: none;
}

.link{
    width: 80%;
    display: block;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    font-size: 1.4rem;
    padding: 1rem 0;
    margin: 0 auto;
    background-color: rgba(0,0,0,0.7);
    border-radius: .5rem;
}

.link:hover{
    text-shadow: 0 0 20px #ffffff;
    box-shadow: 0 0 20px #ffffff;
}
</style>
<template>
    <div class="content">
        <p>消息列表</p>
        <ul>
            <li
                v-for="(item, index) in pageLists"
                :key="index"
                @click="changeColor(index)"
                :class="{'active':current == index}"
            >
                {{item.title}}-{{item.content}}
                <div class="btn" @click="toInfo(index)">查看详情</div>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '../store/index'
export default {
    name: "list",
    store,
    data() {
        return {
            current: -1
        }
    },
    computed: {
        pageLists() {
            return store.state.lists;
        }
    },
    methods: {
        changeColor(index) {
            this.current = index;
        },
        toInfo(index) {
            this.$router.push({
                path: '/info',
                query: {
                    id: index
                }
            })
        }
    },
}
</script>

<style scoped>
.content{
    width: 90%;
    margin: 2rem auto;
}

p{
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
}

ul {
    width: 100%;
}

li{
    width: 100%;
    display: block;
    margin: 1rem auto;
    border: 1px solid #000;
    border-radius: .5rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 1rem;
}
.btn{
    width: 10rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #000;
    border: 1px solid #000;
    border-radius: .5rem;
    margin: 1rem auto;
}

.active{
    box-shadow: 0 0 20px #000;
}
</style>
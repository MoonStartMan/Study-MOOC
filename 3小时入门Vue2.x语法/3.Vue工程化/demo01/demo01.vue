<template>
    <div>
        <ul>
            <li 
                v-for="(item, index) in lists" 
                :key="index" 
                @click="choose(index)"
                :class="{active:index == current && current != ''}"
                >{{item}}</li>
        </ul>
        <button type="button" @click="add()">添加</button>
        <ul>
            <li v-for="(item,index) in target" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "demo01",
    data () {
        return {
            current: '',
            lists: [1,2,3,4,5,6,7,8,9],
            target: []
        }
    },
    methods: {
        choose(index) {
            this.current = index;
        },
        add() {
            if(this.current === '') return;
            this.target.push(this.lists[this.current])
            this.current = ''
        }
    },
}
</script>

<style>
    li.active{
        background: green;
    }
</style>
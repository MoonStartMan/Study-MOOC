<template>
    <div>
        <div class="content" >
            <div class="content-btn" @click="toAdd()">添加新闻</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "User",
    methods: {
        toAdd() {
            this.$router.push('/add');
        }
    },
}
</script>

<style scoped>
    .content{
        width: 100%;
        height: 50%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content-btn{
        width: 10rem;
        height: 3rem;
        line-height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.7);
        border-radius: .5rem;
        color: #ffffff;
        box-shadow: 0 0 20px #000000;
        cursor: pointer;
    }
</style>
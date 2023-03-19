<template>
    <div class="main">
        <ul>
            <li v-for="page in main.pages" @click="main.jump(page)">
                {{ page.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const main = reactive({
    pages:[
        {code:'index',name:'主页',url:'/'},
        {code:'timeline',name:'时间轴',url:'/timeline'},
        {code:'about',name:'关于',url:'/about'},
    ],
    jump(page){
        router.push(page.url);
    }
});
</script>

<style lang="scss" scoped>
@import '../assets/common.scss';
</style>
<style scoped lang="scss">
.main {
    width: fit-content;
    margin: 100px auto 0;

    ul{
        display: flex;

        li{
            margin: 0 10px;
            padding: 0 10px;
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            border-radius: 5px;
            border: 1px solid #626262;
            user-select: none;
        }
    }
}
</style>
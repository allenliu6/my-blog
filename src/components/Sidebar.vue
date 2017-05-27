<template>
    <aside>
        <img src="../assets/avatar.png" alt="博主头像" class="side_avatar">
        <h3 class="side_name">Allen</h3>
        <p class="side_sign">不会弹吉他的师范生不是好前端</p>
        <ul class="side_content">
            <li><a href="">日志</a></li> 
            <li><a href="">分类</a></li> 
        </ul>
        <ul class="side_link">
            <li><a href="">GitHub</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">WeChat</a></li>
        </ul>
    </aside>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style lang="postcss" scoped>
    aside{
        width: 250px;
        padding: 100px 10px;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        
        & img{
            width: 2rem;
        }

        & .side_link{
            display: flex;
            flex-direction: column;
            margin: 20px 0;
        }
    }
</style>

<template>
    <div class="toggle">
        <span class="toggle_line"></span>
        <span class="toggle_line"></span>
        <span class="toggle_line"></span>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="postcss" scoped>
    .toggle{
        width: 40px;
        height: 40px;
        position: fixed;
        left: 100px;
        bottom: 100px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        & .toggle_line{
            border: 1px solid #333;
            width: 70%;
        }
    }
</style>

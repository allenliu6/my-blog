<template>
    <header>
        <div class="header_left">
            <img src="../assets/header.jpg">
            <h3>Allen's Blog</h3>
        </div>
        <nav class="header_right">
            <ul>
                <li>主页</li>
                <li>归档</li>
                <li>分类</li>
                <li>关于</li>
                <li>作品</li>
                <li>友链</li>
                <li>搜索</li>
            </ul>
        </nav>
    </header>
</template>

<<script>
    export default{
        
    }
</script>

<<style lang="postcss" scoped>
:root{
    --heading-color: red;
}

    header{
        width: 15rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 0.3rem;

        & .header_left{
            display: flex;
            align-items: center;
            margin-left: 0.5rem;

            & img{
                height: 1.5rem;
                border-radius: 0.75rem;
                margin-right: 0.3rem;
            }
        }
        & .header_right{
            margin-right: 0.5rem;

            & ul{
                display: flex;
                padding: 0;
                justify-content: space-around;

                & li{
                    padding: 10px;
                }
            }
        }
        
    }
</style>
<template>
    <header>
        <nav class="header_nav">
            <ul>
                <li>主页</li>
                <li>归档</li>
                <li>分类</li>
                <li>关于</li>
                <li>作品</li>
                <li>友链</li>
                <li>搜索</li>
            </ul>
            <h3>Allen's Blog</h3>
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
        width: 11rem;
        font-size: 0.2rem;
        margin: 0 auto;

        & .header_nav{
            display: flex;
            align-items: center;
            flex-direction: row-reverse;

            & ul{
                display: flex;
                justify-content: space-around;
                margin-left: 50px;

                & li{
                    padding: 10px;
                }
            }
        }
        
    }
</style>
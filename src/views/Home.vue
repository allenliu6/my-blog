<template>
    <div class="content">
        <b-sidebar></b-sidebar>
        <b-abstract></b-abstract>
        <b-popup></b-popup>
    </div>
</template>

<script>
    import bSidebar from '../components/Sidebar'
    import bAbstract from '../components/Abstract'
    import bPopup from '../components/Popup'
    
    export default {
        components: {
            bSidebar,
            bAbstract,
            bPopup
        }
    }

</script>

<style lang="postcss" scoped>
    .content{
        width: 3rem;
        height: 100%;
        display: block;
        padding: 10px;

        
    }
</style>
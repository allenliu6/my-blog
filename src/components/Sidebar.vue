<template>
    <aside>
        <transition name="slide-fade">
            <section v-if="show">
                <img src="../assets/avatar.png" alt="博主头像" class="side_avatar">
                <div>
                    <h3 class="side_name">Allen</h3>
                    <p class="side_sign"><i>不会弹吉他的师范生不是好前端</i></p>
                </div>
                <ul class="side_link-content">
                    <li><a href="">日志</a></li> 
                    <li><a href="">分类</a></li> 
                </ul>
                <ul class="side_link-social">
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">WeChat</a></li>
                </ul>
            </section>
        </transition>
        <b-popup class="side_toggle" :fatherName="'Sidebar'"></b-popup>
    </aside>
</template>

<script>
    import bPopup from './Popup'
    export default {
        data(){
            return {
                
            }
        },
        components: {
            bPopup
        },
        computed: {
            show(){
                return this.$store.getters.sidebar
            }
        }
    }
</script>

<style lang="postcss" scoped>
    a{
        color: #efefef;
        font-weight: bold;
    }

    aside{
        
        & section{
            width: 5rem;
            padding: 50px 10px 300px;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            color: #efefef;
            background: url('../assets/bg2.jpg') center no-repeat;
            -webkit-filter: saturate(0.7) drop-shadow(2px 2px 2px #333);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            & img{
                width: 1.5rem;
                margin-bottom: 20px;
            }

            & .side_link-content{
                display: flex;
                font-size:18px;
                margin: 20px 0;

                & li{
                    padding: 5px;
                }
            }

            & .side_link-social{
                display: flex;
                flex-direction: column;
                font-size:16px;

                & li{
                    padding: 5px;
                }
            }
        }

        & .side_toggle{
            position: fixed;
            left: 30px;
            bottom: 50px;
        }
    }

    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(-10px);
    }
</style>

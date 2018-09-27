<template>
    <div class="home">
        <div class="home-play">
            <el-carousel trigger="click" height="800px" :interval="3000" :autoplay="false">
                <el-carousel-item v-for="item in imgs" :key="item">
                    <div class="img-background">
                        <img src="/img/home-bg.jpg" alt="" class="bg">
                        <img :src="item" alt="" width="1200" class="img" height="800px">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="home-product">
            <span @mouseover="handleMouseover" @mouseout="handleMouseover">
                <router-link to="/product/airplane">
                    <img src="/img/home-3.jpg" alt="">
                    <div v-show="isShow"><h3>{{isChinese?'六轴无人机':'Six-axis Unmanned Aerial Vehicle'}}</h3></div>
                </router-link>
            </span>
            <span @mouseover="handleMouseover2" @mouseout="handleMouseover2">
                <router-link to="/product/airship">
                    <img src="/img/home-4.jpeg" alt="">
                    <div v-show="isShow2">
                        <h3>{{isChinese?'无人飞艇':'Unmanned Airship'}}</h3>
                    </div>
                </router-link>
            </span>
        
        </div>
    
    
    </div>
</template>

<script>

    export default {
        name: 'home',
        data(){
            return {
                imgs: [
                    '/img/home-1.png',
                    '/img/home-2.jpg',
                    '/img/home-3.jpg',
                ],
                isShow: false,
                isShow2: false,
            }
        },
        methods: {
            handleMouseover(){
                this.isShow = !this.isShow;
            },
            handleMouseover2(){
                this.isShow2 = !this.isShow2;
            }
        },
        computed: {
            isChinese(){
                return this.$store.state.isChinese;
            }
        }
    }
</script>

<style lang="scss" scoped>
    
    .home {
        margin-top: -55px;
        &-play {
            .img-background {
                height: 800px;
                .bg{
                    width: 100%;
                    height: 100%;
                }
                .img {
                    position: relative;
                    z-index: 120;
                    margin: 0 auto;
                    top: -800px;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
                
            }
        }
        &-product {
            width: 1200px;
            margin: 0px auto;
            font-size: 0px;
            a {
                height: 400px;
                display: inline-block;
                width: 600px;
                text-decoration: none;
                color: white;
                text-align: center;
                position: relative;
                
                h3 {
                    font-size: 20px;
                    padding-top: 190px;
                    text-align: center;
                    z-index: 100;
                    
                }
                div {
                    height: 400px;
                    width: 600px;
                    position: absolute;
                    background: rgba(0, 4, 29, 0.34);
                    top: 0px;
                }
                
                img {
                    width: 100%;
                    height: 100%;
                    &:hover {
                        background-size: 700px;
                    }
                }
                
            }
            
        }
    }


</style>

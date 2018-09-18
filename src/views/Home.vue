<template>
    <div class="home">
        <div class="home-play">
            <el-carousel trigger="click" height="800px" :interval="3000" :autoplay="false">
                <el-carousel-item v-for="item in imgs" :key="item">
                    <div class="img-background">
                        <img :src="item" alt="" width="1200" class="img" height="800px">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="home-product">
            <a href="">
                <h3>六轴无人机</h3>
                <p>Six-axis Unmanned Aerial Vehicle</p>
            </a>
            <a href="">
                <h3>无人飞艇</h3>
                <p>Unmanned Airship</p>
            </a>
           
        </div>
    
    
    </div>
</template>

<script>

    export default {
        name: 'home',
        data(){
            return {
                imgs: [
                    '/img/home-1.jpg',
                    '/img/home-2.jpg',
                    '/img/home-3.jpg',
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        margin-top: -55px;
        &-play {
            .img-background {
                background: rgb(85, 85, 85);
                height: 800px;
                .img {
                    margin: 0 auto;
                    &:hover{
                        transform: scale(1.1);
                    }
                }
                
            }
        }
        &-product {
            width: 1200px;
            margin: 0px auto;
            margin-bottom: 50px;
            a {
                height: 400px;
                display: inline-block;
                width: 49.8%;
                text-decoration: none;
                color: white;
                text-align: center;
                h3{
                    margin-top: 100px;
                }
                p{
                    margin-top: 10px;
                }
                
                &:nth-child(1){
                    background: url("../assets/img/home-2.png") ;
                    
                }
                &:nth-child(2){
                    background: url("../assets/img/home-4.jpeg");
                }
            }
            
          
            
        }
        
        /*.el-carousel__item:nth-child(2n) {*/
        /*background-color: #99a9bf;*/
        /*}*/
        
        /*.el-carousel__item:nth-child(2n+1) {*/
        /*background-color: #d3dce6;*/
        /*}*/
        
    }


</style>

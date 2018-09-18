<template>
    <div id="app">
        <nav class="nav">
            <div class="nav-container">
                <span class="logo"><img src="./assets/img/logo.png" alt=""></span>
                <el-menu
                        :default-active="activeIndex2"
                        class="nav-el-menu"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c6400"
                        text-color="#fff"
                        :router="true"
                        active-text-color="#fff">
                    <el-menu-item index="/home">Home</el-menu-item>
                    <el-submenu index="/product">
                        <template slot="title">Product</template>
                        <el-menu-item index="/product/airplane">六轴位无人机</el-menu-item>
                        <el-menu-item index="/product/airship">无人飞艇</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/service">Service</el-menu-item>
                    <el-menu-item index="/about">About</el-menu-item>
                    <el-menu-item index="/contact">Contact</el-menu-item>
                </el-menu>
            
            
            </div>
        </nav>
        <router-view class="main"></router-view>
        
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-container-list">
                    <ul>
                        <li><span>PRODUCTS</span></li>
                        <li><a href="">六轴无人机</a></li>
                        <li><a href="">无人飞艇</a></li>
                    </ul>
                    <ul>
                        <li><span>ABOUT</span></li>
                        <li><a href="">Company</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                    <ul>
                        <li><span>CONTACT</span></li>
                        <li><a>Tel:0769-12345678</a></li>
                        <li><a href="">Fac:0769-112345678</a></li>
                        <li><a href="">Address:东莞市松山湖大学创新城B1栋</a></li>
                    </ul>
                </div>
                <div class="footer-container-copyright">
                    <p>
                        Copyright © 2018 Dongguan Zhonghang Huaxun Satellite Technology Co,Ltd 版权所有
                        <a href="#/tooplate" target="_parent">隐私权政策</a>
                        | <a href="#/tooplate" target="_parent">使用条款</a></p>
                    <p>
                        <a href="http://www.miitbeian.gov.cn/?site=brandsite&amp;from=footer">粤ICP备18016887号-1</a> |
                                                                                                                   本网站直接或间接向消费者推销商品或者服务的商业宣传均属于“广告”（包装及参数、售后保障等商品信息除外）
                    </p>
                </div>
            
            
            </div>
        
        
        </footer>
    
    </div>
</template>

<script>
    export default {
        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath){
                console.log(key, keyPath);
            }
        }
    }

</script>

<style lang="scss" scoped>
    #app {
        .nav {
            width: 100%;
            position: fixed;
            height: 60px;
            z-index: 100;
            top: 0px;
            background: rgba(20, 18, 35, 0.06);
            &-container {
                margin: 0px auto;
                width: 1200px;
                
                .logo {
                    float: left;
                    padding-top: 17px;
                }
                .nav-el-menu {
                    float: right;
                    border: none;
                
                }
                
            }
            
        }
        .footer {
            height: 315px;
            background: rgb(39, 39, 39);
            &-container {
                width: 1200px;
                margin: 0px auto;
                height: 100%;
                font-size: 12px;
                &-list {
                    &::after {
                        content: "";
                        clear: both;
                        display: block;
                    }
                    
                    ul {
                        margin-top: 50px;
                        float: left;
                        width: 33%;
                        li {
                            margin-top: 20px;
                        }
                        
                        span {
                            color: white;
                        }
                        
                        a {
                            color: #919699;
                            text-decoration: none;
                        }
                        
                        a:hover {
                            color: white;
                        }
                        
                    }
                }
                &-copyright {
                    border-top: 1px #919699 solid;
                    margin-top: 20px;
                    padding-top: 20px;
                    color: #919699;
                    a {
                        color: #919699;
                        text-decoration: none;
                    }
                    
                    a:hover {
                        color: #ddd;
                    }
                    
                }
                
            }
            
        }
        
    }
    
    .el-menu-item {
        text-align: center;
        
    }
</style>

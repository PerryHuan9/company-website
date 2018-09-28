<template>
    <div id="app">
        <nav class="nav">
            <div class="nav-container">
                <div class="nav-container-logo">
                    <img src="/img/logo-white.png">
                </div>
                <div class="nav-container-menu">
                    <ul>
                        <li>
                            <router-link to="/home">{{isChinese?'主页':'Home'}}</router-link>
                        </li>
                        <li @mouseover="productOpen" @mouseout="productOpen" class="product-menu">
                            <router-link to="/product">{{isChinese?'产品':'Product'}} <i
                                    :class="isOpened?'el-icon-arrow-up':'el-icon-arrow-down'"></i></router-link>
                            <ul class="product-detail" v-show="isOpened">
                                <li>
                                    <router-link to="/product/airplane">{{isChinese?'六轴无人机':'Six-axis UAV'}}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/product/airship">{{isChinese?'平流层飞艇':'Stratospheric Airship'}}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/service">{{isChinese?'服务':'Service'}}</router-link>
                        </li>
                        <li>
                            <router-link to="/about">{{isChinese?'关于':'About'}}</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">{{isChinese?'联系':'Contact'}}</router-link>
                        </li>
                    
                    
                    </ul>
                
                
                </div>
                <div @mouseover="languageOpen" @mouseout="languageOpen" class="nav-container-language">
                    <a>Language <i class="el-icon-caret-bottom"></i></a>
                    <ul class="product-detail" v-show="isLanOpened">
                        <li>
                            <a @click="convertToEnglish">English</a>
                        </li>
                        <li>
                            <a @click="convertToChinese">中文</a>
                        </li>
                    </ul>
                </div>
            
            </div>
        
        </nav>
        <router-view class="main"></router-view>
        
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-container-list">
                    <ul>
                        <li><span>{{isChinese?'产品':'PRODUCT'}}</span></li>
                        <li>
                            <router-link to="/product/airplane">{{isChinese?'六轴无人机':'Six-axis UAV'}}</router-link>
                        </li>
                        <li>
                            <router-link to="/product/airship">{{isChinese?'平流层飞艇':'Stratospheric Airship'}}</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li><span>{{isChinese?'关于':'ABOUT'}}</span></li>
                        <li><a href="">{{isChinese?'公司':'Company'}}</a></li>
                        <li><a href="">{{isChinese?'事业':'Careers'}}</a></li>
                    </ul>
                    <ul>
                        <li><span>{{isChinese?'联系':'CONTACT'}}</span></li>
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
    import {LANGUAGE} from "./store";

    export default {
        data(){
            return {
                isOpened: false,
                isLanOpened: false,
            };
        },
        methods: {
            productOpen(){
                this.isOpened = !this.isOpened;
            },
            languageOpen(){
                this.isLanOpened = !this.isLanOpened;
            },
            convertToEnglish(){
                this.$store.commit(LANGUAGE, false);


            },
            convertToChinese(){
                this.$store.commit(LANGUAGE, true);
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
    #app {
        .nav {
            width: 100%;
            position: absolute;
            height: 60px;
            z-index: 100;
            top: 0px;
            background: rgba(20, 18, 35, 0.16);
            &-container {
                margin: 0px auto;
                width: 1200px;
                position: relative;
                &-logo {
                    float: left;
                    img {
                        position: relative;
                        line-height: 62px;
                        top: 16px;
                        height: 30px;
                        margin-left: 30px;
                    }
                    
                }
                &-menu > ul {
                    float: right;
                    & > li {
                        display: inline-block;
                        line-height: 60px;
                        text-align: center;
                        .router-link-active {
                            border-bottom: 1px red solid;
                        }
                        
                        & > a {
                            height: 60px;
                            display: block;
                            padding-left: 20px;
                            padding-right: 20px;
                            text-decoration: none;
                            color: white;
                            border: 0px;
                            outline: none;
                        }
                        &:hover {
                            background: rgba(17, 10, 13, 0.33);
                        }
                        
                    }
                    /*product菜单有下拉效果*/
                    li.product-menu {
                        position: relative;
                        transition: 1s;
                        ul {
                            position: absolute;
                            background: rgba(170, 170, 170, 0.23);
                            left: 0px;
                            right: 0px;
                            li {
                                padding-left: 0px;
                                padding-right: 0px;
                                font-size: 12px;
                                display: block;
                                .router-link-active {
                                    background-color: rgba(120, 128, 126, 0.36);
                                }
                                
                                & > a {
                                    height: 50px;
                                    display: block;
                                    text-decoration: none;
                                    color: white;
                                    line-height: 50px;
                                    border: 0px;
                                    outline: none;
                                }
                                &:hover {
                                    background: rgba(17, 10, 13, 0.33);
                                }
                            }
                        }
                        
                    }
                    
                }
                &-language {
                    position: absolute;
                    right: 50px;
                    right: -120px;
                    line-height: 55px;
                    width: 100px;
                    text-align: center;
                    a {
                        color: white;
                        font-size: 12px;
                        text-decoration: none;
                    }
                    ul {
                        position: absolute;
                        background: rgba(170, 170, 170, 0.23);
                        left: 0px;
                        right: 0px;
                        li {
                            font-size: 12px;
                            width: 100px;
                            display: block;
                            line-height: 40px;
                            & > a {
                                height: 40px;
                                display: block;
                                text-decoration: none;
                                color: white;
                                border: 0px;
                                outline: none;
                            }
                            &:hover {
                                background: rgba(17, 10, 13, 0.33);
                            }
                        }
                        
                    }
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
</style>
<style>


</style>


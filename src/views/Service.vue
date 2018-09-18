<template>
    <div class="about">
        <div class="service-head">
            <img src="/img/service-head.jpeg" alt="" width="100%" height="750px">
            <div><h1>SERVICE</h1></div>
        </div>
        <div class="service-content">
            <div class="service-content-description">
                <p>文字描述专用</p>
                <br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br>
                <p>文字描述</p>
            </div>
            <div class="service-content-photo">
                <div>
                    <img src="/img/service-1.jpg" alt="" width="100%">
                    <h3>合作<br/>cooperative</h3>
                </div>
                <div>
                    <img src="/img/service-2.jpg" alt="" width="100%">
                    <h3>互利<br/>mutual benefit</h3>
                </div>
                <div>
                    <img src="/img/service-3.jpg" alt="" width="100%">
                    <h3>共赢<br/>win-win</h3>
                </div>
                <p class="top-level"></p>
            
            </div>
        
        
        </div>
    
    </div>

</template>

<script>
    export default {
        name: "Service"
    }
</script>

<style lang="scss" scoped>
    .service {
        &-head {
            position: relative;
            div {
                height: 750px;
                width: 100%;
                position: absolute;
                background: rgba(56, 60, 60, 0.31);
                top: 0px;
                h1 {
                    color: white;
                    text-align: center;
                    font-size: 3em;
                    line-height: 750px;
                    z-index: 100;
                }
            }
            
        }
        &-content {
            &-description {
                width: 1200px;
                margin: 50px auto;
            }
            &-photo {
                height: 500px;
                &::after {
                    content: "";
                    clear: both;
                    display: block;
                }
                div {
                    display: inline-block;
                    width: 33.33%;
                    float: left;
                    img {
                        height: 500px;
                    }
                    h3 {
                        position: relative;
                        color: white;
                        font-size: 2.5em;
                        text-align: center;
                        top: -300px;
                        z-index: 100;
                    }
                    
                }
                .top-level {
                    height: 500px;
                    position: relative;
                    background: rgba(56, 60, 60, 0.31);
                }
                
            }
        }
        
    }


</style>
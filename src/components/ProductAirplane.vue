<template>
    <div class="airplane">
        <div class="airplane-head">
            <img class="bg" src="/img/home-bg.jpg" alt="">
            <img class="img" src="/img/home-1.png" alt="">
        </div>
        <div class="airplane-content">
            <div class="airplane-content-introduce">
                <img src="/img/home-5.jpg" alt="" class="airplane-photo">
                <h2>六轴无人机</h2>
                <p>
                    六轴无人机的介绍al;dalska美金考拉上电脑卡了是你的阿达说的金卡和圣诞节卡的还是
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                </p>
            </div>
            <div class="airplane-content-use">
                <h2>MULTIPLE APPLICATION</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <img src="/img/air-use-1.jpg" alt="">
                            <h3>AGRICULTURE</h3>
                        </td>
                        <td>
                            <img src="/img/air-use-2.jpg" alt="">
                            <h3>AERIAL<br>PHTOTOGRAPH</h3>
                        
                        </td>
                        <td>
                            <img src="/img/air-use-3.jpg" alt="">
                            <h3>SURVEYING<br/>MAPPING</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/img/air-use-4.jpeg" alt="">
                            <h3> SCIENTIFIC<br/>RESEARCH</h3>
                        </td>
                        <td>
                            <img src="/img/air-use-5.jpg" alt="">
                            <h3>MILITARY</h3>
                        
                        </td>
                        <td>
                            <img src="/img/air-use-6.jpg" alt="">
                            <h3>LOGISTICS</h3>
                        </td>
                    </tr>
                    </tbody>
                </table>
            
            </div>
        
        </div>
    
    
    </div>
</template>

<script>
    export default {
        name: "ProductAirplane"
    }
</script>

<style lang="scss" scoped>
    .airplane {
        &-head {
            height: 750px;
            .bg {
                width: 100%;
                height: 100%;
            }
            .img {
                width: 1200px;
                height: 750px;
                position: relative;
                margin: 0px auto;
                top: -750px;
            }
            
        }
        &-content {
            &-introduce {
                margin-top: 50px;
                .airplane-photo {
                    width: 1200px;
                    margin: 0px auto;
                    
                }
                h2 {
                    text-align: center;
                    margin-top: 50px;
                }
                p {
                    width: 1200px;
                    margin: 20px auto;
                    font-size: 18px;
                    height: 400px;
                }
                
            }
            &-use {
                width: 1200px;
                margin-top: 50px;
                margin: 0 auto;
                h2 {
                    padding-buttom: 50px;
                    text-align: center;
                }
                table {
                    width: 100%;
                    margin-top: 50px;
                    margin-bottom: 50px;
                    td {
                        float: left;
                        width: 350px;
                        height: 350px;
                        margin-top: 40px;
                        z-index: 100;
                        img {
                            width: 350px;
                            height: 350px;
                            
                        }
                        &:nth-child(1), &:nth-child(2) {
                            margin-right: 72px;
                        }
                        h3 {
                            font-size: 28px;
                            color: white;
                            position: relative;
                            top: -50%;
                            text-align: center;
                        }
                        
                    }
                    
                }
                
            }
            
        }
        
    }


</style>
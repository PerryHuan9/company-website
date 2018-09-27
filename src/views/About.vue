<template>
    <div class="about">
        <div class="about-head">
            <img src="/img/service-head.jpeg" alt="" width="100%" height="750px">
            <div><h1>{{isChinese?'关于':'ABOUT'}}</h1></div>
        </div>
        <div class="about-content">
            <div class="about-content-description">
                <p>文字描述专用</p>
                <br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br>
                <p>文字描述</p>
            </div>
        
        </div>
    
    </div>

</template>

<script>
    export default {
        computed:{
            isChinese(){
                return this.$store.state.isChinese;
            }

        }
    }
</script>

<style lang="scss" scoped>
    .about {
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
            
        }
        
    }


</style>
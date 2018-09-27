<template>
    <div class="contact">
        <div class="contact-head">
            <img src="/img/service-head.jpeg" alt="" width="100%" height="750px">
            <div><h1>{{isChinese?'联系我们':'CONTACT US'}}</h1></div>
        </div>
        <div class="contact-content">
            <div id="baidu-map" class="contact-content-map"></div>
            <div class="contact-content-address">
                <span>Tel:0769-123456789</span>
                <span>Fax:0769-123456789</span>
                <p>Address:东莞市松山湖大学创新城B1栋</p>
            </div>
            <div class="contact-content-form">
                <el-form ref="form" :model="form">
                    <el-form-item>
                        <el-col :span="11">
                            <el-input v-model="name" placeholder="Name"></el-input>
                        </el-col>
                        <el-col :span="13">
                            <el-input v-model="email" placeholder="Email Address"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="subject" placeholder="Subject"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="textarea" v-model="message" placeholder="Message"></el-input>
                    </el-form-item>
                </el-form>
            
            </div>
        
        </div>
    
    </div>

</template>

<script>
    export default {
        data(){
            return {
                name: '',
                email: '',
                subject: '',
                message: '',
                form:null,
            }
        },
        mounted(){
            this.initMap();
        },
        methods: {
            initMap(){
                let map = new BMap.Map("baidu-map");    // 创建Map实例
                let point = new BMap.Point(113.871326, 22.907438);
                map.centerAndZoom(point, 17);  // 初始化地图,设置中心点坐标和地图级别
                //添加地图类型控件
                map.addControl(new BMap.MapTypeControl({
                    mapTypes: [
                        BMAP_NORMAL_MAP,
                        BMAP_HYBRID_MAP
                    ]
                }));
                map.addControl(new BMap.ScaleControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT,
                    offset: new BMap.Size(10, 45),
                }));
                map.addControl(new BMap.NavigationControl());
                map.setCurrentCity("东莞");          // 设置地图显示的城市 此项是必须设置的
                // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                const marker = new BMap.Marker(point);
                map.addOverlay(marker);
                const label = new BMap.Label("东莞市中航华讯卫星技术有限公司", {offset: new BMap.Size(20, -10)});
                marker.setLabel(label);
            },
        },
         computed:{
            isChinese(){
                return this.$store.state.isChinese;
            }

        }

    }
</script>

<style lang="scss" scoped>
    
    
    .contact {
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
            &-map {
                width: 1200px;
                margin: 0px auto;
                height: 600px;
                margin-top: 50px;
                
            }
            
            &-address {
                width: 1200px;
                margin: 20px auto;
                span {
                    font-size: 18px;
                }
                span:nth-of-type(2) {
                    margin-left: 100px;
                }
                p {
                    margin-top: 20px;
                    font-size: 18px;
                }
                
            }
            &-form {
                width: 1200px;
                margin: 100px auto;
                .el-form-item {
                
                }
                .el-col{
                    /*margin-left: 30px;*/
                }
            }
            
        }
        
    }


</style>

<style>
    /*取消百度地图备案的显示*/
    .anchorBL {
        display: none;
    }
    
    .el-input__inner {
        height: 50px;
        background: rgb(227, 227, 227);
    }
    
    .el-textarea__inner {
        height: 100px;
        background: rgb(227, 227, 227);
    }
    
    /*input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {*/
        /*!* WebKit browsers *!*/
        /*color: #661326;*/
    /*}*/
    /*input:-moz-placeholder, textarea:-moz-placeholder {*/
        /*!* Mozilla Firefox 4 to 18 *!*/
        /*color: #66162b;*/
    /*}*/
    /*input::-moz-placeholder, textarea::-moz-placeholder {*/
        /*!* Mozilla Firefox 19+ *!*/
        /*color: #661614;*/
    /*}*/
    /*input:-ms-input-placeholder, textarea:-ms-input-placeholder {*/
        /*!* Internet Explorer 10+ *!*/
        /*color: #66060c;*/
    /*}*/



</style>
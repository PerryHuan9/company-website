<template>
    <div id="app">
        <nav class="nav">
            <router-link to="/home">Home</router-link>
            <router-link to="/product">Product</router-link>
            <router-link to="/service">Service</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
        <router-view class="main"></router-view>
        
        <footer class="footer">
        
        
        </footer>
    
    </div>
</template>

<script>
    export default {}

</script>

<style lang="scss" scoped>
    #app {
        .nav {
            height: 55px;
            background: rgba(20, 18, 35, 0.36);
            .router-link-active {
                border-bottom: 2px red solid;
            }
            a {
                text-decoration: none;
                color: white;
                padding: 10px;
                line-height: 51px;
            }
            
        }
        
    }
</style>

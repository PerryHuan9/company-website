import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "./assets/style/reset.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store, {LANGUAGE} from './store'

Vue.use(ElementUI);

Vue.config.productionTip = false;

let lang = navigator.language || navigator.userLanguage;//常规浏览器语言和IE浏览器
lang = lang.substr(0, 2);//截取lang前2位字符
if(lang === 'zh'){
    store.commit(LANGUAGE, true);
} else{
    store.commit(LANGUAGE, false);
}
console.log('language:',lang);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

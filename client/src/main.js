import {createApp} from 'vue';
import store from './store/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';


const app = createApp(App).use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');

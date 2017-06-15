import axios from './axios';
import nprogress from './nprogress';


export default {
    install(Vue) {
        axios(Vue);
        nprogress(Vue);
    }
}
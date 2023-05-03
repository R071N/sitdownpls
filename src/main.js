import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'

createApp(App).use(store).use(router)
    .use(
        VueTippy,
        {
            component: 'tippy', // => <tippy/>
            defaultProps: {
                allowHTML: true,
                placement: 'top',
                arrow: true,
                animation: 'scale',
                theme: 'material',
            },
        }
    )
    .mount('#app')

import { createRouter,createWebHistory } from "vue-router";
import CoachDetail from './page/Coaches/CoachDetail.vue'
import CoachesList from './page/Coaches/CoachesList.vue'
import CoachRegister from './page/Coaches/CoachRegister.vue'
import ContactCoach from './page/request/ContactCoach.vue'
import RequestRigester from './page/request/RequestRigester.vue'
import NotFound from './page/NotFound.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[{
        path:'/', redirect:'/coach'
    },{
        path:'/coach', component:CoachesList,
    },
    {
        path:'/coach/:id', component:CoachDetail, children:[{
            path:'contact', component:ContactCoach
        }]
    },
    {
        path:'/register', component: CoachRegister
    },{
        path:'/requests', component:RequestRigester
    },
    {
        path:'/:notFound(.*)', component:NotFound
    }
]
})
export default router;
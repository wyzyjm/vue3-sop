export default [
    {
        path: 'recommend',
        meta:{
            title:'网站推荐'
        },
        component: () => import(/* webpackChunkName: "recommend" */ '@/views/case-center/recommend')
    }
]
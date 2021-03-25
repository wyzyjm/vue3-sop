import Store from '@/store'
export default (key)=>{
    const btns=Store.state.resource.list.find(v=>v.resourceCode==='111')
    if(btns){
        return btns.children.find(v=>v.resourceCode===key)
    }
    return false
}
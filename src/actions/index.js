//type  'add'  'del'  'turn'
export function todoActionCreate(type,value){
    return {
        type,
        data:value
    }
}
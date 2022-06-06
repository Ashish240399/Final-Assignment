export const PAGE_CHANGE="PAGE_CHANGE";
export const pageChange=(num)=>{
    return {
        type:PAGE_CHANGE,
        payload:num
    }
}
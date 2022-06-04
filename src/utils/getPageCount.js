export const getPageCount = (totalpages, limit)=>{
  return Math.ceil(totalpages/limit)
}
// 把给定对象转换成查询参数字符串
const objToSearchStr=(obj:Record<string,string|number>)=>{
  let res=[];
  for(let key in obj){
    res.push(`${key}=${obj[key]}`)
  }
  return res.join("&")
}

export default objToSearchStr;
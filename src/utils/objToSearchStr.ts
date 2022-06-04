// 把给定对象转换成查询参数字符串
const objToSearchStr = (obj: Record<string, string | number>) => {
  const res = [];
  for (const key in obj) {
    res.push(`${key}=${obj[key]}`);
  }
  return res.join("&");
};

export default objToSearchStr;

export function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const englishMonth = monthNames[month - 1];
  const day = date.getDate();
  return  day + ' ' + englishMonth + ', ' + year
}

// debounce function
export function debounce(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}


export function formatDateV2(date) {
  // 创建一个Date对象
  let d = new Date(date);
  // 使用toLocaleString方法返回本地时间字符串
  let localTime = d.toLocaleString("zh-CN", {year: "numeric", month: "2-digit", day: "2-digit"});
  // 去掉字符串中的斜杠和空格
  let formattedDate = localTime.replace(/\//g, "-").replace(/\s/g, "");
  // 返回格式化后的日期
  return formattedDate;
}
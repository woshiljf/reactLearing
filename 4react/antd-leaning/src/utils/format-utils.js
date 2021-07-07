export function getSizeImage (imgUrl, size) {
  return `${imgUrl}?param=${size}y${size}`;
}

export function getCount (count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

// 获取getPlayUrl，播放url
export function getPlayUrl (id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export function formatDate (time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

export function formateMin (time) {
  var t = new Date(time);
  var m = t.getMinutes();
  var s = t.getSeconds();
  m = m > 9 ? m : "0" + m;
  s = s > 9 ? s : "0" + s;
  return m + ":" + s;

}

export function formData2 (time) {
  var now = new Date(time);
  var year = now.getFullYear(); //取得4位数的年份
  var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
  var date = now.getDate(); //返回日期月份中的天数（1到31）
  var hour = now.getHours(); //返回日期中的小时数（0到23）
  var minute = now.getMinutes(); //返回日期中的分钟数（0到59）
  var second = now.getSeconds(); //返回日期中的秒数（0到59）
  return (
    year +
    "-" +
    month +
    "-" +
    date +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second
  );
}


function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};

export function formatMonthDay (time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond (time) {
  return formatDate(time, "mm:ss");
}

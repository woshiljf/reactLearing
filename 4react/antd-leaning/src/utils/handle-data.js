import { formateMin } from './format-utils'

export function handleSongsCategory (data) {
  // 1.获取所有的类别
  const category = data.categories || []
  // 2.创建类别数据结构
  const categoryData = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: []
    }
  })

  // 3.将subs添加到对应的类别中
  for (let item of data.sub) {
    categoryData[item.category].subs.push(item);
  }

  return categoryData;
}

// 获取歌手字母类别
export function generateSingerAlpha () {
  var alphabets = ["-1"];
  var start = 'A'.charCodeAt(0);
  var last = 'Z'.charCodeAt(0);
  for (var i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }

  alphabets.push("0");

  return alphabets;
}

// 歌单列表
export function dataTableHandle (data) {
  console.log(data)
  var dataList = [];
  for (let i = 0; i < data.length; i++) {
    var obj = {};
    obj.index = i + 1
    obj.title = data[i].name;
    obj.singer = data[i].ar[0].name;
    obj.track = data[i].al.name;
    // obj.time = data[i].dt;
    obj.time = formateMin(data[i].dt)
    obj.key = data[i].id;
    dataList.push(obj);
  }

  return dataList
}



export const singerAlphas = generateSingerAlpha();

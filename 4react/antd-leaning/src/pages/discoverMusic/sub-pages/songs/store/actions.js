import * as actionTypes from './constants';
import { PER_PAGE_NUMBER } from './constants';

import {
  getSongCategory,
  getSongCategoryList
} from "@/services/songs";
import {
  handleSongsCategory
} from "@/utils/handle-data";

const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})

export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

export const getCategory = () => {
  return dispatch => {
    getSongCategory().then(res => {

      console.log('小狗2', res);
      const categoryData = handleSongsCategory(res);
      console.log('小狗', categoryData)
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

// 获取歌单数据
export const getSongList = (page) => {
  return (dispatch, getState) => {
    // 1.获取currentCategory
    // 2 获取选取的歌单数据
    const name = getState().songs.get("currentCategory");
    // 2.获取数据
    getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {



      dispatch(changeSongListAction(res));


    })

  }
}

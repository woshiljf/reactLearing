import { ADDCOMMENT, DELETECOMMENT, RECVECOMMENTS } from "./action-types";

// 定义同步修改同步state状态
export const addcomment = (comment) => ({ type: ADDCOMMENT, data: comment })
export const deletecomment = (index) => ({ type: DELETECOMMENT, data: index })

const reciveComment = (comments) => ({ type: RECVECOMMENTS, data: comments })

// 异步状态

export const getcommentAsync = () => {

  return (dispatch) => {

    setTimeout(() => {

      const comments = [
        { "name": '小狗', content: '今天的天气真好，你说对不对' },
        { "name": '小猪', content: '今天的天气真好，你说对不对' }
      ]

      dispatch(reciveComment(comments))

    }, 1000)
  }
}


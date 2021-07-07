import React, { memo, useEffect, useState, createElement } from 'react';

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Comment, Tooltip, Avatar } from 'antd';

import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { formData2 } from '@/utils/format-utils.js'
import {
  SingCommentContainer
} from './styled.js'

import { getComment } from '../../store/actions'

const SingComment = memo((props) => {
  const playId = props.playId
  const state = useSelector(state => {
    return {
      comments: state.playList.get('playListComment')
    }
  }, shallowEqual)

  let hotComments = state.comments.hotComments
  let total = state.comments.total
  let comments = []

  try {
    comments = state.comments.comments || []
  } catch (error) {

    comments = []
  }

  // ----------------------------

  var index = 0
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = (data1) => {

    console.log(data1)


    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };


  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={(event, data) => { like(data) }}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>
  ];






  const dispatch = useDispatch()
  // 首次渲染通过使用dispath获取数据
  // 获取歌单数据
  // 数据变化会收听到，重新加载组件
  useEffect(() => {
    dispatch(getComment(playId))
  }, [dispatch])

  return (
    <SingCommentContainer>

      <div className="commentLeft">
        <span className="left1">评论</span>
        <span className="left2">共 {total} 条评论</span>
      </div>
      <div className="hotComment-box"></div>
      <div className="comments-box">
        {
          comments.map((item) => {

            return (
              <div className="commentBox">
                <Comment
                  actions={actions}
                  author={<a>{item.user.nickname}</a>}
                  avatar={
                    <Avatar
                      src={item.user.avatarUrl}
                      alt="Han Solo"
                    />
                  }
                  content={
                    <p>
                      {item.content}
                    </p>
                  }
                  datetime={
                    <Tooltip title={formData2(item.time)}>
                      <span>{formData2(item.time)}</span>
                    </Tooltip>
                  }
                />
              </div>
            )


          })
        }



      </div>



    </SingCommentContainer>
  );
});

export default SingComment;
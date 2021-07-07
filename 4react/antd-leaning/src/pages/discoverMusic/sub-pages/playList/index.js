import React, { memo, useEffect } from 'react';

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import PlayListHeader from './sub-pags/playList-header'
import PlayListTable from './sub-pags/playList-table'
import PlayListComment from './sub-pags/playList-comment'
// 样式组件
import {
  PlayListContainer,
  ContentCenter,
  PlayListLeft,
  PlayListRight
} from './styled'

// 获取歌单数据的service
import { getPlayList } from './store/actions'

const PlayList = memo((props) => {

  // 获取播放歌单ID
  const playId = props.match.params.id
  // 组件加载，获取数据，但此时数据可能是空的，容易导致错误。
  const state = useSelector(state => {
    return {
      playList: state.playList.get('playListDetail')
    }
  }, shallowEqual)

  const dataPlayList = state.playList.playlist
  // 函数组件内，使用useDispatch，获取异步的数据
  const dispatch = useDispatch()
  // 首次渲染通过使用dispath获取数据
  // 获取歌单数据
  // 数据变化会收听到，重新加载组件
  // dom更新完毕之后执行，之后每次dom更新都会执行
  useEffect(() => {
    // 获取数据，相当于在componentDidMount发起异步请求（副作用）
    dispatch(getPlayList(playId))
  }, [dispatch])

  let headerData = {}
  let tableData = {}
  try {

    headerData = {
      coverImgUrl: dataPlayList.coverImgUrl,
      description: dataPlayList.description,
      tags: dataPlayList.tags,
      creator: dataPlayList.creator,
      name: dataPlayList.name
    }

    tableData = {
      tracks: dataPlayList.tracks,
      trackCount: dataPlayList.trackCount
    }

  } catch (error) {

    headerData = {
      coverImgUrl: '',
      description: '秋刀鱼的滋味',
      tags: ['小狗'],
      creator: '小猫',
      name: '龙卷风'
    }
    tableData = {
      tracks: [],
      trackCount: 1000
    }
  }


  return (
    <PlayListContainer className='wrap-v2'>
      <ContentCenter>
        {/* 左边歌单播放 */}
        <PlayListLeft>

          <PlayListHeader headerData={headerData} ></PlayListHeader>

          <PlayListTable tableData={tableData}> </PlayListTable>

          <PlayListComment playId={playId}></PlayListComment>

        </PlayListLeft>


        {/* 右边推荐 */}

        <PlayListRight></PlayListRight>


      </ContentCenter>

    </PlayListContainer>
  );
});

export default PlayList;
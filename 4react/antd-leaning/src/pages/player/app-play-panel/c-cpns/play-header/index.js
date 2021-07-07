import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { changePlayListAction } from "../../../store/actionCreators";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';
import { song } from './constant'
export default memo(function HYPlayHeader (props) {
  console.log(props);
  const dispatch = useDispatch()
  const { playList, currentSong } = useSelector(state => ({
    playList: state.player.get("playList"),
    currentSong: state.player.get("currentSong")
  }), shallowEqual);
  // 清除播放列表
  const handleClear = function () {
    // 清空播放列表
    dispatch(changePlayListAction(song))

  }
  // 关掉面板
  const closePanel = function () {
    const { showPanel } = props
    showPanel.setShowPanel(false)
  }
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button className='collectAll'>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button className="clearPlayList" onClick={handleClear}>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        <span className="titleSong">{currentSong.name}</span>
        <span className="closePanel" onClick={closePanel}>X</span>
      </HeaderRight>
    </HeaderWrapper>
  )
})

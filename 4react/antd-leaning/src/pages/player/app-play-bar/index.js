import React, { memo, useRef, useEffect, useState, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { message } from 'antd';

import { getPlayUrl, formatMinuteSecond } from '@/utils/format-utils';
import {
  getSongDetailAction,
  changeCurrentLyricIndexAction,
  changePlaySequenceAction,
  changePlaySongAction
} from '../store/actionCreators';

import HYAppPlayPanel from '../app-play-panel'
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function HYAppPlaybar () {
  // props and state
  // 使用useState，保存状态
  // const [text,setText] = useState('demo')
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // redux hooks
  // 获取redux保存的state状态
  const {
    currentSong,
    currentLyrics,
    currentLyricIndex,
    playList,
    playSequence
  } = useSelector(state => ({
    currentSong: state.player.get("currentSong"),
    currentLyrics: state.player.get("currentLyrics"),
    currentLyricIndex: state.player.get("currentLyricIndex"),
    playList: state.player.get("playList"),
    playSequence: state.player.get("playSequence")
  }), shallowEqual);

  // dispatch
  const dispatch = useDispatch();
  // other hooks
  // 获取audioRef播放标签audio的属性
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  // currentSong改变，触发渲染
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
    setDuration(currentSong.dt);
  }, [currentSong]);

  // 其他业务
  const play = useCallback(() => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(err => {
      setIsPlaying(false);
    });
  }, [isPlaying]);

  // 播放导航条
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime);
      setProgress((currentTime * 1000) / duration * 100);
    }
    let lrcLength = currentLyrics.length;
    let i = 0;
    for (; i < lrcLength; i++) {
      const lrcTime = currentLyrics[i].time;
      if (currentTime * 1000 < lrcTime) {
        break
      }
    }

    const finalIndex = i - 1;
    if (finalIndex !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndexAction(finalIndex));
      // 显示歌词
      try {
        message.open({
          content: currentLyrics[finalIndex].content,
          key: "lyric",
          duration: 0,
          className: 'lyric-message',
        })
      } catch (error) {
        message.open({
          content: "黑色幽默",
          key: "lyric",
          duration: 0,
          className: 'lyric-message',
        })

      }


    }
  }

  const timeEnded = () => {
    if (playSequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      // 播放结束，下一曲自动播放
      dispatch(changePlaySongAction(1));
    }
  }

  const sliderChange = useCallback((value) => {
    setProgress(value);
    const time = value / 100.0 * duration / 1000;
    setCurrentTime(time);
    setIsChanging(true);
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    const time = value / 100.0 * duration / 1000;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
    setIsChanging(false);

    if (!isPlaying) {
      play();
    }
  }, [duration, isPlaying, play]);

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        {/* 播放控制，左右切换，中间播放暂停 */}
        <Control isPlaying={isPlaying}>
          {/* 上一曲 */}
          <button className="sprite_playbar btn prev"
            onClick={e => dispatch(changePlaySongAction(-1))}></button>
          {/* 播放歌曲 */}
          <button className="sprite_playbar btn play" onClick={e => play()}></button>
          {/* 下一曲 */}
          <button className="sprite_playbar btn next"
            onClick={e => dispatch(changePlaySongAction(1))}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            {/* 播放歌曲图片信息 */}
            <NavLink to="/discover/player">
              <img className='picUrl' src={currentSong.al.picUrl} alt="歌曲图" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar[0].name}</span>
            </div>
            <div className="progress">
              {/* 使用滑块模拟播放进度 */}
              <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime * 1000)}</span>
                <span className="divider">/</span>
                <span className="total-time">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={playSequence}>
          <div className="left">
            {/* 添加 */}
            <button className="sprite_playbar btn favor"></button>
            {/* 分享 */}
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            {/* 音量调节 */}
            <button className="sprite_playbar btn volume"></button>
            {/* 控制播放，单曲循环，列表循环，随机循环 */}
            <button className="sprite_playbar btn loop"
              onClick={e => dispatch(changePlaySequenceAction(playSequence + 1))}></button>
            <button className="sprite_playbar btn playlist"
              onClick={e => setShowPanel(!showPanel)}>
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
      {/* 是否显示播放面板 */}
      {showPanel && <HYAppPlayPanel setShowPanel={setShowPanel} />}
    </PlaybarWrapper>
  )
})

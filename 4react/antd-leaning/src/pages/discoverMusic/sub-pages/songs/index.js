import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import {
  getCategory,
  getSongList,
  changeCurrentCategoryAction
} from "./store/actions";

import HYSongsHeader from "./sub-pages/songs-header";
import HYSongsList from './sub-pages/songs-list';
import {
  SongsWrapper
} from "./styled"

export default memo(function HYSongs () {
  // redux
  const dispatch = useDispatch();
  const cat = useLocation().cat;

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat));
  }, [dispatch, cat]);

  // hooks
  // 首次加载页面，获取类别，获取歌单列表
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSongList(0));
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      {/* 歌单头部 */}
      <HYSongsHeader />
      {/* 歌单 */}
      <HYSongsList />
    </SongsWrapper>
  )
})

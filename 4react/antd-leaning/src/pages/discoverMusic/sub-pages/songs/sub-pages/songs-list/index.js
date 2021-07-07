import React, { useState, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from '../../store/constants';
import { getSongList } from "../../store/actions";

import HYThemeCover from '@/components/theme-cover';
import HYPagination from '@/components/pagination';
import {
  SongListWrapper
} from "./style";

export default memo(function HYSongsList () {
  // hooks
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  // 获取歌单列表
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.songs.get("categorySongs")
  }), shallowEqual);
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;
  const dispatch = useDispatch();

  function onPageChange (page, pageSize) {
    setCurrentPage(page);
    dispatch(getSongList(page));
  }

  console.log('歌单', songList);

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              <HYThemeCover info={item} key={item.id} link={`/discover/playList/${item.id}`} right="30px" />
            )
          })
        }
      </div>
      <HYPagination currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange} />
    </SongListWrapper>
  )
})

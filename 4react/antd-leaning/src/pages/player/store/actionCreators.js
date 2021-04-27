import * as actionTypes from './constants';
// 获取歌曲详情，歌词，相似播放列表，相似歌曲
import { getSongDetail, getLyric, getSimiPlaylist, getSimiSong } from '@/services/player';
import { parseLyric } from '@/utils/lrc-parse';

// 修改当前播放的歌曲信息
const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song
});

// 同步改变歌曲播放索引Id
const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
});

export const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: playList
})

const changeLyricsAction = (lyrics) => ({
  type: actionTypes.CHANGE_LYRICS,
  lyrics
})

const changeSimiPlaylistAction = (res) => ({
  type: actionTypes.CHANGE_SIMI_PLAYLIST,
  simiPlaylist: res.playlists
})

const changeSimiSongsAction = (res) => ({
  type: actionTypes.CHANGE_SIMI_SONGS,
  simiSongs: res.songs
})

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

export const changePlaySequenceAction = (currentSequence) => {
  if (currentSequence === 3) currentSequence = 0;
  return {
    type: actionTypes.CHANGE_PLAY_SEQUENCE,
    sequence: currentSequence
  }
}

export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1.获取当前的index
    let currentSongIndex = getState().player.get("currentSongIndex")
    const playSequence = getState().player.get("playSequence");
    const playList = getState().player.get("playList");
    // 2.判断当前播放列表
    switch (playSequence) {
      case 1:
        currentSongIndex = Math.floor(Math.random() * playList.length);
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex === playList.length) currentSongIndex = 0;
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
    }

    // 3.处理修改数据
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(currentSong));

    // 获取当前的歌词,并且解析
    getLyric(currentSong.id).then(res => {
      const lrcString = res.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(changeLyricsAction(lyrics));
    });
  }
}

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.判断是否歌曲存在playList中
    const playList = getState().player.get("playList");
    let songIndex = -1
    songIndex = playList.findIndex(song => song.id === ids);
    if (songIndex !== -1) {
      // 找到数据，播放列表里面有数据，改变当前的播放currentSong
      const currentSong = playList[songIndex];
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(currentSong));
    } else {
      // 未找到数据，发起请求，获取歌曲播放信息
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        // 1.添加到playList中
        console.log('发请求了吗');
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        // 2.改变当前index
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }

    // 获取当前的歌词,并且解析
    getLyric(ids).then(res => {
      const lrcString = res.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(changeLyricsAction(lyrics));
    });
  }
}

export const getSimiPlaylistAction = () => {
  return (dispatch, getState) => {
    const id = getState().player.get("currentSong").id;
    if (!id) return;

    getSimiPlaylist(id).then(res => {
      dispatch(changeSimiPlaylistAction(res));
    })
  }
}

export const getSimiSongAction = () => {
  return (dispatch, getState) => {
    const id = getState().player.get("currentSong").id;
    if (!id) return;

    getSimiSong(id).then(res => {
      dispatch(changeSimiSongsAction(res));
    })
  }
}


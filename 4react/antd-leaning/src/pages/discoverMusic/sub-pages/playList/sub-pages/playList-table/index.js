import React, { memo } from 'react';

import { getSongDetailAction } from '@/pages/player/store';
import { useDispatch } from 'react-redux'
import { Table } from 'antd'
import { SinegerTableContainer } from './styled'
import { dataTableHandle } from '@/utils/handle-data.js'

const SingerTable = memo((props) => {

  var singerLists = props.tableData
  var filterData = dataTableHandle(singerLists.tracks)
  const dataSource = filterData
  const dispatch = useDispatch()
  // 播放歌曲
  const getColum = function (data, row) {

    let singId = row.key

    dispatch(getSongDetailAction(singId))

  }

  const columns = [
    {
      title: '',
      dataIndex: 'index',
      key: 'index',
      render: (data, row) =>
        <div>
          {/*通过点击事件传递数据*/}
          <button className=" btn sprite_02 play" onClick={() => {
            getColum(data, row)
          }}></button>
        </div>

    },
    {
      title: '歌曲标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '时长',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '歌手',
      dataIndex: 'singer',
      key: 'singer',

    },
    {
      title: "专辑",
      dataIndex: 'track',
      key: 'tracks'
    },
  ];


  return (
    <SinegerTableContainer>

      <div className="tableHeader">

        <div className="headerLeft">
          <span className="left1">歌曲列表</span>
          <span className="left2"> {singerLists.trackCount} 首歌曲</span>
        </div>

        <div className="headerLeft">
          <span>播放：</span>
          <span>309883</span>
          <span>次</span>
        </div>
      </div>
      <div className="table">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false} bordered={true}
          size="small"
        />
      </div>
    </SinegerTableContainer>
  );
});

export default SingerTable;
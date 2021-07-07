import React, { memo } from 'react';

import { Image, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { SinegerHeaderWrapper, SingerHeaderLeft, SingerHeaderright } from "./styled";

const SingerHeader = memo((props) => {


  let playListHeader = {}
  try {
    playListHeader = props.headerData
  } catch (error) {

  }
  return (
    <SinegerHeaderWrapper>
      <SingerHeaderLeft>
        <div className="imgBox">
          <Image
            width={200}
            src={playListHeader.coverImgUrl}
          ></Image>
        </div>
      </SingerHeaderLeft>
      <SingerHeaderright>

        <div className="title">
          <span className=" playIcon sprite_icon2"></span>
          <span>{playListHeader.name}</span>
        </div>
        <div className="creator">
          <img
            src={playListHeader.creator.avatarUrl}
          ></img>
          <span>
            {playListHeader.creator.nickname}
          </span>
          <span>  2021-05-10 创建</span>
        </div>
        <div className="options">

          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>

        </div>
        <div className="tags">

          <span>标签：</span>

          {
            playListHeader.tags.map((item) => {

              return (
                <span className='tag' key={item}>{item}</span>
              )

            })
          }

        </div>
        <div className="descriptions">

          <b>介绍</b>
          <span>{playListHeader.description}</span>
        </div>

      </SingerHeaderright>
    </SinegerHeaderWrapper>
  );
});

export default SingerHeader;
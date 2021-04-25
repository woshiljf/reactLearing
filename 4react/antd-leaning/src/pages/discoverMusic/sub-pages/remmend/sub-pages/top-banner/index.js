import React, { memo, useEffect, useCallback, useState, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// 导入antd的轮播图组件

import {
  getBanner
} from '../../store/actions';

import { Carousel } from 'antd'
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './styled.js';

const TopBanner = memo(function TopBanner () {

  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerRef = useRef();

  const dispatch = useDispatch();

  // 请求数据
  useEffect(() => {

    dispatch(getBanner());

  }, [dispatch]);


  // 获取状态改变的state
  // const stateData = useSelector(state => {
  //   return { banners: state.getIn(["recommend", "topBanners"]) }
  // }, shallowEqual)

  const state = useSelector(state => {
    return {
      banners: state.recommend.get('topBanners')
    }
  }, shallowEqual)
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(from);
    }, 0);
  }, []);

  // 获取背景图片
  const bgImage = state.banners[currentIndex] && (state.banners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (

    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay effect="fade" beforeChange={bannerChange} ref={bannerRef}>
            {
              state.banners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl className="control">
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>


  )
})

export default TopBanner


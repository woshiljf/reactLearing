import { lazy } from "react";
import { Redirect } from "react-router-dom";

// 使用懒加载的方式
// const Mymusic = lazy(() => import('../pages/playMusic'))
// const Mylike = lazy(() => import('../pages/like'))
const DiscoverMusic = lazy(() => import('@/pages/discoverMusic'))
const MyFriend = lazy(() => import('@/pages/myFriend'))
const MyMusic = lazy(() => import('@/pages/myMusic'))
const RecommendMusic = lazy(() => import('@/pages/discoverMusic/sub-pages/remmend'))
const Songs = lazy(_ => import("@/pages/discoverMusic/sub-pages/songs"));
const PlayList = lazy(_ => import('@/pages/discoverMusic/sub-pages/playList'))
export default [

  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: DiscoverMusic,
    routes: [

      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"} />
        )
      },
      {
        path: "/discover/recommend",
        component: RecommendMusic
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/playList/:id',
        component: PlayList
      }
    ]
  },


  // 平行路由
  {
    path: "/friend",
    component: MyFriend
  },
  {
    path: "/mine",
    component: MyMusic
  }



]
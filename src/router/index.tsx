import React, { lazy } from 'react'
import type { RouteObject} from 'react-router-dom'
import { Navigate } from 'react-router-dom'

// import Discover from '@/views/discover'
// import Mine from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'
// import Recommend from '@/views/discover/child-views/recommend'

const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const Album = lazy(() => import('@/views/discover/child-views/album'))
const Artist = lazy(() => import('@/views/discover/child-views/artist'))
const Radio = lazy(() => import('@/views/discover/child-views/radio'))
const Ranking = lazy(() => import('@/views/discover/child-views/ranking'))
const Recommend = lazy(() => import('@/views/discover/child-views/recommend'))
const Songs = lazy(() => import('@/views/discover/child-views/songs'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover"/>
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend/>
      },
      {
        path: '/discover/ranking',
        element: <Ranking/>
      },
      {
        path: '/discover/songs',
        element: <Songs/>
      },
      {
        path: '/discover/ranking',
        element: <Ranking/>
      },
      {
        path: '/discover/ranking',
        element: <Ranking/>
      },
      {
        path: '/discover/radio',
        element: <Radio/>
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine/>
  },
  {
    path: '/focus',
    element: <Focus/>
  },
  {
    path: '/download',
    element: <Download/>
  }
]


export default routes

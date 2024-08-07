import React from 'react'
import { Feed } from './Feed'


const DUMMY_POST = [
        
    {
        id:1,
        title: 'Hydrogen Bond',
        date:"12 Nov",
        media:'/assets/gym.jpg',
        caption:'I love going to the gym, it makes me feel confident',
        likeCount:34,
        commentCount:23
      },
      {
        id:2,
        title:'Sean Parker',
        date:'today',
        media:'/assets/happy.jpg',
        caption:'Happiness is underrated, i guess it depends on how one defines it.',
        likeCount:124,
        commentCount:77
      }
  ]


export const UserFeed = () => {
  return (
    <Feed items={DUMMY_POST}/>
  )
}

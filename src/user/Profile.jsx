import React from 'react'
import { SimpleAppBar } from '../components/SimpleAppBar'
import { ProfileUI } from '../components/ProfileUI'

export const Profile = () => {
  return (
    <>
     <SimpleAppBar pageName="Profile" />
    <ProfileUI/>
    </>
   
  )
}

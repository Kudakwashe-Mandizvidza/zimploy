import React from 'react'
import { BottomNav } from '../components/BottomNav'
import { SimpleAppBar } from '../components/SimpleAppBar'
import { DashboardMenuList } from '../components/DashboardMenuList'

export const DashBoard = () => {
  return (
    <>
    <SimpleAppBar pageName="Dashboard" />
    <DashboardMenuList/>
    <BottomNav/>
    </>
   
  )
}

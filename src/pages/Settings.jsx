import React from 'react'
import { SimpleAppBar } from '../components/SimpleAppBar'
import { SettingsList } from '../components/SettingsList'

export const Settings = () => {
  return (
    <>
    <SimpleAppBar pageName="Settings" />
    <SettingsList/>
    </>
    
  )
}

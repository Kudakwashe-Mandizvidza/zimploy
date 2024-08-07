import { Container } from '@mui/material'
import React from 'react'
import NotificationItem from './NotificationItem'

export const NotificationList = () => {
  return (
    <Container sx={{ marginTop: "59px", width: "100%" }} >
        <NotificationItem
        senderName="AcoBank"
        avatarUrl="/assets/african.jpg"
        message="We are hiring experienced Accountants, with a degree in Accounting, or equivalent"
        notificationCount={2}
        date="Mon"
        notificationType="partTime"
      />
      <NotificationItem
        senderName="Deltap Ltd Pvt"
        avatarUrl="url2"
        message="Recruition in progress, recruiting Chemical Engineering interns, who would like to  get hands-on job training and job experience."
        notificationCount={4}
        date="Sun"
        notificationType="internship"
      />
      <NotificationItem
        senderName="Harare Software Developers"
        avatarUrl="url3"
        message="We are looking for two frontend developers and three backened developers"
        notificationCount={9}
        date="Thursday"
        notificationType="fullTime"
      />
      <NotificationItem
        senderName="Zim Writers"
        avatarUrl="url4"
        message="We need freelance article writers asap! Passive income is pretty favourable"
        notificationCount={3}
        date="Friday"
        notificationType="freelance"
      />
      <NotificationItem
        senderName="Muhammad Horseman"
        avatarUrl="url5"
        message="We are hiring general workers, cleaners, offloaders, handy-mans "
        notificationCount={3}
        date="Feb 18"
        notificationType="fullTime"
      />
      <NotificationItem
        senderName="Dairiplats"
        avatarUrl="url6"
        message="5 Dairiworkers needed, job requirements in the description box below "
        notificationCount={12}
        date="Feb 20"
        notificationType="internship"
      />
    </Container>
  )
}

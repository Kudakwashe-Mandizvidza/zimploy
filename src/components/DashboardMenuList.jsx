import React from 'react'
import { DashboardMenu } from './DashboardMenu'
import { Container } from '@mui/material'
import {  useNavigate } from 'react-router-dom'

export const DashboardMenuList = () => {
  const navigate = useNavigate();

  const handleAppliedJobs = ()=>{
    navigate('/dashboard/appliedJobs');
  };

  const handleLatestJobs = ()=>{
    navigate('/dashboard/latestJobs');
  };

  const handleJobOffers = ()=>{
    navigate('/dashboard/jobOffers');
  };

  const handleApplicants = ()=>{
    navigate('/dashboard/applicants');
  };

  const handleWishList = ()=>{
    navigate('/wishlist');
  };



  return (
    <Container sx={{marginTop:'50px'}} >
        <DashboardMenu MenuName="Applied Jobs" jobCount={5} onClick={handleAppliedJobs}/>
        <DashboardMenu MenuName="Latest Jobs" jobCount={12} onClick={handleLatestJobs} />
        <DashboardMenu MenuName="Wishlist" jobCount={8} onClick={handleWishList} />
        <DashboardMenu MenuName="Job offer" jobCount={1} onClick={handleJobOffers} />
        <DashboardMenu MenuName="Applicants" jobCount={26} onClick={handleApplicants} />
    </Container>
    
  )
}

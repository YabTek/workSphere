import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getJobDetail, selectJob } from '../redux/features/job/jobSlice';
import ProfileCard from '../components/ProfileCard';
import Logo from '../components/logo';
import ClientNavbar from '../components/ClientNavbar';

const ApplicantsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { title, jobId } = location.state;
  const { jobDetail } = useSelector(selectJob);

  useEffect(() => {
    dispatch(getJobDetail(jobId));
  }, [dispatch, jobId]);

  const applications = jobDetail.applications || [];

  return (
    <div>
      <div className="flex justify-between">
        <Logo />
        <ClientNavbar />
      </div>
      <h2 className="text-2xl font-semibold text-center text-[#56AAAA] mb-8 py-6">
        Here are freelancers applied for {title} 
      </h2>
      <div className="grid grid-cols-3 gap-10 justify-items-center mx-[6rem]">
        {applications.map((application) => (
          <ProfileCard key={application._id} {...application} />
        ))}
      </div>
    </div>
  );
};

export default ApplicantsPage;

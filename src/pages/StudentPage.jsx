import React from 'react';
import SearchStudent from '../Components/SearchStudent';
import TotalStudentData from '../Components/TotalStudentData';


const StudentPage = () => {
    return (
        <div className='py-24 lg:pt-[120px] lg:pb-28 bg-[#172227]'>
            <SearchStudent></SearchStudent>

            <TotalStudentData></TotalStudentData>

           
        </div>
    );
};

export default StudentPage;
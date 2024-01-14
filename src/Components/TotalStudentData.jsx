import React, { useEffect, useState } from 'react';
import StudentDataOne from './StudentDataOne';

const TotalStudentData = () => {
    const [students,setStudent]=useState([])
    useEffect(()=>{
        fetch('Students.json')
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setStudent(data)
        })
    },[])
    return (
        <div className='max-w-[848px] mx-auto overflow-auto'>
             <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#FFFFFF0D] text-white">
                                <th
                                    className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left"
                                >
                                    ID
                                </th>
                                <th
                                    className="p-5 text-sm md:text-xl font-semibold text-left"
                                >
                                    Name
                                </th>
                                <th
                                    className="p-5 text-sm md:text-xl font-semibold"
                                >
                                    Scores
                                </th>
                                <th
                                    className="p-5 text-sm md:text-xl font-semibold"
                                >
                                    Percentage
                                </th>
                            </tr>
                        </thead>
                        <tr className="bg-white/5">
                                <td className="p-5 text-sm md:text-xl text-white" colspan="4">
                                    Class One
                                </td>
                            </tr>
                            {
                                students.filter(student=>student.Class=="One").map(student=><StudentDataOne key={student.ID} student={student}></StudentDataOne>)
                            }
                             <tr className="bg-white/5">
                                <td className="p-5 text-sm md:text-xl text-white" colspan="4">
                                    Class Two
                                </td>
                            </tr>
                            {
                                students.filter(student=>student.Class=="Two").map(student=><StudentDataOne key={student.ID} student={student}></StudentDataOne>)
                            }
                        </table>
        </div>
    );
};

export default TotalStudentData;
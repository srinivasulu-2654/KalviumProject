import React, { useState } from 'react';
import StudentList from './StudentList';
import AttendanceSummary from './AttendanceSummary';

function AttendanceSystem() {
  const [students, setStudents] = useState([
    // List of student objects with name and attendance status
     { name: 'Sreenu', present: false},
     {name : 'RamaKanth',present: false},
     {name : 'Bharath',present: false},
     {name : 'Upendra',present: false},
     {name : 'Krishna',present: false},
     {name : 'Srinivasulu',present: false},
     
    // Initialize the list based on your data source
  ]);

  const markAttendance = (studentIndex) => {
    const updatedStudents = [...students];
    updatedStudents[studentIndex].present = !updatedStudents[studentIndex].present;
    setStudents(updatedStudents);
  };

  return (
    <div className="attendance-system">
      <h1>Class Attendance</h1>
      <StudentList students={students} markAttendance={markAttendance} />
      <AttendanceSummary students={students} />
    </div>
  );
}

export default AttendanceSystem;

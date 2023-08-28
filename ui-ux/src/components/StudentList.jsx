import React from 'react';

function StudentList({ students, markAttendance }) {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <div key={index} className="student">
          <span>{student.name}</span>
          <button onClick={() => markAttendance(index)}>
            {student.present ? 'Present' : 'Absent'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;

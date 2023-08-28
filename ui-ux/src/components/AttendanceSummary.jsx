import React from 'react';

function AttendanceSummary({ students }) {
  const totalStudents = students.length;
  const presentStudents = students.filter(student => student.present).length;
  const attendancePercentage = (presentStudents / totalStudents) * 100;

  return (
    <div className="attendance-summary">
      <p>Total Students: {totalStudents}</p>
      <p>Present: {presentStudents}</p>
      <p>Attendance: {attendancePercentage.toFixed(2)}%</p>
    </div>
  );
}

export default AttendanceSummary;

import React from 'react';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';

function Attendance() {
  const attendanceData = [
    {
      id: 1,
      courseName: 'Web Development',
      totalClasses: 42,
      present: 36,
      absent: 6,
      percentage: 85.7,
      status: 'Good Standing'
    },
    {
      id: 2,
      courseName: 'Object Oriented Programming',
      totalClasses: 38,
      present: 32,
      absent: 6,
      percentage: 84.2,
      status: 'Good Standing'
    },
    {
      id: 3,
      courseName: 'Data Structures',
      totalClasses: 45,
      present: 41,
      absent: 4,
      percentage: 91.1,
      status: 'Good Standing'
    },
    {
      id: 4,
      courseName: 'Database Systems',
      totalClasses: 40,
      present: 35,
      absent: 5,
      percentage: 87.5,
      status: 'Good Standing'
    },
    {
      id: 5,
      courseName: 'Computer Networks',
      totalClasses: 35,
      present: 28,
      absent: 7,
      percentage: 80.0,
      status: 'Below Average'
    },
    {
      id: 6,
      courseName: 'Software Engineering',
      totalClasses: 48,
      present: 30,
      absent: 18,
      percentage: 62.5,
      status: 'Poor Attendance'
    }
  ];

  const getAttendanceColor = (percentage) => {
    if (percentage >= 85) return 'text-green-600 bg-green-100';
    if (percentage >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getStatusInfo = (status) => {
    switch (status) {
      case 'Good Standing':
        return { icon: CheckCircle, color: 'text-green-600', text: '✔ Good Standing' };
      case 'Below Average':
        return { icon: AlertTriangle, color: 'text-orange-600', text: '▲ Below Average' };
      case 'Poor Attendance':
        return { icon: X, color: 'text-red-600', text: 'X Poor Attendance' };
      default:
        return { icon: CheckCircle, color: 'text-gray-600', text: status };
    }
  };

  return (
    <div className="space-y-6 bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Attendance Overview</h1>
        <p className="text-gray-600 mt-2">Your attendance record across all courses.</p>
      </div>

      {/* Attendance Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {attendanceData.map((course) => {
          const statusInfo = getStatusInfo(course.status);
          const StatusIcon = statusInfo.icon;
          
          return (
            <div key={course.id} className="bg-white rounded-lg p-4 lg:p-5 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-3 lg:mb-4">
                <h3 className="text-base lg:text-lg font-bold text-gray-900">{course.courseName}</h3>
                <span className={`inline-flex items-center px-2 lg:px-3 py-1 rounded-lg text-xs lg:text-sm font-semibold ${getAttendanceColor(course.percentage)}`}>
                  {course.percentage}%
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-3 lg:mb-4">
                <div className="text-center">
                  <p className="text-lg lg:text-2xl font-bold text-gray-900">{course.totalClasses}</p>
                  <p className="text-xs lg:text-sm text-gray-600">Total</p>
                </div>
                <div className="text-center">
                  <p className="text-lg lg:text-2xl font-bold text-gray-900">{course.present}</p>
                  <p className="text-xs lg:text-sm text-gray-600">Present</p>
                </div>
                <div className="text-center">
                  <p className="text-lg lg:text-2xl font-bold text-gray-900">{course.absent}</p>
                  <p className="text-xs lg:text-sm text-gray-600">Absent</p>
                </div>
              </div>
              
              <div className="mb-3 lg:mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      course.percentage >= 85 ? 'bg-green-500' :
                      course.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${course.percentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <StatusIcon className={`h-3 w-3 lg:h-4 lg:w-4 mr-2 ${statusInfo.color}`} />
                <span className={`text-xs lg:text-sm font-medium ${statusInfo.color}`}>
                  {statusInfo.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Attendance;
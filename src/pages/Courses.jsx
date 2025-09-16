import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, CreditCard, BarChart3, Calendar, GraduationCap } from 'lucide-react';

function Courses() {
  const [activeFilter, setActiveFilter] = useState('All Courses');

  const courses = [
    {
      id: 1,
      title: "Web Application Development",
      code: "CSSE3143",
      instructor: "Asad Kamal",
      credits: 3.0,
      attendance: 86.0,
      status: "Active"
    },
    {
      id: 2,
      title: "Operating Systems - Lab",
      code: "CSCS3551",
      instructor: "Qaisar Aslam",
      credits: 1.0,
      attendance: 90.0,
      status: "Active"
    },
    {
      id: 3,
      title: "Introduction to Software Engineering",
      code: "CSSE3113",
      instructor: "Muhammad Basit Ali Gillani",
      credits: 3.0,
      attendance: 79.0,
      status: "Active"
    },
    {
      id: 4,
      title: "Operating Systems",
      code: "CSCS3553",
      instructor: "Dr Adnan Ghafoor",
      credits: 3.0,
      attendance: 81.0,
      status: "Active"
    }
  ];

  const totalCourses = courses.length;
  const activeCourses = courses.filter(course => course.status === 'Active').length;
  const withdrawCourses = courses.filter(course => course.status === 'Withdraw').length;
  const currentCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const totalCredits = currentCredits;

  const getAttendanceColor = (attendance) => {
    if (attendance >= 85) return 'bg-green-100 text-green-800';
    if (attendance >= 75) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const filteredCourses = activeFilter === 'All Courses' 
    ? courses 
    : courses.filter(course => 
        activeFilter === 'Active Only' ? course.status === 'Active' : course.status === 'Withdraw'
      );

  return (
    <div className="space-y-6 bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mt-1" style={{background: 'linear-gradient(135deg, #66C5A0, #4CAF50)'}}>
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">All Courses</h1>
              <div className="flex flex-col space-y-2">
                <span className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-2 rounded-full w-fit">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  BS Computer Science
                </span>
                <span className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-4 py-2 rounded-full w-fit">
                  <Calendar className="h-4 w-4 mr-2" />
                  Spring 2025
                </span>
              </div>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            <div className="bg-white rounded-lg p-3 lg:p-4 text-center min-w-20 lg:min-w-24 shadow-sm">
              <h3 className="text-xs lg:text-sm font-medium text-gray-600 mb-1">TOTAL COURSES</h3>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">{totalCourses}</p>
            </div>
            <div className="bg-white rounded-lg p-3 lg:p-4 text-center min-w-20 lg:min-w-24 shadow-sm">
              <h3 className="text-xs lg:text-sm font-medium text-gray-600 mb-1">ACTIVE</h3>
              <p className="text-xl lg:text-2xl font-bold" style={{color: '#66C5A0'}}>{activeCourses}</p>
            </div>
            <div className="bg-white rounded-lg p-3 lg:p-4 text-center min-w-20 lg:min-w-24 shadow-sm">
              <h3 className="text-xs lg:text-sm font-medium text-gray-600 mb-1">WITHDRAW</h3>
              <p className="text-xl lg:text-2xl font-bold text-red-600">{withdrawCourses}</p>
            </div>
            <div className="bg-white rounded-lg p-3 lg:p-4 text-center min-w-20 lg:min-w-24 shadow-sm">
              <h3 className="text-xs lg:text-sm font-medium text-gray-600 mb-1">CURRENT CREDITS</h3>
              <p className="text-xl lg:text-2xl font-bold text-blue-600">{currentCredits}</p>
            </div>
            <div className="bg-white rounded-lg p-3 lg:p-4 text-center min-w-20 lg:min-w-24 shadow-sm">
              <h3 className="text-xs lg:text-sm font-medium text-gray-600 mb-1">TOTAL CREDITS</h3>
              <p className="text-xl lg:text-2xl font-bold text-purple-600">{totalCredits}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course List Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Course List</h2>
          
          {/* Filter Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveFilter('All Courses')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'All Courses'
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: activeFilter === 'All Courses' ? '#66C5A0' : 'transparent'
              }}
            >
              All Courses
            </button>
            <button
              onClick={() => setActiveFilter('Active Only')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'Active Only'
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: activeFilter === 'Active Only' ? '#66C5A0' : 'transparent'
              }}
            >
              Active Only
            </button>
            <button
              onClick={() => setActiveFilter('Withdraw')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'Withdraw'
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: activeFilter === 'Withdraw' ? '#66C5A0' : 'transparent'
              }}
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link 
              key={course.id} 
              to={`/course/${course.id}`} 
              state={{ course }}
              className="bg-white border-2 border-green-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow block"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold" style={{color: '#2d5a3d'}}>{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.code}</p>
                </div>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  {course.status}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" style={{color: '#66C5A0'}} />
                  <span className="text-sm text-gray-700">{course.instructor}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" style={{color: '#66C5A0'}} />
                  <span className="text-sm text-gray-700">Credits: </span>
                  <span className="text-sm font-medium" style={{color: '#66C5A0'}}>{course.credits}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4" style={{color: '#66C5A0'}} />
                  <span className="text-sm text-gray-700">Grade: </span>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-800">view progress</button>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" style={{color: '#66C5A0'}} />
                  <span className="text-sm text-gray-700">Attendance: </span>
                  <span className={`inline-block text-xs font-medium px-2 py-1 rounded ${getAttendanceColor(course.attendance)}`}>
                    {course.attendance}%
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;

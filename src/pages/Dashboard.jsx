
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, GraduationCap, Calendar, Clock, MapPin, BookOpen, CreditCard, BarChart3, TrendingUp } from 'lucide-react';

function Dashboard() {
  const { currentUser } = useAuth();

  // Circular Progress Component
  const CircularProgress = ({ percentage, value, maxValue, label, subtitle, icon: Icon }) => {
    const radius = 120;
    const strokeWidth = 14;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 h-full flex flex-col">
        {/* Header with Icon and Title */}
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-3 sm:mr-4" style={{ backgroundColor: '#66C5A0' }}>
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{label}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative inline-flex items-center justify-center">
            <svg
              height={radius * 2}
              width={radius * 2}
              className="transform -rotate-90 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
              viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            >
              <circle
                stroke="#e5e7eb"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                stroke="#66C5A0"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                style={{ strokeDashoffset }}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center flex flex-col items-center justify-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1">{percentage}%</div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-1">{value} | {maxValue}</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">{label === 'Credit Hours' ? 'Credits' : 'GPA'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 sm:mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#66C5A0' }}></div>
              <span className="text-xs sm:text-sm text-gray-600">
                {label === 'Credit Hours' ? 'Completed' : 'Current GPA'}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              {label === 'Credit Hours' ? `${value} hrs` : value}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-3 bg-gray-300"></div>
              <span className="text-xs sm:text-sm text-gray-600">
                {label === 'Credit Hours' ? 'Remaining' : 'Letter Grade'}
              </span>
            </div>
            <span className="text-xs sm:text-sm text-gray-600">
              {label === 'Credit Hours' ? `${maxValue - value} hrs` : (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">B+</span>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 sm:space-y-8 bg-gray-50 min-h-screen p-3 sm:p-4 md:p-6">
      {/* Top Row - Combined Student Profile and Academic Summary */}
      <div className="bg-gray-25 rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100">
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            {/* Left side - Profile info */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#66C5A0' }}>
                <User className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Sufiyan Imran</h2>
                <p className="text-sm sm:text-lg text-gray-600">L1PCBCS56</p>
                <p className="text-xs sm:text-lg text-gray-500 leading-tight">
                  Faculty of Information Technology and Computer<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Science
                </p>
                <button className="flex items-center space-x-2 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors mt-2 sm:mt-1 text-sm sm:text-base bg-[#66C5A0] hover:bg-[#4fb08a]">
                  <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>BS Computer Science</span>
                </button>
              </div>
            </div>
            
            {/* Right side - Stats */}
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:space-x-4 gap-3 sm:gap-0">
              <div className="text-center bg-gray-25 p-3 sm:p-4 rounded-lg border border-gray-100">
                <h3 className="text-xs sm:text-base font-medium text-gray-600 mb-1">CGPA</h3>
                <p className="text-lg sm:text-2xl font-bold text-gray-900">3.23</p>
              </div>
              <div className="text-center bg-gray-25 p-3 sm:p-4 rounded-lg border border-gray-100">
                <h3 className="text-xs sm:text-base font-medium text-gray-600 mb-1">EARNED CREDITS</h3>
                <p className="text-lg sm:text-2xl font-bold" style={{ color: '#66C5A0' }}>69</p>
              </div>
              <div className="text-center bg-gray-25 p-3 sm:p-4 rounded-lg border border-gray-100">
                <h3 className="text-xs sm:text-base font-medium text-gray-600 mb-1">TOTAL CREDITS</h3>
                <p className="text-lg sm:text-2xl font-bold text-gray-900">133</p>
              </div>
              <div className="text-center bg-gray-25 p-3 sm:p-4 rounded-lg border border-gray-100">
                <h3 className="text-xs sm:text-base font-medium text-gray-600 mb-1">IN PROGRESS</h3>
                <p className="text-lg sm:text-2xl font-bold text-orange-500">10</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Progress Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <CircularProgress
          percentage={52}
          value={69}
          maxValue={133}
          label="Credit Hours"
          subtitle="Academic Progress"
          icon={BookOpen}
        />
        <CircularProgress
          percentage={84}
          value={3.37}
          maxValue={4}
          label="GPA"
          subtitle="Academic Performance"
          icon={TrendingUp}
        />
      </div>

      {/* Today's Classes Section */}
      <div className="bg-gray-25 rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100">
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#66C5A0' }}>
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Today's Classes</h2>
            <p className="text-xs sm:text-sm text-gray-600">Tuesday, Sep 16</p>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Web Application Development Class */}
          <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 mb-3 sm:mb-0">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Web Application Development</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">CSSE3143</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                    <span className="text-xs sm:text-sm text-gray-700">Asad Kamal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                    <span className="text-xs sm:text-sm text-gray-700">09:00 AM - 10:30 AM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                    <span className="text-xs sm:text-sm text-gray-700">Lab 1</span>
                  </div>
                </div>
              </div>
              <div className="self-start">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Lab
                </span>
              </div>
            </div>
          </div>

          {/* Operating Systems Class */}
          <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 mb-3 sm:mb-0">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Operating Systems</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">CSCS3553</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                    <span className="text-xs sm:text-sm text-gray-700">Dr Adnan Chafoor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                    <span className="text-xs sm:text-sm text-gray-700">11:00 AM - 12:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                    <span className="text-xs sm:text-sm text-gray-700">Lecture Hall A</span>
                  </div>
                </div>
              </div>
              <div className="self-start">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Lecture
                </span>
              </div>
            </div>
          </div>

          {/* Database Systems Class */}
          <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 mb-3 sm:mb-0">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Database Systems</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">CSSE3153</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                    <span className="text-xs sm:text-sm text-gray-700">Dr Sarah Ahmed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                    <span className="text-xs sm:text-sm text-gray-700">02:00 PM - 03:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                    <span className="text-xs sm:text-sm text-gray-700">Computer Lab 2</span>
                  </div>
                </div>
              </div>
              <div className="self-start">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Lab
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 sm:mt-6 pt-4 border-t border-gray-200 space-y-2 sm:space-y-0">
          <p className="text-xs sm:text-sm text-gray-600">3 classes scheduled</p>
          <button className="text-xs sm:text-sm font-medium text-left sm:text-right" style={{ color: '#66C5A0' }}>
            View Full Schedule
          </button>
        </div>
      </div>

      {/* Current Courses Section */}
      <div className="bg-gray-25 rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100">
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#66C5A0' }}>
            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Current Courses</h2>
            <p className="text-xs sm:text-sm text-gray-600">Spring 2025 • 4 Enrolled Courses</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Web Application Development */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="min-w-0 flex-1 pr-2">
                <h3 className="text-sm sm:text-lg font-bold leading-tight" style={{ color: '#2d5a3d' }}>Web Application Development</h3>
                <p className="text-xs sm:text-sm text-gray-600">CSSE3143</p>
              </div>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full flex-shrink-0">
                Active
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <User className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700 truncate">Asad Kamal</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Credits: 3</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Grade: </span>
                <button className="text-xs sm:text-sm font-medium" style={{ color: '#66C5A0' }}>view progress</button>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Attendance: </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  86.0%
                </span>
              </div>
            </div>
          </div>

          {/* Operating Systems - Lab */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="min-w-0 flex-1 pr-2">
                <h3 className="text-sm sm:text-lg font-bold leading-tight" style={{ color: '#2d5a3d' }}>Operating Systems - Lab</h3>
                <p className="text-xs sm:text-sm text-gray-600">CSCS3551</p>
              </div>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full flex-shrink-0">
                Active
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <User className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700 truncate">Qaisar Aslam</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Credits: 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Grade: </span>
                <button className="text-xs sm:text-sm font-medium" style={{ color: '#66C5A0' }}>view progress</button>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Attendance: </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  90.0%
                </span>
              </div>
            </div>
          </div>

          {/* Introduction to Software Engineering */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-lg font-bold truncate" style={{ color: '#2d5a3d' }}>Introduction to Software Engineering</h3>
                <p className="text-xs sm:text-sm text-gray-600">CSSE3113</p>
              </div>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full ml-2 flex-shrink-0">
                Active
              </span>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center space-x-2">
                <User className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700 truncate">Muhammad Basit Ali Gillani</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Credits: 3</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Grade: </span>
                <button className="text-xs sm:text-sm font-medium" style={{ color: '#66C5A0' }}>view progress</button>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Attendance: </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                  79.0%
                </span>
              </div>
            </div>
          </div>

          {/* Operating Systems */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-lg font-bold truncate" style={{ color: '#2d5a3d' }}>Operating Systems</h3>
                <p className="text-xs sm:text-sm text-gray-600">CSCS3553</p>
              </div>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full ml-2 flex-shrink-0">
                Active
              </span>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center space-x-2">
                <User className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700 truncate">Dr Adnan Ghafoor</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Credits: 3</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Grade: </span>
                <button className="text-xs sm:text-sm font-medium" style={{ color: '#66C5A0' }}>view progress</button>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#66C5A0' }} />
                <span className="text-xs sm:text-sm text-gray-700">Attendance: </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                  81.0%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
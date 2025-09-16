import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Calendar, BookOpen, Award, GraduationCap } from 'lucide-react';

function StudentProfile() {
  const { currentUser } = useAuth();

  const enrolledCourses = [
    {
      id: 1,
      name: 'Advanced Mathematics',
      code: 'MATH301',
      credits: 4,
      semester: 'Fall 2024',
      status: 'Active',
      grade: 'A-'
    },
    {
      id: 2,
      name: 'Computer Science Fundamentals',
      code: 'CS101',
      credits: 3,
      semester: 'Fall 2024',
      status: 'Active',
      grade: 'A'
    },
    {
      id: 3,
      name: 'Physics Laboratory',
      code: 'PHYS201',
      credits: 2,
      semester: 'Fall 2024',
      status: 'Active',
      grade: 'B+'
    },
    {
      id: 4,
      name: 'English Literature',
      code: 'ENG202',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Completed',
      grade: 'A-'
    },
    {
      id: 5,
      name: 'Chemistry Basics',
      code: 'CHEM101',
      credits: 4,
      semester: 'Spring 2024',
      status: 'Completed',
      grade: 'B+'
    }
  ];

  const studentInfo = {
    studentId: 'STU2024001',
    program: 'Bachelor of Science in Computer Science',
    year: '3rd Year',
    gpa: '3.7',
    totalCredits: '89',
    joinDate: 'September 2022'
  };

  return (
    <div className="space-y-10">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#66C5A0]/10 via-transparent to-blue-100/10 pointer-events-none"></div>

        <div className="flex items-center space-x-6 relative">
          <div className="w-24 h-24 bg-[#66C5A0] rounded-full flex items-center justify-center shadow-md">
            <span className="text-3xl font-bold text-white">
              {currentUser?.displayName?.charAt(0) || 'S'}
            </span>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-[#4a9e7e] tracking-tight">
              {currentUser?.displayName || 'Student Name'}
            </h1>
            <p className="text-lg text-gray-600 mt-1">{studentInfo.program}</p>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 shadow-sm">
                <User className="w-4 h-4 mr-1" />
                {studentInfo.studentId}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 shadow-sm">
                <GraduationCap className="w-4 h-4 mr-1" />
                {studentInfo.year}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Student Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
              Student Information
            </h2>
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#66C5A0]" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">{currentUser?.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-[#66C5A0]" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Join Date</p>
                  <p className="text-sm text-gray-600">{studentInfo.joinDate}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-[#66C5A0]" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">GPA</p>
                  <p className="text-sm text-gray-600">{studentInfo.gpa}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-[#66C5A0]" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Total Credits</p>
                  <p className="text-sm text-gray-600">{studentInfo.totalCredits}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
              Enrolled Courses
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Credits
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Semester
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {enrolledCourses.map((course) => (
                    <tr
                      key={course.id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {course.name}
                          </div>
                          <div className="text-xs text-gray-500">{course.code}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                        {course.credits}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                        {course.semester}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                            course.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {course.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        {course.grade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;

import React, { useState } from 'react';
import { Search } from 'lucide-react';

function Results() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('All Terms');

  const resultsData = [
    {
      id: 1,
      term: 'Spring 2023',
      gradingPoints: 63.34,
      cumulativeGP: 63.34,
      credits: 19,
      totalCredits: 19,
      sgpa: 3.33,
      cgpa: 3.33
    },
    {
      id: 2,
      term: 'Fall 2023',
      gradingPoints: 52.32,
      cumulativeGP: 115.6,
      credits: 17,
      totalCredits: 36,
      sgpa: 3.08,
      cgpa: 3.21
    },
    {
      id: 3,
      term: 'Spring 2024',
      gradingPoints: 59.33,
      cumulativeGP: 174.9,
      credits: 16,
      totalCredits: 52,
      sgpa: 3.71,
      cgpa: 3.37
    },
    {
      id: 4,
      term: 'Fall 2024',
      gradingPoints: 61.25,
      cumulativeGP: 236.15,
      credits: 18,
      totalCredits: 70,
      sgpa: 3.4,
      cgpa: 3.37
    },
    {
      id: 5,
      term: 'Spring 2025',
      gradingPoints: 67.8,
      cumulativeGP: 303.95,
      credits: 20,
      totalCredits: 90,
      sgpa: 3.39,
      cgpa: 3.38
    }
  ];

  const filteredResults = resultsData.filter(result => {
    const matchesSearch = searchTerm === '' || 
      result.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.id.toString().includes(searchTerm) ||
      result.sgpa.toString().includes(searchTerm) ||
      result.cgpa.toString().includes(searchTerm);
    
    const matchesTerm = selectedTerm === 'All Terms' || result.term === selectedTerm;
    
    return matchesSearch && matchesTerm;
  });

  return (
    <div className="space-y-4 sm:space-y-6 bg-gray-50 min-h-screen p-3 sm:p-4 lg:p-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 lg:p-6 border border-gray-100">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#5bb492] mb-3 sm:mb-4 lg:mb-6">Your Results</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by term, ID, SGPA, or CGPA..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent w-full"
              style={{'--tw-ring-color': '#66C5A0'}}
            />
          </div>
          
          {/* Filter Dropdown */}
          <div className="relative w-full sm:w-48">
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent appearance-none bg-white pr-7 sm:pr-8 w-full"
              style={{'--tw-ring-color': '#66C5A0'}}
            >
              <option value="All Terms">All Terms</option>
              <option value="Spring 2023">Spring 2023</option>
              <option value="Fall 2023">Fall 2023</option>
              <option value="Spring 2024">Spring 2024</option>
              <option value="Fall 2024">Fall 2024</option>
              <option value="Spring 2025">Spring 2025</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead style={{backgroundColor: '#E8F5F3'}}>
              <tr>
                <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-left text-xs sm:text-sm font-medium whitespace-nowrap" style={{color: '#2d5a3d'}}>
                  ID
                </th>
                <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-left text-xs sm:text-sm font-medium whitespace-nowrap" style={{color: '#2d5a3d'}}>
                  TERM
                </th>
                <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-left text-xs sm:text-sm font-medium whitespace-nowrap" style={{color: '#2d5a3d'}}>
                  GRADING POINTS
                </th>
                <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-left text-xs sm:text-sm font-medium whitespace-nowrap" style={{color: '#2d5a3d'}}>
                  CUMULATIVE GP
                </th>
                <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-left text-xs sm:text-sm font-medium whitespace-nowrap" style={{color: '#2d5a3d'}}>
                  CR
                </th>
                <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-left text-xs sm:text-sm font-medium whitespace-nowrap" style={{color: '#2d5a3d'}}>
                  TOTAL CR
                </th>
                <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-left text-xs sm:text-sm font-medium whitespace-nowrap" style={{color: '#2d5a3d'}}>
                  SGPA
                </th>
                <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 text-left text-xs sm:text-sm font-medium whitespace-nowrap" style={{color: '#2d5a3d'}}>
                  CGPA
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredResults.map((result, index) => (
                <tr key={result.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    {result.id}
                  </td>
                  <td className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 whitespace-nowrap text-xs sm:text-sm" style={{color: '#66C5A0'}}>
                    {result.term}
                  </td>
                  <td className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    {result.gradingPoints}
                  </td>
                  <td className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    {result.cumulativeGP}
                  </td>
                  <td className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    {result.credits}
                  </td>
                  <td className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    {result.totalCredits}
                  </td>
                  <td className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-green-600">
                    {result.sgpa}
                  </td>
                  <td className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-blue-600">
                    {result.cgpa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;
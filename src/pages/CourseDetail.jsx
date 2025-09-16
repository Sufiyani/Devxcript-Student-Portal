import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BookOpen, User, CreditCard, Calendar, BarChart3, FileText } from 'lucide-react';

function CourseDetail() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = location.state?.course;

  // Course descriptions matching your courses
  const courseDescriptions = {
    1: `This course provides a complete introduction to Web Application Development, focusing on both the front-end and back-end. 
  Students will start by learning the basics of HTML for structuring web pages, CSS for designing and styling, and JavaScript for adding interactivity and logic.

  After mastering the fundamentals of the front-end, the course moves towards the back-end where students will explore how servers work, how data is stored in databases, 
  and how client-server communication happens. They will practice building dynamic applications that connect the front-end with the back-end, giving them real-world development experience.

  Learning Outcomes:
  • Design responsive and user-friendly web interfaces.
  • Implement interactive features using JavaScript and modern frameworks/libraries.
  • Understand the basics of databases and how to integrate them with applications.
  • Develop and deploy complete web applications that handle user input, process data, and display results dynamically.

  This course builds a strong foundation for anyone who wants to become a web developer or move towards full-stack development.`,

    2: `The Operating Systems Lab provides students with practical experience in applying concepts from the theory course. 
    Instead of just reading about operating systems, students actually experiment in a Linux/Unix environment to see how systems behave in real scenarios.

    Key areas covered in this lab include:
    • Process Scheduling: Implement and test scheduling algorithms (FCFS, Round Robin, Priority Scheduling) to see how operating systems decide which process runs next.
    • Memory Management: Work with paging, segmentation, and virtual memory to understand how operating systems manage limited memory resources.
    • File Handling: Perform file operations (creation, reading, writing, deletion) at the system level, beyond basic programming functions.
    • System Calls: Use system calls (fork, exec, open, read, write) to see how applications directly communicate with the operating system.

    By the end of the lab, students will not only understand operating system concepts but also gain hands-on problem-solving skills that prepare them for advanced system programming, networking, and performance optimization.`,

    3: `This course introduces the systematic methods and best practices used by professional software engineers to build reliable, maintainable, and scalable software systems. 
    Students learn how software is not just about coding but about following structured steps to reduce errors and improve quality.

    Topics include:
    • Software Development Life Cycle (SDLC): Understanding models such as Waterfall, Agile, and Spiral, and when to apply them.
    • Requirements Analysis: Learning how to gather, document, and analyze user needs before starting development.
    • Software Design: Exploring design techniques like UML diagrams, architectural patterns, and modular design principles.
    • Implementation and Testing: Writing quality code with unit testing, integration testing, and debugging practices.
    • Maintenance: Understanding how software is updated, improved, and adapted over time to meet new requirements.

    By the end of this course, students will be able to:
    • Break down large projects into smaller, manageable parts.
    • Work effectively in teams using collaboration tools.
    • Apply industry-level methods to ensure that software meets user expectations and performs reliably.

    This course provides the foundation for anyone planning to work on large-scale projects or full-stack development.`,

    4: `This course explains the fundamental concepts and architecture of operating systems, which act as the backbone of all computer systems. 
    Students will learn how operating systems manage hardware resources and provide services to applications.

    Core areas of study:
    • Process Management: How operating systems create, schedule, and terminate processes. Includes threads, multitasking, deadlocks, and synchronization.
    • Memory Management: Covers paging, segmentation, virtual memory, and allocation strategies, explaining how memory is shared between multiple processes efficiently.
    • File Systems: Study of how data is stored, organized, and retrieved using hierarchical file systems and storage management.
    • Concurrency: Understanding challenges in running multiple processes simultaneously and techniques like semaphores and monitors to avoid conflicts.
    • Security and Protection: How operating systems safeguard data, files, and processes against unauthorized access and malware.

    By the end of this course, students will:
    • Understand how operating systems act as an interface between hardware and applications.
    • Learn the trade-offs between efficiency, reliability, and security.
    • Be prepared for advanced topics such as distributed systems, cloud computing, and system-level programming.

    This course is essential for anyone aiming to specialize in system programming, cybersecurity, or advanced computer science research.`
  };

  if (!course) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold text-red-600">Course not found</h2>
        <p className="text-gray-600">Please go back to courses page.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div
            className="w-14 h-14 flex items-center justify-center rounded-xl"
            style={{ background: 'linear-gradient(135deg, #66C5A0, #4CAF50)' }}
          >
            <BookOpen className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{course.title}</h1>
            <p className="text-sm text-gray-600">{course.code}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Instructor: {course.instructor}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Credits: {course.credits}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Status: {course.status}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Attendance: {course.attendance}%</span>
          </div>
          <br />
          {/* Course Description */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
              Detailed Description for {course.title}
            </h2>

            <div className="flex items-start space-x-2">
              <FileText className="h-5 w-5 text-green-600 mt-1" />
              <span className="text-gray-700 whitespace-pre-line">
                {courseDescriptions[course.id] || "No description available for this course."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

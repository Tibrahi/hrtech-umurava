'use client';

import { useState } from 'react';
import { courses } from './data/courses';
import CourseCard from './components/CourseCard';
import SearchFilter from './components/SearchFilter';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      searchQuery === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesLevel =
      selectedLevel === '' || course.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  const handleEnroll = (courseId: string) => {
    // Here you would typically handle the enrollment process
    console.log(`Enrolling in course ${courseId}`);
    alert(`Successfully enrolled in course ${courseId}`);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Employee Training Portal
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Enhance your skills with our comprehensive training courses
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
        />

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={handleEnroll}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No courses found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

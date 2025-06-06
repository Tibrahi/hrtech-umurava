import { Course } from '../types/course';
import Image from 'next/image';

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
}

export default function CourseCard({ course, onEnroll }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={course.imageUrl}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            {course.level}
          </span>
          <span className="text-sm text-gray-600">{course.duration}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {course.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Instructor: {course.instructor}
          </div>
          <div className="text-sm text-gray-600">
            {course.enrolledCount} enrolled
          </div>
        </div>
        <button
          onClick={() => onEnroll(course.id)}
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
} 
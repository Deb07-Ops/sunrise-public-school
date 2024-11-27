import Link from 'next/link';

export default function Courses() {
  const courses = [
    {
      title: "Primary Education",
      description: "Foundation years focusing on core subjects and essential skills development.",
      grades: "Grades 1-5",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Arts"]
    },
    {
      title: "Middle School",
      description: "Comprehensive education with expanded subject areas and practical learning.",
      grades: "Grades 6-8",
      subjects: ["Advanced Mathematics", "Physical Sciences", "Literature", "History", "Technology"]
    },
    {
      title: "Secondary Education",
      description: "Specialized streams preparing students for higher education and career paths.",
      grades: "Grades 9-10",
      subjects: ["Physics", "Chemistry", "Biology", "Computer Science", "Economics"]
    }
  ];

  return (
    <div className="w-full bg-white pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl text-[#2E2E2E] stardos-light mb-6 tracking-wider">
          Academic Programs
        </h1>
        <p className="text-sleek text-xl text-[#2E2E2E]/80 mb-12 max-w-3xl">
          Our comprehensive curriculum is designed to nurture intellectual curiosity
          and academic excellence across all grade levels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.title} className="bg-gray-50 p-8">
              <h2 className="text-2xl text-[#2E2E2E] stardos-light mb-2 tracking-wide">
                {course.title}
              </h2>
              <p className="text-[#A51C30] text-sleek mb-4">{course.grades}</p>
              <p className="text-[#2E2E2E]/80 text-sleek mb-6">
                {course.description}
              </p>
              <div>
                <h3 className="text-[#2E2E2E] text-sleek font-medium mb-2">Key Subjects:</h3>
                <ul className="space-y-2">
                  {course.subjects.map((subject) => (
                    <li key={subject} className="text-[#2E2E2E]/80 text-sleek">
                      • {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-12">
          <h2 className="text-3xl text-[#2E2E2E] stardos-light mb-6 tracking-wider">
            Additional Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-[#2E2E2E] stardos-light mb-4">
                Extra-Curricular Activities
              </h3>
              <ul className="space-y-3">
                <li className="text-[#2E2E2E]/80 text-sleek">• Sports and Athletics</li>
                <li className="text-[#2E2E2E]/80 text-sleek">• Music and Performing Arts</li>
                <li className="text-[#2E2E2E]/80 text-sleek">• Science and Technology Club</li>
                <li className="text-[#2E2E2E]/80 text-sleek">• Literary and Debate Society</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-[#2E2E2E] stardos-light mb-4">
                Support Services
              </h3>
              <ul className="space-y-3">
                <li className="text-[#2E2E2E]/80 text-sleek">• Academic Counseling</li>
                <li className="text-[#2E2E2E]/80 text-sleek">• Career Guidance</li>
                <li className="text-[#2E2E2E]/80 text-sleek">• Learning Support</li>
                <li className="text-[#2E2E2E]/80 text-sleek">• Student Wellness Programs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl text-[#2E2E2E] stardos-light mb-6 tracking-wider">
            Admissions
          </h2>
          <p className="text-[#2E2E2E]/80 text-sleek mb-8 max-w-3xl">
            Join our vibrant learning community. We welcome applications throughout the year
            and encourage you to visit our campus to learn more about our programs.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#A51C30] text-white px-8 py-3 hover:bg-[#8B1728] transition-colors duration-200 text-sleek"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

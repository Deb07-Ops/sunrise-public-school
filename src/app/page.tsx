import Image from 'next/image';
import Link from 'next/link';
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  UsersIcon,
  BeakerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="w-full bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="stardos-light text-6xl md:text-7xl mb-6 leading-tight tracking-wider text-[#2E2E2E]">
              Welcome to<br />
              <span className="text-[#A51C30]">
                Sunrise Public School
              </span>
            </h1>
            <p className="text-sleek text-xl text-[#2E2E2E]/80 mb-8 max-w-2xl">
              Nurturing minds, building character, and fostering excellence since 1995. 
              Where every child's potential is discovered and nurtured.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/courses" 
                className="bg-[#A51C30] text-white px-8 py-3 hover:bg-[#8B1728] transition-colors duration-200 text-sleek"
              >
                Explore Courses
              </Link>
              <Link 
                href="/contact" 
                className="border border-[#A51C30] text-[#A51C30] px-8 py-3 hover:bg-[#A51C30] hover:text-white transition-colors duration-200 text-sleek"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-[#2E2E2E] stardos-light mb-12 tracking-wider">
            Our Facilities & Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white p-8 shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <feature.icon className="w-8 h-8 text-[#A51C30] mr-3" />
                  <h3 className="stardos-light text-2xl text-[#2E2E2E] tracking-wide">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sleek text-[#2E2E2E]/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-[#2E2E2E] stardos-light mb-12 tracking-wider">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-gray-50 p-8"
              >
                <div className="stardos-light text-4xl text-[#A51C30] mb-2 tracking-wider">
                  {stat.value}
                </div>
                <div className="text-sleek text-[#2E2E2E]/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-12 shadow-sm">
            <h2 className="stardos-light text-4xl mb-6 text-[#2E2E2E] tracking-wider">
              Begin Your Journey With Us Today
            </h2>
            <p className="text-sleek text-xl text-[#2E2E2E]/80 mb-8 max-w-2xl">
              Join our community of learners and discover the perfect blend of academic excellence, 
              personal growth, and future-ready skills.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#A51C30] text-white px-8 py-3 hover:bg-[#8B1728] transition-colors duration-200 text-sleek"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Academic Excellence",
    description: "Our rigorous curriculum and experienced faculty ensure that every student achieves their highest academic potential through personalized attention and innovative teaching methods.",
    icon: AcademicCapIcon
  },
  {
    title: "Modern Infrastructure",
    description: "State-of-the-art laboratories, digital classrooms, and extensive sports facilities provide an ideal environment for holistic learning and development.",
    icon: BuildingLibraryIcon
  },
  {
    title: "Character Development",
    description: "We emphasize values, leadership skills, and ethical principles, nurturing students to become responsible global citizens and future leaders.",
    icon: UserGroupIcon
  },
  {
    title: "Expert Faculty",
    description: "Our teachers are highly qualified professionals who bring years of experience and passion for education, ensuring quality learning outcomes.",
    icon: UsersIcon
  },
  {
    title: "Advanced Laboratories",
    description: "Well-equipped science, computer, and language laboratories facilitate practical learning and hands-on experience in various subjects.",
    icon: BeakerIcon
  },
  {
    title: "Secure Environment",
    description: "We maintain a secure, nurturing environment with modern security systems and trained staff to ensure your child's safety and well-being.",
    icon: ShieldCheckIcon
  }
];

const stats = [
  {
    value: "25+",
    label: "Years of Excellence"
  },
  {
    value: "100%",
    label: "Board Results"
  },
  {
    value: "50+",
    label: "Expert Faculty"
  },
  {
    value: "1000+",
    label: "Happy Students"
  }
];

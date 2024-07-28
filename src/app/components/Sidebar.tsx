import Link from 'next/link';

const Sidebar = ({ activeSection }: { activeSection: string }) => {
  const navigation = [
    { name: 'About', href: '#about', current: activeSection === 'about' },
    { name: 'Experience', href: '#experience', current: activeSection === 'experience' },
    { name: 'Stack', href: '#skills', current: activeSection === 'skills' },
    { name: 'Projects', href: '#projects', current: activeSection === 'projects' },
    { name: 'Achievements', href: '#achievements', current: activeSection === 'achievements' },
    { name: 'Education', href: '#education', current: activeSection === 'education' },
    { name: 'Volunteering', href: '#volunteering', current: activeSection === 'volunteering' },
    { name: 'Contact', href: '#contact', current: activeSection === 'contact' },
  ];

  return (
    <div className="h-screen bg-gray-900 text-white w-[30%] hidden lg:block">
      <nav className="mt-10">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <text
              className={`block px-4 py-2 mt-2 rounded-lg pl-5 ${
                item.current ? 'bg-gray-700 text-2xl' : 'hover:bg-gray-700'
              }`}
            >
              {item.name}
            </text>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;


// "use client"
// import { 
//   SiPython, 
//   SiCplusplus, 
//   SiHtml5, 
//   SiCss3, 
//   SiJavascript, 
//   SiMysql,
//   SiReact, 
//   SiNextdotjs, 
//   SiTailwindcss,
//   SiNodedotjs, 
//   SiExpress, 
//   SiDjango,
//   SiGit, 
//   SiGithub, 
//   SiPostman,
//   SiPostgresql, 
//   SiMongodb,
//   SiClerk,
//   SiLinkedin
// } from 'react-icons/si';
// import { HiDotsHorizontal } from 'react-icons/hi';
// import { useState } from 'react';

// // You can replace this with your actual image URL
// const profileImageUrl = "/profile.png";

// // Tech Item component for reusability
// const TechItem = ({ icon, name }) => (
//   <div className="flex flex-col items-center justify-center gap-2 p-3 border border-gray-800 rounded-lg bg-[#181818] hover:border-gray-700 transition-colors duration-300">
//     <div className="text-3xl">
//       {icon}
//     </div>
//     <span className="text-gray-400 text-xs text-center">{name}</span>
//   </div>
// );

// export default function HeroSection() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const resumeOptions = [
//     { label: 'Frontend Developer', file: '/resumes/frontend-resume.pdf' },
//     { label: 'MERN Full Stack', file: '/resumes/mern-fullstack-resume.pdf' },
//     { label: 'Python Full Stack', file: '/resumes/python-fullstack-resume.pdf' }
//   ];

//   const handleResumeDownload = (file, label) => {
//     // Create a temporary link and trigger download
//     const link = document.createElement('a');
//     link.href = file;
//     link.download = `Mohammed-Binshal-P-${label.replace(/\s+/g, '-')}-Resume.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setIsDropdownOpen(false);
//   };
//   const techStack = [
//     // Programming Languages
//     { name: 'Python', icon: <SiPython className="text-blue-500" /> },
//     { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
//     { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
//     { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
//     { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    
//     // Second row
//     { name: 'SQL', icon: <SiMysql className="text-blue-600" /> },
//     { name: 'React', icon: <SiReact className="text-cyan-400" /> },
//     { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
//     { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
//     { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    
//     // Third row
//     { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
//     { name: 'Django', icon: <SiDjango className="text-green-600" /> },
//     { name: 'Git', icon: <SiGit className="text-orange-500" /> },
//     { name: 'GitHub', icon: <SiGithub className="text-white" /> },
//     { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    
//     // Fourth row
//     { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
//     { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
//     { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
//     { name: 'Clerk Auth', icon: <SiClerk className="text-purple-500" /> },
//     { name: 'And More...', icon: <HiDotsHorizontal className="text-gray-400" /> },
//   ];

//   return (
//     <div className="bg-[#111111] min-h-screen text-white font-sans flex flex-col justify-center" onClick={() => setIsDropdownOpen(false)}>
//       <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-24" onClick={(e) => e.stopPropagation()}>
        
//         {/* Navigation */}
//         <nav className="flex items-center justify-between py-11">
//           <h1 className="text-xl font-bold tracking-wider text-gray-400 uppercase">
//             Mohammed Binshal P
//           </h1>
//           <div className="text-lg hidden md:flex items-center gap-6 text-gray-400">
//             <a href="#experience" className="hover:text-white transition-colors">Work Experience</a>
//             <a href="#projects" className="hover:text-white transition-colors">Projects</a>
//             <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            
//             {/* Resume Dropdown */}
//             <div className="relative">
//               <button 
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="hover:text-white transition-colors flex items-center gap-1"
//               >
//                 Download Resume
//                 <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
              
//               {/* Dropdown Menu */}
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-56 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg z-50">
//                   <div className="py-2">
//                     {resumeOptions.map((option, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleResumeDownload(option.file, option.label)}
//                         className="w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
//                       >
//                         {option.label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </nav>

//         {/* Main Hero Content */}
//         <main className="py-20 md:py-20">
//           <div className="flex flex-col md:flex-row items-center gap-14">
            
//             {/* Profile Picture */}
//             <div className="relative w-44 h-44 flex-shrink-0">
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 p-0.5">
//                     <img
//                         src={profileImageUrl}
//                         alt="Mohammed Binshal P"
//                         className="w-full h-full object-cover rounded-full bg-[#111111] p-1"
//                     />
//                 </div>
//             </div>

//             {/* Text Content */}
//             <div className="text-center md:text-left">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-200 leading-tight">
//                 Hey, I'm Mohammed Binshal P.
//                 <span className='text-gray-400'> I'm a Full Stack Developer.</span>
//               </h2>
              
//               <div className="mt-5 flex items-center justify-center md:justify-start gap-2">
//                   <span className="relative flex h-2.5 w-2.5">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
//                   </span>
//                   <p className="text-green-400 text-sm">Open to work</p>
//               </div>

//               <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-3 text-gray-400 text-sm">
//                 <p>📍 Malappuram, Kerala.</p>
//                 <div className="flex items-center gap-6">
//                     <a href="https://www.linkedin.com/in/binshal/" className="flex items-center gap-2 hover:text-white transition-colors">
//                         <SiLinkedin size={18} className="text-blue-500" />
//                         <span>LinkedIn</span>
//                     </a>
//                     <a href="https://github.com/binshal" className="flex items-center gap-2 hover:text-white transition-colors">
//                         <SiGithub size={18} />
//                         <span>GitHub</span>
//                     </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Tech Stack Section */}
//         <section className="pb-20 md:pb-32">
//             <h3 className="text-center text-sm font-semibold tracking-widest text-gray-400 uppercase mb-10">
//                 Tech Stack
//             </h3>
//             <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto">
//                 {techStack.map((tech, index) => (
//                     <TechItem key={`${tech.name}-${index}`} icon={tech.icon} name={tech.name} />
//                 ))}
//             </div>
//         </section>

//       </div>
//     </div>
//   );
// }
"use client"
import { 
  SiPython, 
  SiCplusplus, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiMysql,
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss,
  SiNodedotjs, 
  SiExpress, 
  SiDjango,
  SiGit, 
  SiGithub, 
  SiPostman,
  SiPostgresql, 
  SiMongodb,
  SiClerk,
  SiLinkedin
} from 'react-icons/si';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useState } from 'react';

// You can replace this with your actual image URL
const profileImageUrl = "/profile.png";

// Tech Item component for reusability
const TechItem = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-3 border border-gray-800 rounded-lg bg-[#181818] hover:border-gray-700 transition-colors duration-300">
    <div className="text-3xl">
      {icon}
    </div>
    <span className="text-gray-400 text-xs text-center">{name}</span>
  </div>
);

export default function HeroSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const resumeOptions = [
    { label: 'Frontend Developer', file: '/resumes/MBP_Frontend_Resume.pdf' },
    { label: 'MERN Full Stack', file: '/resumes/MBP_MERN_Resume.pdf' },
    { label: 'Python Full Stack', file: '/resumes/MBP_Python_Full_Stack_Resume.pdf' }
  ];

  const handleResumeDownload = (file, label) => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = file;
    link.download = `Mohammed-Binshal-P-${label.replace(/\s+/g, '-')}-Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };
  const techStack = [
    // Programming Languages
    { name: 'Python', icon: <SiPython className="text-blue-500" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
    { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    
    // Second row
    { name: 'SQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    
    // Third row
    { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
    { name: 'Django', icon: <SiDjango className="text-green-600" /> },
    { name: 'Git', icon: <SiGit className="text-orange-500" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    
    // Fourth row
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Clerk Auth', icon: <SiClerk className="text-purple-500" /> },
    { name: 'And More...', icon: <HiDotsHorizontal className="text-gray-400" /> },
  ];

  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans flex flex-col justify-center" onClick={() => { setIsDropdownOpen(false); setIsMobileMenuOpen(false); }}>
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-24" onClick={(e) => e.stopPropagation()}>
        
        {/* Navigation */}
        <nav className="flex items-center justify-between py-11">
          <h1 className="text-xl font-bold tracking-wider text-gray-400 uppercase">
            Mohammed Binshal P
          </h1>
          
          {/* Desktop Menu */}
          <div className="text-lg hidden md:flex items-center gap-6 text-gray-400">
            {/* <a href="#experience" className="hover:text-white transition-colors">Work Experience</a> */}
            {/* <a href="#projects" className="hover:text-white transition-colors">Projects</a> */}
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            
            {/* Resume Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                Download Resume
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {resumeOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleResumeDownload(option.file, option.label)}
                        className="w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border border-gray-700 rounded-lg mx-4 mb-6">
            <div className="py-4 px-6 space-y-4">
              {/* <a 
                href="#experience" 
                className="block text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work Experience
              </a>
              <a 
                href="#projects" 
                className="block text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a> */}
              <a 
                href="#contact" 
                className="block text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile Resume Options */}
              <div className="pt-2 border-t border-gray-700">
                <p className="text-gray-500 text-sm mb-2 font-semibold">Download Resume:</p>
                {resumeOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleResumeDownload(option.file, option.label)}
                    className="block w-full text-left py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Hero Content */}
        <main className="py-20 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-14">
            
            {/* Profile Picture */}
            <div className="relative w-44 h-44 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 p-0.5">
                    <img
                        src={profileImageUrl}
                        alt="Mohammed Binshal P"
                        className="w-full h-full object-cover rounded-full bg-[#111111] p-1"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-200 leading-tight">
                Hey, I'm Mohammed Binshal P.
                <span className='text-gray-400'> I'm a Full Stack Developer.</span>
              </h2>
              
              <div className="mt-5 flex items-center justify-center md:justify-start gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <p className="text-green-400 text-sm">Open to work</p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-3 text-gray-400 text-sm">
                <p>📍 Malappuram, Kerala.</p>
                <div className="ml-10 flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/binshal/" className="flex items-center gap-2 hover:text-white transition-colors">
                        <SiLinkedin size={18} className="text-blue-500" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/binshal" className="flex items-center gap-2 hover:text-white transition-colors">
                        <SiGithub size={18} />
                        <span>GitHub</span>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Tech Stack Section */}
        <section className="pb-20 md:pb-32">
            <h3 className="text-center text-sm font-semibold tracking-widest text-gray-400 uppercase mb-10">
                Tech Stack
            </h3>
            <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto">
                {techStack.map((tech, index) => (
                    <TechItem key={`${tech.name}-${index}`} icon={tech.icon} name={tech.name} />
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}
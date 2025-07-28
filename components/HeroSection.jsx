import { Linkedin, Github } from 'lucide-react';

// You can replace this with your actual image URL
const profileImageUrl = "https://placehold.co/176x176/2d3748/ffffff?text=Stefan";

// Tech stack icons as simple React components
// This keeps your JSX cleaner and more organized.

const ReactIcon = () => (
  <svg className="w-8 h-8 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const NextJsIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 0C28.654 0 0 28.654 0 64C0 99.346 28.654 128 64 128C99.346 128 128 99.346 128 64C128 28.654 99.346 0 64 0ZM95.333 97.82L69.58 53.854V97.82H58.24V30.18H69.58L95.333 74.146V30.18H106.667V97.82H95.333Z" fill="white"/>
  </svg>
);

const JsIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" fill="#F7DF1E"/>
    <path d="M99.134 90.138C98.414 91.878 96.974 93.318 94.814 94.458C92.654 95.598 90.014 96.168 86.894 96.168C82.814 96.168 79.214 95.298 76.094 93.558C72.974 91.818 70.634 89.268 69.074 85.908C67.514 82.548 66.734 78.618 66.734 74.118C66.734 69.618 67.514 65.688 69.074 62.328C70.634 58.968 72.974 56.418 76.094 54.678C79.214 52.938 82.814 52.068 86.894 52.068C90.254 52.068 93.014 52.638 95.174 53.778C97.334 54.918 98.774 56.478 99.494 58.458L88.934 63.378C88.574 62.418 88.034 61.698 87.314 61.218C86.594 60.738 85.634 60.498 84.434 60.498C82.454 60.498 80.834 61.128 79.574 62.388C78.314 63.648 77.684 65.418 77.684 67.698C77.684 69.978 78.314 71.748 79.574 73.008C80.834 74.268 82.454 74.898 84.434 74.898C85.634 74.898 86.594 74.658 87.314 74.178C88.034 73.698 88.574 72.978 88.934 72.018L99.134 77.298C98.414 79.038 96.974 80.478 94.814 81.618C92.654 82.758 90.014 83.328 86.894 83.328C82.814 83.328 79.214 82.458 76.094 80.718C72.974 78.978 70.634 76.428 69.074 73.068C67.514 69.708 66.734 65.778 66.734 61.278C66.734 56.778 67.514 52.848 69.074 49.488C70.634 46.128 72.974 43.578 76.094 41.838C79.214 40.098 82.814 39.228 86.894 39.228C90.974 39.228 94.574 40.098 97.694 41.838C100.814 43.578 103.154 46.128 104.714 49.488C106.274 52.848 107.054 56.778 107.054 61.278C107.054 62.148 106.994 62.928 106.874 63.618H77.294C77.414 66.858 78.254 69.468 79.814 71.448C81.374 73.428 83.414 74.418 85.934 74.418C87.854 74.418 89.474 74.058 90.794 73.338C92.114 72.618 93.254 71.658 94.214 70.458L99.134 90.138Z" fill="black"/>
  </svg>
);

const TsIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" fill="#3178C6"/>
        <path d="M51.104 96.288V40.12H62.024V85.368H92.936V96.288H51.104ZM71.848 64.952C71.848 61.16 72.568 57.92 74.008 55.232C75.448 52.544 77.448 50.576 80.008 49.328C82.568 48.08 85.528 47.456 88.888 47.456C93.064 47.456 96.448 48.248 99.04 49.832C101.632 51.416 103.336 53.696 104.152 56.672L94.216 60.464C93.856 59.216 93.136 58.248 92.056 57.56C90.976 56.872 89.656 56.528 88.096 56.528C86.128 56.528 84.52 57.08 83.272 58.184C82.024 59.288 81.4 60.848 81.4 62.864C81.4 64.88 82.024 66.44 83.272 67.544C84.52 68.648 86.128 69.2 88.096 69.2C89.656 69.2 90.976 68.856 92.056 68.168C93.136 67.48 93.856 66.512 94.216 65.264L104.152 69.056C103.336 72.032 101.632 74.312 99.04 75.896C96.448 77.48 93.064 78.272 88.888 78.272C85.528 78.272 82.568 77.648 80.008 76.4C77.448 75.152 75.448 73.184 74.008 70.496C72.568 67.808 71.848 64.952 71.848 61.76C71.848 58.568 72.568 55.88 74.008 53.696C75.448 51.512 77.448 49.928 80.008 48.944C82.568 47.96 85.528 47.472 88.888 47.472C93.064 47.472 96.448 48.264 99.04 49.848C101.632 51.432 103.336 53.712 104.152 56.688L94.216 60.48C93.856 59.232 93.136 58.264 92.056 57.576C90.976 56.888 89.656 56.544 88.096 56.544C86.128 56.544 84.52 57.096 83.272 58.2C82.024 59.304 81.4 60.864 81.4 62.88C81.4 64.896 82.024 66.456 83.272 67.56C84.52 68.664 86.128 69.216 88.096 69.216C89.656 69.216 90.976 68.872 92.056 68.184C93.136 67.496 93.856 66.528 94.216 65.28L104.152 69.072C103.336 72.048 101.632 74.328 99.04 75.912C96.448 77.496 93.064 78.288 88.888 78.288C85.528 78.288 82.568 77.664 80.008 76.416C77.448 75.168 75.448 73.2 74.008 70.512C72.568 67.824 71.848 64.968 71.848 61.776Z" fill="white"/>
    </svg>
);

const TailwindIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 55 33" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.3873 25.6127 0 16.5 0C7.3873 0 0 7.3873 0 16.5C0 25.6127 7.3873 33 16.5 33Z" fill="#38BDF8"></path>
    <path d="M38.5 16.5C38.5 25.6127 45.8873 33 55 33C55 23.8873 47.6127 16.5 38.5 16.5Z" fill="#38BDF8" fillOpacity="0.5"></path>
  </svg>
);

const HtmlIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 0L0 115.15L52.5 128L105 115.15L113.75 0H11.25Z" fill="#E44D26"/>
    <path d="M52.5 117.85V10.7H102.55L95.1 106.3L52.5 117.85Z" fill="#F16529"/>
    <path d="M52.5 59.2H76.7L78.65 37.4H52.5V26H92.4L92 31.45L88.25 79.5H52.5V70.25H74.35L75.1 59.2H52.5Z" fill="white"/>
    <path d="M52.5 98.15L52.4 98.1L32.75 92.8L31.3 77.75H41.85L42.55 85.5L52.4 88.1L52.5 88.15V98.15Z" fill="#EBEBEB"/>
    <path d="M52.4 59.2V70.25H30.1L27.85 45.95H52.4V37.4H17.8L21.55 79.5H52.4V98.15L32.75 92.8L32.2 86.85L24.2 79.5H23.5L21.55 59.2H52.4Z" fill="#EBEBEB"/>
  </svg>
);

const CssIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 0L0 115.15L52.5 128L105 115.15L113.75 0H11.25Z" fill="#1572B6"/>
    <path d="M52.5 117.85V10.7H102.55L95.1 106.3L52.5 117.85Z" fill="#33A9DC"/>
    <path d="M52.5 59.2H75.1L76.15 48.05H52.5V37.4H88.45L88.1 41.9L85.9 70.25H52.5V59.2Z" fill="white"/>
    <path d="M52.5 98.15L52.4 98.1L32.75 92.8L31.3 77.75H41.85L42.55 85.5L52.4 88.1L52.5 88.15V98.15Z" fill="#EBEBEB"/>
    <path d="M52.4 59.2V70.25H29.8L27.85 48.05H52.4V37.4H17.5L21.55 79.5H52.4V98.15L32.75 92.8L32.2 86.85L24.2 79.5H23.5L21.55 59.2H52.4Z" fill="#EBEBEB"/>
  </svg>
);

const ScssIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="15" fill="#CD6799"/>
        <path d="M102.4 64C102.4 50.8296 93.3656 39.7544 81.196 35.82C84.3992 30.64 85.3336 24.3448 83.6408 18.4C79.8136 5.2 66.56 0 66.56 0C66.56 0 53.3064 5.2 49.4792 18.4C47.7864 24.3448 48.7208 30.64 51.924 35.82C40.0344 39.4744 30.72 50.8296 30.72 64C30.72 77.1704 40.0344 88.5256 51.924 92.18C48.7208 97.36 47.7864 103.655 49.4792 109.6C53.3064 122.8 66.56 128 66.56 128C66.56 128 79.8136 122.8 83.6408 109.6C85.3336 103.655 84.3992 97.36 81.196 92.18C93.3656 88.5256 102.4 77.1704 102.4 64ZM66.56 107.52C60.16 107.52 55.04 103.68 53.76 98.08C53.76 97.8 53.76 97.52 53.76 97.24C53.76 94.44 54.8304 91.64 56.6488 89.6C58.4672 87.56 61.036 86.28 63.8728 86C64.9432 85.72 65.7592 85.72 66.56 85.72C67.3608 85.72 68.1768 85.72 69.2472 86C72.084 86.28 74.6528 87.56 76.4712 89.6C78.2896 91.64 79.36 94.44 79.36 97.24C79.36 97.52 79.36 97.8 79.36 98.08C78.08 103.68 72.96 107.52 66.56 107.52Z" fill="white"/>
    </svg>
);

const CypressIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="64" fill="#1B1D1E"/>
        <path d="M103.4 56.6C103.4 50.7 101.5 45.1 97.8 39.8C94.1 34.5 88.8 29.9 82.2 26.3C75.6 22.7 67.9 20.9 59.5 21.1C51.1 21.3 43.1 23.5 36.1 27.5C29.1 31.5 23.3 37.2 19.3 44.1C15.3 51 13.2 58.9 13.4 67.3C13.6 75.7 15.8 83.7 19.8 90.7C23.8 97.7 29.5 103.5 36.4 107.5C43.3 111.5 51.2 113.6 59.6 113.4C68 113.2 75.9 111 82.5 107C89.1 103 94.4 97.6 98.1 91C101.8 84.4 103.6 76.7 103.4 68.3L68.4 68.3V33.3L103.4 33.3V56.6Z" fill="#A5E5A8"/>
    </svg>
);


// Tech Item component for reusability
const TechItem = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-3 border border-gray-800 rounded-lg bg-[#181818] hover:border-gray-700 transition-colors duration-300">
    {icon}
    <span className="text-gray-400 text-xs">{name}</span>
  </div>
);

export default function HeroSection() {
  const techStack = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Next.JS', icon: <NextJsIcon /> },
    { name: 'JavaScript', icon: <JsIcon /> },
    { name: 'TypeScript', icon: <TsIcon /> },
    { name: 'Tailwind', icon: <TailwindIcon /> },
    { name: 'HTML', icon: <HtmlIcon /> },
    { name: 'CSS', icon: <CssIcon /> },
    { name: 'SCSS', icon: <ScssIcon /> },
    { name: 'Cypress', icon: <CypressIcon /> },
  ];

  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans flex flex-col justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* Navigation */}
        <nav className="flex items-center justify-between py-11">
          <h1 className="text-xl font-bold tracking-wider text-gray-400 uppercase">
            Mohammed Binshal P
          </h1>
          <div className="text-lg hidden md:flex items-center gap-6 text-gray-400">
            <a href="#experience" className="hover:text-white transition-colors">Work Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav>

        {/* Main Hero Content */}
        <main className="py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-14">
            
            {/* Profile Picture */}
            <div className="relative w-44 h-44 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
                    <img
                        src={profileImageUrl}
                        alt="Stefan Topalović"
                        className="w-full h-full object-cover rounded-full bg-[#111111] p-1"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 leading-tight">
                Hey, I'm Stefan. I'm a Frontend Software Developer.
              </h2>
              
              <div className="mt-5 flex items-center justify-center md:justify-start gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <p className="text-green-400 text-sm">Open to work</p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-3 text-gray-400 text-sm">
                <p>📍 Belgrade, Serbia.</p>
                <div className="flex items-center gap-6">
                    <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Github size={18} />
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
            <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
                {techStack.slice(0, 5).map((tech) => (
                    <TechItem key={tech.name} icon={tech.icon} name={tech.name} />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mt-4">
                {techStack.slice(5).map((tech) => (
                    <TechItem key={tech.name} icon={tech.icon} name={tech.name} />
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}
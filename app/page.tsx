import ContactForm from "@/components/ContactForm"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-center space-x-8 py-8">
        <a href="#home" className="font-medium">
          Home
        </a>
        <a href="#about" className="font-medium">
          About
        </a>
        <a href="#projects" className="font-medium">
          Projects
        </a>
        <a href="#contact" className="font-medium">
          Contact
        </a>
      </nav>

      {/* Profile Section */}
      <section className="flex flex-col items-center mt-4" id="home">
        <div className="relative">
          <div className="w-64 h-64 rounded-full border-2 border-black relative">
            <Image
              src="/chetan.png"
              alt="Profile picture"
              width={240}
              height={240}
              className="rounded-full object-cover pt-3 pl-3"
            />
            <div className="absolute -top-1 left-5 bg-[#f24e1e] rounded-full p-2 shadow-md">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold">
                  <img src="/html.png" alt="HTML" />
                </span>
              </div>
            </div>
            <div className="absolute bottom-6 -left-1 bg-[#323330] rounded-full p-2 shadow-md">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-xs">
                  <img src="/nodejs.png" alt="node" />
                </span>
              </div>
            </div>
            <div className="absolute -right-6 top-1/3 bg-[#f0db4f] rounded-full p-2 shadow-md">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-black font-bold">
                  <img src="/javascript.png" alt="javascript" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mt-6">Hello👋, I'm Chetan</h1>
        <p className="text-lg">Fullstack Developer</p>

        <div className="flex space-x-3 mt-4">
          <a href="https://github.com/Ch3tan5aini?tab=overview&from=2025-03-01&to=2025-03-02" target="_blank" className="text-black size-6">

            <img src="/github.png" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/chetan-saini-7ba892326/" target="_blank" className="text-black size-6">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://x.com/ch3tan5aini" target="_blank" className="text-black size-6">
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/ch3tan_5aini" target="_blank" className="text-black size-6">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </section>

      <div className="max-w-5xl mx-auto w-full px-4 mt-12">
        <hr className="border-gray-300" />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto w-full px-4 mt-8 grid md:grid-cols-2 gap-8" id="about">
        {/* Left Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className="text-gray-800">
              I am a passionate and dedicated full-stack web developer with a strong foundation in modern technologies.
              Exploring both front-end and back-end development to create dynamic applications. My creativity,
              curiosity, and problem-solving mindset drive me to build impactful digital solutions, while my eagerness
              to learn keeps me adaptable in an ever-evolving tech landscape.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <p className="text-gray-800">
              I am currently pursuing a Bachelor of Computer Applications (BCA) at Govt. Holkar Science College, Indore.
              Beyond academics, I actively engage in self-directed learning, exploring advanced web development tools
              and frameworks to complement my formal education and prepare for real-world challenges.
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">Skills & Tools</h2>

            <h3 className="font-medium mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium flex items-center">
                <span className="mr-1">●</span> Javascript
              </span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium flex items-center">
                <span className="mr-1">●</span> Python
              </span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium flex items-center">
                <span className="mr-1">●</span> C
              </span>
            </div>

            <h3 className="font-medium mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">Cleark</span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium flex items-center">
                Git & Github
              </span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">JWT</span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">MongoDB</span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">Postman</span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">Notion</span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">Etc...</span>
            </div>

            <h3 className="font-medium mb-2">Design & Editing</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">Photoshop</span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">Figma</span>
              <span className="px-3 py-1 bg-[#1E293B] text-white rounded-full text-sm font-medium">Canva</span>
            </div>
          </section>
        </div>
      </div>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto w-full px-4 mt-12" id="projects">
        <h2 className="text-2xl font-bold text-center mb-8">My Projects & Contributions</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
            <div className="p-4">
              <Image
                src="/expenseTracker.PNG"
                alt="Expense Tracker"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-4">Expense Tracker</h3>
              <p className="text-gray-700 text-sm mt-1">
                A simple and intuitive web application designed to help users manage their finances.
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/Ch3tan5aini/Expense-Tracker"
                  target="_blank"
                  className="inline-flex items-center justify-center bg-[#3b82f6] text-white px-4 py-2 rounded-md text-sm"
                >
                  <img src="/github.png" className="invert mr-2 size-5" alt="Github" />
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md border flex items-center justify-center border-gray-200">
            Soon...
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0f172a] text-white mt-16 py-12" id="contact">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 ">
          <div className="flex justify-start items-center md:px-20">
            <h2 className="text-4xl md:text-left md:text-5xl font-bold">
              Let's Collaborate
              <br />
              on Your Project
            </h2>

          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025</p>

          <div className="flex space-x-3 mt-4">
            <a href="https://github.com/Ch3tan5aini?tab=overview&from=2025-03-01&to=2025-03-02" target="_blank" className="text-black invert size-5">

              <img src="/github.png" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/chetan-saini-7ba892326/" target="_blank" className="text-black invert size-5">
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://x.com/ch3tan5aini" target="_blank" className="text-black invert size-5">
              <img src="/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/ch3tan_5aini" target="_blank" className="text-black invert size-5">
              <img src="/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}


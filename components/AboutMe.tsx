import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-white mb-12">Crafting Excellence</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative">
              <Image
                src="/aboutMe.jpg"
                alt="About Me"
                className="rounded-lg shadow-2xl w-full max-w-sm mx-auto"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg"></div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <p className="text-xl mb-6 leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-xl mb-6 leading-relaxed text-gray-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
              <ul className="grid grid-cols-2 gap-4">
              {['Custom Furniture', 'Fine Joinery', 'Wood Carving', 'Restoration', 'Inlay Work', 'Finish Application'].map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
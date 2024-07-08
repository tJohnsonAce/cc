import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Lorem Ipsum</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/3 flex-shrink-0">
            <Image
              src="/placeholder.jpg"
              alt="Placeholder image"
              className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="text-xl mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Dummy List</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt</li>
                <li>Ut labore et dolore magna aliqua</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
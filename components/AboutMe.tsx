export default function AboutMe() {
    return (
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="lg:w-1/3 flex-shrink-0">
              <img 
                src="/aboutMe.jpg" 
                alt="Me in my workshop" 
                className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div className="lg:w-2/3">
              <p className="text-xl mb-6 leading-relaxed">
                Hey there! I'm just a regular guy who found his passion in woodworking. 
                What started as a hobby has turned into a full-blown obsession with creating 
                unique, handcrafted pieces that tell a story.
              </p>
              <p className="text-xl mb-6 leading-relaxed">
                Whether you're looking for a custom dining table, a one-of-a-kind bookshelf, 
                or just want to bounce some ideas around, I'm all ears. Let's create something awesome together!
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Quality craftsmanship in every piece</li>
                  <li>Personalized designs tailored to your needs</li>
                  <li>Sustainable materials and practices</li>
                  <li>Attention to detail from start to finish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-red-700">
                Stanford Academy
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#academics" className="text-gray-700 hover:text-red-700 font-medium">Academics</a>
              <a href="#research" className="text-gray-700 hover:text-red-700 font-medium">Research</a>
              <a href="#admissions" className="text-gray-700 hover:text-red-700 font-medium">Admissions</a>
              <a href="#campus" className="text-gray-700 hover:text-red-700 font-medium">Campus Life</a>
              <a href="#about" className="text-gray-700 hover:text-red-700 font-medium">About</a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80')`
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Excellence in
                <span className="block text-red-400">Education</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                Empowering minds through innovative learning, groundbreaking research,
                and a commitment to academic excellence that shapes tomorrow's leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg">
                  Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Stanford Academy?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to academic excellence and innovation creates an environment
                where students thrive and reach their full potential.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">World-Class Faculty</h3>
                <p className="text-gray-600">Learn from renowned professors and industry experts committed to your academic success.</p>
              </div>
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Hub</h3>
                <p className="text-gray-600">Access cutting-edge research facilities and participate in groundbreaking discoveries.</p>
              </div>
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Community</h3>
                <p className="text-gray-600">Join a diverse network of scholars from around the world, fostering lifelong connections.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Shaping the Future Through Education
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  For over a century, Stanford Academy has been at the forefront of educational innovation,
                  preparing students to tackle the world's most pressing challenges with knowledge, creativity, and integrity.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-700 mb-2">95%</div>
                    <div className="text-sm text-gray-600">Graduate Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-700 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Academic Programs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-700 mb-2">15:1</div>
                    <div className="text-sm text-gray-600">Student-Faculty Ratio</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-700 mb-2">150+</div>
                    <div className="text-sm text-gray-600">Countries Represented</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-red-700">
                    <div className="w-24 h-24 mx-auto mb-4 bg-red-700 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold">Campus Video Tour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Academic Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of undergraduate and graduate programs
                designed to prepare you for success in your chosen field.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Engineering</h3>
                <p className="text-gray-600 text-sm mb-4">Cutting-edge programs in computer science, electrical engineering, and more.</p>
                <a href="#" className="text-red-700 font-medium hover:text-red-800">Learn More →</a>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business</h3>
                <p className="text-gray-600 text-sm mb-4">MBA and business programs that develop tomorrow's leaders.</p>
                <a href="#" className="text-red-700 font-medium hover:text-red-800">Learn More →</a>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Medicine</h3>
                <p className="text-gray-600 text-sm mb-4">World-renowned medical programs and research opportunities.</p>
                <a href="#" className="text-red-700 font-medium hover:text-red-800">Learn More →</a>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Liberal Arts</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive programs in humanities, social sciences, and arts.</p>
                <a href="#" className="text-red-700 font-medium hover:text-red-800">Learn More →</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-red-400 mb-4">Stanford Academy</div>
              <p className="text-gray-400 mb-4">
                Empowering minds through innovative learning and academic excellence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Academics</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Undergraduate</a></li>
                <li><a href="#" className="hover:text-white">Graduate</a></li>
                <li><a href="#" className="hover:text-white">Professional</a></li>
                <li><a href="#" className="hover:text-white">Online Learning</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Campus</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Student Life</a></li>
                <li><a href="#" className="hover:text-white">Housing</a></li>
                <li><a href="#" className="hover:text-white">Dining</a></li>
                <li><a href="#" className="hover:text-white">Recreation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Visit Campus</a></li>
                <li><a href="#" className="hover:text-white">News & Events</a></li>
                <li><a href="#" className="hover:text-white">Alumni</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Stanford Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

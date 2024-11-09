import React from 'react';
// Import images
// Current correct imports you have:
import profileImg from '../images/baida.jpg';
import htmlIcon from '../images/html5.png';
import cssIcon from '../images/css3.png';
import arcgisIcon from '../images/ARCGIS.png';
import qgisIcon from '../images/QGIS.png';
import autocadIcon from '../images/autocad.png';
import covadisIcon from '../images/covadis.png';
import microstationIcon from '../images/microstation.png';
import pythonIcon from '../images/Python.png';
import sqlIcon from '../images/SQL.png';
const Portfolio = () => {
  return (
    <div className="w-full">
      {/* Navbar Section */}
      <nav className="fixed w-full p-4 z-50 bg-crimson">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">BAIDA BRAHIM</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-gray-200">Home</a>
            <a href="#about" className="text-white hover:text-gray-200">About</a>
            <a href="#skills" className="text-white hover:text-gray-200">Skills</a>
            <a href="#experience" className="text-white hover:text-gray-200">Experience</a>
            <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-4">
            <h3 className="text-2xl">Hello 👋 I'm</h3>
            <h1 className="text-6xl font-bold">BAIDA BRAHIM</h1>
            <h2 className="text-3xl">Élève Ingénieur en sciences géomatiques et ingénierie topographique</h2>
            <div className="flex space-x-4 mt-8">
              <a href="#contact" className="bg-crimson text-white px-6 py-3 rounded-md hover:bg-red-700">
                Contact Me
              </a>
              <a href="mailto:brahim.bn2003@gmail.com" className="bg-crimson text-white px-6 py-3 rounded-md hover:bg-red-700">
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-width max-w-6xl mx-auto px-4">
          <div className="title-wrapper relative mb-16">
            <h2 className="title text-4xl font-bold text-center relative">
              About me
            </h2>
            {/* Decorative line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-44 h-0.5 bg-black"></div>
            {/* Subtitle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3">
              <span className="bg-white px-2 text-lg text-crimson relative z-10">
                who am i
              </span>
            </div>
          </div>
          <div className="about-content flex flex-wrap items-center justify-between">
            <div className="column left w-full md:w-[45%]">
              <img src={profileImg} alt="BAIDA BRAHIM" className="h-[400px] w-[400px] object-cover rounded-[20px]" />
              
              <div className="mt-6">
                <div className="wrapper flex justify-center gap-4">
                  <div className="button1 relative w-[45px] h-[45px] bg-white rounded-[35px] cursor-pointer overflow-hidden transition-all duration-300 hover:w-[150px] group shadow-md">
                    <div className="icon w-[45px] h-[45px] text-center inline-block rounded-[35px] transition-all duration-300 group-hover:bg-[#307de1]">
                      <a href="https://www.linkedin.com/in/brahimbaida/" target="_blank" rel="noreferrer" className="text-crimson group-hover:text-white flex items-center justify-center h-full">
                        <i className="fab fa-linkedin text-lg"></i>
                      </a>
                    </div>
                    <span className="ml-2 text-[#307de1]">LinkedIn</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="column right w-full md:w-[55%] mt-8 md:mt-0">
              <div className="text text-2xl font-bold mb-4">
              Je suis BAIDA BRAHIM<span className="break"> un  <span className="typing2 text-crimson"> étudiant en ingénierie</span></span>
              </div>
              <p className="text-justify leading-relaxed">
              Je suis un étudiant en ingénierie dévoué en sciences géomatiques et en ingénierie topographique à l'IAV HASSAN II.
              Je suis passionné par la traduction des connaissances techniques en applications pratiques et par l'amélioration continue de mes compétences pour rester à jour avec les dernières tendances du secteur. 
              Mon expérience comprend le travail avec divers instruments topographiques, logiciels SIG et outils de programmation qui démontrent ma capacité à gérer des projets techniques complexes
              </p>
        {/* Languages and Soft Skills Section */}
          <div className="mt-6 flex justify-between gap-8">
            {/* Languages Section */}
                <div className="flex-1">
                <h3 className="font-bold text-xl mb-3">Languages:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-language text-crimson mr-3"></i>
                    Arabic: Native
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-language text-crimson mr-3"></i>
                    French: Fluent
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-language text-crimson mr-3"></i>
                    English: Technical
                  </li>
                </ul>
              </div>
            {/* Soft Skills Section */}
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3">Soft Skills:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-users text-crimson mr-3"></i>
                      Travail d'équipe
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-clock text-crimson mr-3"></i>
                      Gestion du temps
                    </li>
                    <li className="flex items-center">
                    <i className="fas fa-headphones text-crimson mr-3"></i>
                    Capacité d'écoute
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">CAD & GIS Software</h3>
              <div className="grid grid-cols-3 gap-6">
                <img src={arcgisIcon} alt="ArcGIS" className="w-16 h-16 hover:scale-110 transition-transform" />
                <img src={qgisIcon} alt="QGIS" className="w-16 h-16 hover:scale-110 transition-transform" />
                <img src={autocadIcon} alt="AutoCAD" className="w-16 h-16 hover:scale-110 transition-transform" />
                <img src={covadisIcon} alt="Covadis" className="w-16 h-16 hover:scale-110 transition-transform" />
                <img src={microstationIcon} alt="Microstation" className="w-16 h-16 hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Development Tools</h3>
              <div className="grid grid-cols-3 gap-6">
                <img src={htmlIcon} alt="HTML5" className="w-16 h-16 hover:scale-110 transition-transform" />
                <img src={cssIcon} alt="CSS3" className="w-16 h-16 hover:scale-110 transition-transform" />
                <img src={pythonIcon} alt="PYTHON" className="w-16 h-16 hover:scale-110 transition-transform" />
                <img src={sqlIcon} alt="SQL" className="w-16 h-16 hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-bold mb-8">Experience</h2>
          </div>
          <div className="grid gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Stage d'entreprise - September 2024</h3>
              <p className="text-gray-600 mb-4">TEMARA, Maroc</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Project d'extension routière: Calculation of impacted plot areas</li>
                <li>Technical documentation preparation</li>
                <li>3D laser scanning and drone data processing</li>
                <li>ESRI ARCGIS pro training for 3D data management</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Stage de professionnalisme - June-July 2024</h3>
              <p className="text-gray-600 mb-4">TIFELT, Maroc</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Geodesy Project</li>
                <li>Digital Topography Project</li>
                <li>Photogrammetry Project</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Stage d'initiation - July 2023</h3>
              <p className="text-gray-600 mb-4">LAYOUNNE, Maroc</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Cadastre operations supervision (15 days)</li>
                <li>Property title verification</li>
                <li>Technical documentation management</li>
                <li>Land registry data update and maintenance</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Association marocaine des étudiants topographes</h3>
              <p className="text-gray-600 mb-4">RABAT, Maroc</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Active member since 2022</li>
                <li>Participation in 24th edition Forum AMETOP-Entreprises (June 2024)</li>
                <li>Participation in 7th edition of the caravane Espoir 2024</li>
                <li>Participation in 23rd edition Forum AMETOP-Entreprises (June 2023)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Mon contact</h3>
              <div className="space-y-6">
                <p className="flex items-center space-x-4">
                  <i className="fas fa-envelope text-crimson w-6"></i>
                  <span>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:brahim.bn2003@gmail.com" className="text-crimson hover:underline">
                      brahim.bn2003@gmail.com
                    </a>
                  </span>
                </p>
                <p className="flex items-center space-x-4">
                  <i className="fas fa-phone-alt text-crimson w-6"></i>
                  <span>
                    <strong>Phone:</strong> 06.36.42.43.00
                  </span>
                </p>
                <p className="flex items-center space-x-4">
                  <i className="fas fa-map-marker-alt text-crimson w-6"></i>
                  <span>
                    <strong>Location:</strong> RABAT, Maroc
                  </span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border rounded-md focus:border-crimson focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded-md focus:border-crimson focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border rounded-md focus:border-crimson focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full p-3 border rounded-md focus:border-crimson focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-crimson text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} BAIDA BRAHIM. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/brahimbaida/" target="_blank" rel="noreferrer" className="hover:text-crimson">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll Up Button */}
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
    </div>
  );
};
export default Portfolio;

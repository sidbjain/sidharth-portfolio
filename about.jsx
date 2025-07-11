import React, { useState, useEffect } from 'react';
import { X, User, Target, Briefcase, Award, CheckCircle, ArrowRight, Globe, Users, TrendingUp, Calendar } from 'lucide-react';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: "Excel (Advanced)", level: 95, color: "bg-green-500" },
    { name: "SAP PM", level: 90, color: "bg-blue-500" },
    { name: "JIRA", level: 88, color: "bg-purple-500" },
    { name: "Resource Management", level: 92, color: "bg-orange-500" },
    { name: "Project Coordination", level: 94, color: "bg-pink-500" },
    { name: "SCRUM", level: 87, color: "bg-indigo-500" }
  ];

  const achievements = [
    { icon: <Users className="w-6 h-6" />, number: "50+", text: "Projects Coordinated" },
    { icon: <Globe className="w-6 h-6" />, number: "3+", text: "Years Experience" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "100%", text: "Client Satisfaction" },
    { icon: <Calendar className="w-6 h-6" />, number: "24/7", text: "Global Support" }
  ];

  const expertise = [
    "Cross-functional team coordination",
    "Staffing & resource allocation",
    "Onboarding/offboarding processes",
    "WBSE cost tracking & analysis",
    "Client meeting logistics",
    "Process automation & reporting",
    "Project timeline management",
    "Stakeholder communication"
  ];

  const goHome = () => {
    window.location.href = "index.html";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-500/90"></div>
        
        {/* Close Button */}
        <button 
          onClick={goHome}
          className="fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:rotate-90 shadow-lg"
        >
          <X size={24} />
        </button>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <User className="w-16 h-16 mx-auto mb-4 text-white/80" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Freelance Project Coordinator | Excel | SAP | JIRA | Resource Management
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Who I Am Section */}
        <section className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Who I Am</h2>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                I'm <span className="text-blue-600 font-semibold">Sidharth Jain</span>, a freelance Project Coordinator and Resource Management Specialist with over 3 years of experience supporting global operations at scale. I specialize in streamlining project workflows, aligning the right people to the right roles, and ensuring smooth project execution using tools like <span className="font-semibold text-purple-600">Excel (Advanced), SAP PM, and JIRA</span>.
              </p>
              
              <p>
                I've worked with cross-functional teams to handle staffing, onboarding/offboarding, WBSE cost tracking, and client meeting logistics. My strength lies in improving efficiency, automating reports, and maintaining clarity across project timelines.
              </p>
              
              <p>
                Whether you're a startup needing structure or an enterprise managing global resources, I bring process-driven coordination and clear communication to every engagement. I'm always open to collaborating on new and impactful projects around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 text-white">
                    {achievement.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</h3>
                  <p className="text-gray-600 font-medium">{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Core Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 delay-500`}
                      style={{ width: isLoaded ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Areas of Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={`max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how I can help streamline your projects and boost your team's efficiency.
            </p>
            <a 
              href="contact.html"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              Get In Touch
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

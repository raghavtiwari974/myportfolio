import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Globe, Zap, Cpu } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python', level: 'Expert', icon: Code, color: 'from-green-400 to-blue-500', delay: 0 },
    { name: 'JavaScript', level: 'Expert', icon: Globe, color: 'from-yellow-400 to-orange-500', delay: 200 },
    { name: 'React', level: 'Expert', icon: Zap, color: 'from-cyan-400 to-blue-500', delay: 400 },
    { name: 'Node.js', level: 'Advanced', icon: Server, color: 'from-green-400 to-emerald-500', delay: 600 },
    { name: 'Database', level: 'Advanced', icon: Database, color: 'from-purple-400 to-pink-500', delay: 800 },
    { name: 'DevOps', level: 'Advanced', icon: Cpu, color: 'from-red-400 to-pink-500', delay: 1000 },
  ];

  return (
    <section id="skills-section" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            🧠 Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mastering the art of code with cutting-edge technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 hover:rotate-1 ${
                  isVisible ? 'animate-slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${skill.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-3">{skill.name}</h3>
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-white text-sm font-medium">
                    {skill.level}
                  </span>
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 p-1 rounded-full animate-pulse">
            <div className="bg-gray-900 px-8 py-4 rounded-full">
              <span className="text-white font-semibold">Always Learning, Always Growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
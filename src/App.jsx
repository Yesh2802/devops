import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiKubernetes, SiDocker, SiTerraform, SiAnsible, SiPython, SiJenkins, SiGithubactions, SiPrometheus, SiGrafana, SiElastic, SiVault, SiPostman } from 'react-icons/si';
// --- Data ---
const portfolioData = {
  name: "Yeshwanth Kanukuntla",
  title: "Aspiring DevOps Engineer",
  bio: "Enthusiastic and motivated fresher with a strong foundation in DevOps practices. Eager to contribute to automating infrastructure, streamlining deployment pipelines, and ensuring system reliability using cloud-native technologies and best practices.",
  contact: {
    email: "yeshwanthkanukuntla@gmail.com",
    linkedin: "https://linkedin.com/in/kyeshwanth2802",
    github: "https://github.com/yesh2802",
    resumePdf: "/resume.pdf",
  },
  projects: [
    {
      id: 1,
      title: "Secure DevOps Pipeline",
      description: "A fully automated DevSecOps pipeline deploying a containerized Python web app. Utilizes Terraform, Ansible, Docker, Kubernetes, GitHub Actions, and integrates security scanning.",
      link: "https://github.com/yesh2802/secure-devops-pipeline",
      repoLink: "https://github.com/yesh2802/secure-devops-pipeline",
      tags: ["DevSecOps", "Kubernetes", "Docker", "Terraform", "Ansible", "GitHub Actions", "Python"],
    },
    {
      id: 2,
      title: "IaC with Terraform & Ansible",
      description: "Provisioned and configured a multi-node environment on local VMs using Vagrant, Terraform for infrastructure definition, and Ansible for configuration management.",
      link: "https://github.com/yourusername/iac-vagrant-demo",
      repoLink: "https://github.com/yourusername/iac-vagrant-demo",
      tags: ["IaC", "Terraform", "Ansible", "Vagrant", "Virtualization"],
    },
    {
      id: 3,
      title: "Monitoring with Prometheus & Grafana",
      description: "Set up real-time monitoring for Dockerized applications. Implemented custom Python exporters, configured Prometheus for metrics scraping, and built insightful dashboards in Grafana.",
      link: "https://github.com/yourusername/monitoring-stack",
      repoLink: "https://github.com/yourusername/monitoring-stack",
      tags: ["Monitoring", "Prometheus", "Grafana", "Docker", "Python", "Observability"],
    },
  ],
  skills: [
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Ansible", icon: <SiAnsible /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Prometheus", icon: <SiPrometheus /> },
    { name: "Grafana", icon: <SiGrafana /> },
    { name: "ELK Stack", icon: <SiElastic /> },
    { name: "Vault", icon: <SiVault /> },
    { name: "Postman/Newman", icon: <SiPostman /> },
  ],
  education: [
    {
    degree: "Master of Technology in Cybersecurity and Information Assurance",
    institution: "University of Central Missouri, Lee's Summit, MO", 
        year: "2025",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Jawaharlal Nehru Technological University, Hyderabad",
      year: "2023",
    },
  ],
  certifications: [
    {
      name: "Microsoft Technology Associate",
      issuer: "Microsoft",
      year: "2023",
    },
  ],
};

// --- Reusable Components ---
function Section({ title, children, id }) {
  return (
    <section id={id} className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2 text-gray-100">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProjectCard({ title, description, link, repoLink, tags = [] }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300 border border-gray-800 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-3 text-blue-400">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
      {tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-auto flex items-center space-x-4">
        <a
          href={link}
          className="text-blue-400 hover:text-blue-300 hover:underline text-sm inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View project details for ${title}`}
        >
          <FaExternalLinkAlt className="mr-1" /> View Project
        </a>
        {repoLink && (
          <a
            href={repoLink}
            className="text-gray-500 hover:text-gray-300 text-sm inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View GitHub repository for ${title}`}
          >
            <FaGithub className="mr-1" /> Repo
          </a>
        )}
      </div>
    </div>
  );
}

function SkillBadge({ name, icon }) {
  return (
    <li className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
      {icon && React.cloneElement(icon, { className: "text-lg text-blue-400" })}
      <span className="text-sm text-gray-300">{name}</span>
    </li>
  );
}

function EducationCard({ degree, institution, year }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{degree}</h3>
      <p className="text-gray-400 text-sm">{institution}</p>
      <p className="text-gray-400 text-sm">{year}</p>
    </div>
  );
}

function CertificationCard({ name, issuer, year }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{name}</h3>
      <p className="text-gray-400 text-sm">{issuer}</p>
      <p className="text-gray-400 text-sm">{year}</p>
    </div>
  );
}


function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-gray-900 text-gray-400 flex items-center justify-between"
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="p-4 bg-gray-800 text-gray-300">{children}</div>}
    </div>
  );
}

// --- Main Portfolio Component ---
export default function DevOpsPortfolio() {
  const { name, title, bio, contact, projects, skills, education, certifications } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-mono p-6 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
         <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {name}
          </h1>
          <p className="text-xl text-gray-400 mb-4">{title}</p>
          <p className="text-gray-300 max-w-2xl mx-auto text-base font-sans">{bio}</p>
          <div className="mt-6 flex justify-center space-x-6">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="GitHub Profile">
              <FaGithub size={24} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn Profile">
              <FaLinkedin size={24} />
            </a>
            <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Send Email">
              <FaEnvelope size={24} />
            </a>
          </div>
        </header>
        

        <Section title="About Me" id="about">
          <p className="text-gray-300 text-lg">
            Welcome to my portfolio! I am an aspiring DevOps Engineer with a passion for automating infrastructure, streamlining deployment pipelines, and ensuring system reliability using cloud-native technologies and best practices.
          </p>
        </Section>

        <Section title="Featured Projects" id="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                repoLink={project.repoLink}
                tags={project.tags}
              />
            ))}
          </div>
        </Section>

        <Section title="Tools & Technologies" id="skills">
          <ul className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </ul>
        </Section>

        <Section title="Education" id="education">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <EducationCard key={index} degree={edu.degree} institution={edu.institution} year={edu.year} />
            ))}
          </div>
        </Section>

        <Section title="Certifications" id="certifications">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} name={cert.name} issuer={cert.issuer} year={cert.year} />
            ))}
          </div>
        </Section>

        <Section title="Contact & Resume" id="contact">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div>
              <p className="text-gray-400 mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" /> {contact.email}
              </p>
              <p className="text-gray-400 mb-2 flex items-center">
                <FaLinkedin className="mr-2 text-blue-400" />
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-300">LinkedIn Profile</a>
              </p>
              <p className="text-gray-400 flex items-center">
                <FaGithub className="mr-2 text-blue-400" />
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-300">GitHub Profile</a>
              </p>
            </div>
            <a
              href={contact.resumePdf}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 text-base font-semibold"
              download
            >
              <FaFilePdf className="mr-2" /> Download Resume
            </a>
          </div>
        </Section>

        <footer className="text-center text-sm text-gray-600 mt-20 pb-8">
          <p>Built with React & Tailwind CSS. Hosted on GitHub Pages.</p>
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

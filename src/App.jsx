import React, { useState } from "react";
import { VscAzure } from 'react-icons/vsc';
import { IoMdDocument } from 'react-icons/io';
import { FaAws, FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaJava } from 'react-icons/fa'; // Removed FaAccessibleIcon as it wasn't used
import { SiJira, SiCplusplus, SiPytest, SiCypress, SiSelenium, SiGnubash, SiJavascript, SiKubernetes, SiDocker, SiTerraform, SiAnsible, SiPython, SiJenkins, SiGithubactions, SiPrometheus, SiGrafana, SiElastic, SiVault, SiPostman, } from 'react-icons/si';

// --- Data ---
const portfolioData = {
    name: "Yeshwanth Kanukuntla",
    title: "Aspiring DevOps Engineer",
    bio: "",
    contact: {
        email: "yeshwanthkanukuntla@gmail.com",
        linkedin: "https://linkedin.com/in/kyeshwanth2802",
        github: "https://github.com/yesh2802",
        resumePdf: "/devops/DevOPS.pdf",
    },
    skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Bash", icon: <SiGnubash /> },
        { name: "Azure", icon: <VscAzure /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "Ansible", icon: <SiAnsible /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "Prometheus", icon: <SiPrometheus /> },
        { name: "Grafana", icon: <SiGrafana /> },
        { name: "ELK Stack", icon: <SiElastic /> },
        { name: "Vault", icon: <SiVault /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Selenium", icon: <SiSelenium /> },
        { name: "Cypress", icon: <SiCypress /> },
        { name: "PyTest", icon: <SiPytest /> },
        { name: "Jira", icon: <SiJira /> },
    ],
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
            link: "https://github.com/yesh2802/iac-vagrant-demo", // Corrected username
            repoLink: "https://github.com/yesh2802/iac-vagrant-demo", // Corrected username
            tags: ["IaC", "Terraform", "Ansible", "Vagrant", "Virtualization"],
        },
        {
            id: 3,
            title: "Monitoring with Prometheus & Grafana",
            description: "Set up real-time monitoring for Dockerized applications. Implemented custom Python exporters, configured Prometheus for metrics scraping, and built insightful dashboards in Grafana.",
            link: "https://github.com/Yesh2802/Prometheus-Grafana-Monitoring",
            repoLink: "https://github.com/Yesh2802/Prometheus-Grafana-Monitoring",
            tags: ["Monitoring", "Prometheus", "Grafana", "Docker", "Python", "Observability"],
        },
        {
            id: 4,
            title: "DevOps Portfolio",
            description: "Devops portfolio project demonstrates the deployment of a React application using Vite for efficient development and build processes. It includes configurations for ESLint to maintain code quality and Tailwind CSS for styling.",
            link: "https://github.com/Yesh2802/devops",
            repoLink: "https://github.com/Yesh2802/devops",
            tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "ESLint", "PostCSS", "HTML", "GitHub Actions"],
        },
    ],
    // --- ADDED Experience Section Data ---
    experience: [
        // Add your actual experience here. Example below:
        {
            title: "Software Quality Assurance Intern",
            company: "Planon",
            location: "Hyderabad, India",
            years: "Aug 2022 - Aug 2023",
            description: [
                "Developed and executed manual and automated test cases for cloud-hosted applications, ensuring functionality and reliability.",
                "Implemented CI/CD pipelines using Jenkins and GitHub Actions to streamline deployments.",
                "Collaborated with security and application teams to integrate security best practices in the testing framework.",
                "Implemented PowerShell scripts to automate configuration management and improve cloud security policies.",

            ],
        },
    ],
    education: [
        {
            degree: "Masters of Science Cybersecurity and Information Assurance",
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
            name: "API Testing and Postman Automation",
            issuer: "Coursera",
            year: "2024",
        },
        {
            name: "Microsoft Technology Associate: Security Fundamentals", 
            issuer: "Microsoft",
            year: "2022",
        },
        {
            name: "Cloud Computing Foundations",
            issuer: "Google",
            year: "2024",
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
                {link && ( // Conditionally render link
                    <a
                        href={link}
                        className="text-blue-400 hover:text-blue-300 hover:underline text-sm inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View details for ${title}`} // Changed label slightly
                    >
                        <FaExternalLinkAlt className="mr-1" /> View Project
                    </a>
                )}
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

// --- ADDED ExperienceCard Component ---
function ExperienceCard({ title, company, location, years, description = [] }) {
    return (
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-1 text-blue-400">{title}</h3>
            <p className="text-gray-400 text-sm font-medium mb-1">{company}</p>
            <p className="text-gray-500 text-xs mb-3">{location} • {years}</p>
            {description.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm mb-4 flex-grow">
                    {description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            )}
        </div>
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


function Accordion({ title, children }) { // Keep Accordion if you plan to use it elsewhere, otherwise remove
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

    const { name, title, bio, contact, projects, skills, experience, education, certifications } = portfolioData;
    const [showAllProjects, setShowAllProjects] = useState(false);

    const displayedProjects = showAllProjects || projects.length <= 3 ? projects : projects.slice(0, 3);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-mono p-6 md:p-12 lg:p-16">
            <div className="max-w-6xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        {name}
                    </h1>
                    <p className="text-xl text-gray-400 mb-4">{title}</p>
                    {/* Changed bio font to sans-serif for better readability */}
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
                        {/*Document Icon*/}
                        <a
                            href={contact.resumePdf}
                            target="_blank" // Open PDF in new tab is often better than download
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="View Resume PDF"
                        >
                            <IoMdDocument size={24} />
                        </a>
                    </div>
                </header>

                {/* Removed the simple "About Me" section as the header bio serves a similar purpose, but you can add it back if you prefer */}
                {
        <Section title="About Me" id="about">
                        <p className="text-gray-300 text-lg text-justify font-sans">
                            I’m a results-driven Software Engineer with a strong DevOps and programming foundation, passionate about designing reliable systems, writing clean code, and automating infrastructure for fast, secure software delivery. With hands-on experience as a graduate student, I specialize in developing scalable solutions using Python, JavaScript, and object-oriented programming principles, while leveraging cloud platforms like AWS and Azure.</p>
                        <p className="text-gray-300 text-lg text-justify font-sans">
                            I bring end-to-end expertise from architecting CI/CD pipelines with tools like GitHub Actions and Jenkins, to managing infrastructure as code using Terraform and Ansible, and deploying containerized applications on Kubernetes and Docker. I’m also skilled in system monitoring and observability using Prometheus, Grafana, and ELK Stack.</p>
                        <p className="text-gray-300 text-lg text-justify font-sans">
                            Driven by a performance-first mindset, I thrive in cross-functional teams where I can bridge development and operations, improve code quality and deployment speed, and contribute to building secure, resilient, and maintainable software systems.
          </p>
        </Section>
        }

                <Section title="Tools & Technologies" id="skills">
                    <ul className="flex flex-wrap gap-4">
                        {skills.map((skill) => (
                            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                        ))}
                    </ul>
                </Section>

                <Section title="Featured Projects" id="projects">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedProjects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                    {projects.length > 3 && ( // Only show button if there are more than 3 projects
                        <div className="text-center mt-8"> {/* Increased margin-top */}
                            <button
                                onClick={() => setShowAllProjects(!showAllProjects)}
                                className="text-blue-400 hover:text-blue-300 text-sm flex items-center justify-center mx-auto px-4 py-2 rounded border border-blue-400 hover:bg-blue-900/30 transition-colors duration-200" // Added some button styling
                            >
                                {showAllProjects ? (
                                    <>
                                        <FaChevronUp className="mr-2" /> Show Less Projects
                                    </>
                                ) : (
                                    <>
                                        <FaChevronDown className="mr-2" /> Show More Projects
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </Section>

                {/* --- ADDED Experience Section Rendering --- */}
                {experience && experience.length > 0 && ( // Only render if experience data exists and has items
                    <Section title="Experience" id="experience">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Adjust grid columns as needed */}
                            {experience.map((exp, index) => (
                                <ExperienceCard
                                    key={index}
                                    title={exp.title}
                                    company={exp.company}
                                    location={exp.location}
                                    years={exp.years}
                                    description={exp.description}
                                />
                            ))}
                        </div>
                    </Section>
                )}
                {/* --- End ADDED Experience Section Rendering --- */}

                <Section title="Education" id="education">
                    {/* Changed grid layout for potentially fewer items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu, index) => (
                            <EducationCard key={index} degree={edu.degree} institution={edu.institution} year={edu.year} />
                        ))}
                    </div>
                </Section>

                <Section title="Certifications" id="certifications">
                    {/* Changed grid layout for potentially fewer items */}
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
                                <FaEnvelope className="mr-2 text-blue-400 flex-shrink-0" /> {contact.email}
                            </p>
                            <p className="text-gray-400 mb-2 flex items-center">
                                <FaLinkedin className="mr-2 text-blue-400 flex-shrink-0" />
                                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-300 break-all">LinkedIn Profile</a>
                            </p>
                            <p className="text-gray-400 flex items-center">
                                <FaGithub className="mr-2 text-blue-400 flex-shrink-0" />
                                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-300 break-all">GitHub Profile</a>
                            </p>
                        </div>
                        <a
                            href={contact.resumePdf}
                            className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 text-base font-semibold mt-4 md:mt-0 flex-shrink-0" // Added flex-shrink-0
                            download // Add download attribute if you want it to force download instead of opening in browser
                            aria-label="Download Resume"
                        >
                            <FaFilePdf className="mr-2" /> Download Resume
                        </a>
                    </div>
                </Section>

                <footer className="text-center text-sm text-gray-600 mt-20 pb-8 font-sans"> {/* Changed font */}
                    <p>Built with React & Tailwind CSS. Deployed via GitHub Actions.</p> {/* Updated deployment info */}
                    <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

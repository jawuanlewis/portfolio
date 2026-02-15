import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "@/components/contact-form";
import ProjectCard from "@/components/project-card";
import SkillCategory from "@/components/skill-category";
import ExperienceItem from "@/components/experience-item";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl dark:text-white">
              Portfolio
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Skills
              </Link>
              <Link
                href="#experience"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center">
              <ThemeToggle />
              <button className="md:hidden ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 dark:text-white">
                Hi, I&apos;m{" "}
                <span className="text-gray-900 dark:text-gray-100">
                  Jawuan Lewis
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Software engineer passionate about building high-quality
                solutions.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-white transition"
                >
                  Contact Me
                </Link>
                <Link
                  href="#projects"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:text-white"
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <Image
                  src="/profile.png"
                  alt="Jawuan Lewis"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m a software engineer with a Master&apos;s degree in
              Computer Science from Arizona State University, where I
              concentrated in Big Data Systems. I&apos;m passionate about using
              technology to turn ideas into impactful solutions, with a strong
              foundation in full-stack development, data systems, and emerging
              AI-driven applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Outside of work, you&apos;ll often find me building side projects,
              drawing, playing basketball, or getting into a good movie; I enjoy
              keeping things creative. I&apos;m always looking for opportunities
              to grow as a developer, collaborate with great teams, and
              contribute to meaningful projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Hangman"
              description="Developed a browser game where players must correctly guess the letters of mystery words, which come in several different themes: movies, video games, sports, etc."
              techStack={["React", "Node.js", "Express.js", "MongoDB"]}
              githubLink="https://github.com/jawuanlewis/hangman-client"
              demoLink="https://hangman.jawuanlewis.dev"
            />
            <ProjectCard
              title="Jawuan's GPT"
              description="Built a personal chatbot that provides persistent chat history and effective responses to user questions, powered by OpenAI's GPT-4 models."
              techStack={["React", "TypeScript", "Node.js", "MongoDB"]}
              githubLink="https://github.com/jawuanlewis/gpt-powered-chatbot"
              demoLink="https://gpt.jawuanlewis.dev"
            />
            <ProjectCard
              title="Demographic Income Insights"
              description="Created a dashboard of data visualizations to analyze the impact of certain demographic factors on an individual's income."
              techStack={["Python", "Jupyter Notebook", "Pandas", "Matplotlib"]}
              githubLink="https://github.com/jawuanlewis/demographic-income-insights"
            />
            {/* <ProjectCard
              title="Personal Finance Tracker"
              description="Developed a web application for tracking personal finances with visualization tools and budget planning features."
              techStack={["React", "TypeScript", "Express", "PostgreSQL"]}
              githubLink="https://github.com/johndoe/finance-tracker"
            />
            <ProjectCard
              title="Augmented Reality Navigation"
              description="Created an AR mobile application that provides real-time navigation guidance in indoor environments."
              techStack={["Swift", "ARKit", "Core ML", "Firebase"]}
              githubLink="https://github.com/johndoe/ar-navigation"
            />
            <ProjectCard
              title="Blockchain Voting System"
              description="Implemented a secure and transparent voting system using Ethereum blockchain technology."
              techStack={["Solidity", "Web3.js", "React", "Node.js"]}
              githubLink="https://github.com/johndoe/blockchain-voting"
              demoLink="https://blockchain-voting-demo.example.com"
            /> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory
              title="Programming Languages"
              skills={[
                "Java",
                "JavaScript",
                "TypeScript",
                "Python",
                "C#",
                "C++",
                "SQL",
              ]}
            />
            <SkillCategory
              title="Frameworks & Libraries"
              skills={["React", "Node.js", "Express.js", "Quarkus", "ASP.NET"]}
            />
            <SkillCategory
              title="Tools & Platforms"
              skills={[
                "AWS",
                "Git",
                "Harness",
                "GitHub Actions",
                "Jupyter Notebook",
                "Figma",
              ]}
            />
            <SkillCategory
              title="Databases"
              skills={["Snowflake", "MongoDB", "PostgreSQL", "MySQL"]}
            />
            <SkillCategory
              title="Methodologies"
              skills={["Agile", "CI/CD", "REST APIs", "System Design", "TDD"]}
            />
            <SkillCategory
              title="Areas of Interest"
              skills={[
                "Data Science",
                "Machine Learning",
                "UI/UX Design",
                "Object-Oriented Programming",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <ExperienceItem
              title="Backend Engineer Intern"
              company="Cadent"
              period="February 2025 - May 2025"
              description="Worked on the Data & Yield team to design efficient data pipelines."
              achievements={[
                "Developed a pipeline to determine the most impactful data features on ad revenue",
                "Uncovered insights that improved ad auction revenue by 75%",
                "Configured AI models to predict bidding prices for digital ad spaces with >80% accuracy",
              ]}
            />
            <ExperienceItem
              title="Software Engineering Intern"
              company="Warner Bros. Discovery"
              period="June 2024 - August 2024"
              description="Joined the Quality Assurance team to build CI/CD workflows."
              achievements={[
                "Created a workflow to auto-generate code documentation for software projects",
                "Deployed a website to host the docs and increase onboarding speed by 50%",
                "Integrated my tool into the team's production deployment for seamless access",
              ]}
            />
            <ExperienceItem
              title="Software Development Engineer Intern"
              company="Amazon"
              period="June 2023 - September 2023"
              description="Worked on the Amazon Photos team to ensure customer data integrity."
              achievements={[
                "Reinstated an internal system to identify anomalies within customer data",
                "Constructed a plan to eliminate the discrepancies, achieving 99.999% consistency",
                "Led a system-wide migration to a new data source for reading content from S3",
              ]}
            />
            <ExperienceItem
              title="Software Development Intern"
              company="Sandhills Global"
              period="March 2022 - May 2023"
              description="Collaborated with the team who maintains a product called Snow Cloud."
              achievements={[
                "Contributed to the development of Snow Cloud, a workflow management system",
                "Delivered full-stack product updates in response to stakeholder feedback",
                "Leveraged ASP.NET and internal APIs to build efficient web services",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
            Contact Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Get In Touch
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I am always open to meeting new people or learning about
                opportunities. Feel free to reach out, I&apos;m happy to
                connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" />
                  <a
                    href="mailto:jawuan.lewis4@gmail.com"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    jawuan.lewis4@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" />
                  <a
                    href="https://linkedin.com/in/jawuan-lewis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    linkedin.com/in/jawuan-lewis
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3 text-gray-700 dark:text-gray-300" />
                  <a
                    href="https://github.com/jawuanlewis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    github.com/jawuanlewis
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:text-white"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white dark:bg-gray-950 dark:border-t dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>
                &copy; {new Date().getFullYear()} Jawuan Lewis. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/jawuanlewis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/jawuan-lewis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:jawuan.lewis4@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

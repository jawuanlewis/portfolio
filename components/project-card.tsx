import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  demoLink,
}: Readonly<ProjectCardProps>) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-3">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <SiGithub className="h-4 w-4 mr-1" />
            <span>Code</span>
          </Link>
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              <span>Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

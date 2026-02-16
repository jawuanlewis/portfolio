interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export default function ExperienceItem({
  title,
  company,
  period,
  description,
  achievements,
}: Readonly<ExperienceItemProps>) {
  return (
    <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6">
      <h3 className="text-xl font-bold dark:text-white">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-2">
        <span className="text-lg text-gray-700 dark:text-gray-300">
          {company}
        </span>
        <span className="text-gray-500 dark:text-gray-400">{period}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <ul className="list-disc list-inside space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}

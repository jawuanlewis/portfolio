interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

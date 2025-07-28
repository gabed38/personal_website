import resume from '@/data/resume.json'

export default function ResumePage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {resume.experience.map((job, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-bold">{job.role}, {job.company}</h3>
            <p className="italic text-sm mb-1">{job.dates}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {resume.education.map((edu, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-bold">{edu.school}</h3>
            <p className="italic text-sm mb-1">{edu.dates}</p>
            <p>{edu.degree}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {resume.skills.map((skill, idx) => (
            <li key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
// app/careers/page.tsx

type Job = {
  id: number;
  title: string;
  description: any;
  applyLink?: string;
};

async function getJobs(): Promise<Job[]> {
  const res = await fetch(
    "http://localhost:1337/api/job-postings?filters[isActive][$eq]=true",
    { cache: "no-store" }
  );

  const json = await res.json();

  return json.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    applyLink: item.applyLink,
  }));
}

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-4">
        Careers at Cynaris Solutions
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Join our team and grow your career in the IT industry.
      </p>

      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">
              {job.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {job.description?.[0]?.children?.[0]?.text}
            </p>

            <a
              href={`/contact?job=${encodeURIComponent(job.title)}`}
              className="text-blue-600 text-sm font-semibold hover:underline"
            >
              Apply Now →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

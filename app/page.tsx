const student = {
  name: "Arogundade Rodiat Damilola",
  matricNumber: "24/COICT/DSC/003",
  department: "Data Science",
  level: "300 Level",
};

const courses = [
  {
    code: "ITC 301",
    title: "Introduction to Computing",
    status: "Completed",
  },
  {
    code: "CSC 302",
    title: "Computer Programming",
    status: "Completed",
  },
  {
    code: "MTH 301",
    title: "General Mathematics",
    status: "Completed",
  },
  {
    code: "GST 301",
    title: "Use of English",
    status: "Completed",
  },
  {
    code: "STA 301",
    title: "Introduction to Statistics",
    status: "Completed",
  },
  {
    code: "ITC 301",
    title: "Web Development",
    status: "In Progress",
  },
  {
    code: "CSC 301",
    title: "Data Structures",
    status: "Pending",
  },
  {
    code: "GST 301",
    title: "Entrepreneurship Studies",
    status: "Pending",
  },
];

export default function Home() {
  const completed = courses.filter(
    (course) => course.status === "Completed"
  ).length;

  const pending = courses.filter(
    (course) => course.status === "Pending"
  ).length;

  const inProgress = courses.filter(
    (course) => course.status === "In Progress"
  ).length;

  const summary = [
    {
      title: "Total Courses",
      value: courses.length,
      icon: "📚",
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Completed Courses",
      value: completed,
      icon: "✅",
      color: "bg-green-50 text-green-700",
    },
    {
      title: "Pending Courses",
      value: pending,
      icon: "⏳",
      color: "bg-orange-50 text-orange-700",
    },
    {
      title: "In Progress",
      value: inProgress,
      icon: "📝",
      color: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-20 text-slate-800">
      {/* Header */}
      <header className="bg-red-700 text-green shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-yellow-100">
              Student Dashboard
            </h1>
            <p className="mt-1 text-sm text-black-100">
              Welcome to your academic space
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-700">
            S
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl space-y-8 px-6 py-8">
        {/* Student Profile */}
        <section>
          <h2 className="mb-4 text-xl font-bold">
            Student Profile
          </h2>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl">
                👩‍🎓
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold">
                  {student.name}
                </h3>
                <p className="mt-1 text-slate-500">
                  {student.department}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">
                  Matriculation Number
                </p>
                <p className="mt-1 font-semibold">
                  {student.matricNumber}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">
                  Academic Level
                </p>
                <p className="mt-1 font-semibold">
                  {student.level}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Summary */}
        <section>
          <h2 className="mb-4 text-xl font-bold">
            Course Overview
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {summary.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${item.color}`}
                >
                  {item.icon}
                </div>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>
                <p className="mt-2 text-3xl font-bold">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Course List */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                My Courses
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your registered courses for this semester
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {courses.length} Courses
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Course Code
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Course Title
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {courses.map((course) => (
                    <tr
                      key={course.code}
                      className="border-t border-slate-100 transition hover:bg-slate-50"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-semibold text-blue-700">
                        {course.code}
                      </td>

                      <td className="px-6 py-4">
                        {course.title}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            course.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : course.status === "Pending"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {course.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-4 text-center text-sm text-slate-500">
          Student Dashboard ©️ 2026 | Built with Next.js and TypeScript
        </footer>
      </div>
    </main>
  );
}

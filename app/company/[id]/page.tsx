import prisma from '@/lib/prisma';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const company = await prisma.company.findUnique({
    where: { id: Number(id) },
  });

  if (!company) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center text-[#333]">
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-2xl font-semibold text-center text-[#C92228]"> Company Not Found! Please Verify the correct Company Id and try again. </h1>
        </div>
      </div>
    );
  }

  const sections = [
    {
      title: 'Basic Company Information',
      data: [
        ['Company Name', company.name],
        ['Registration Number', company.registrationNumber],
        ['Tax ID', company.taxId],
        ['Status', company.status],
        ['Incorporation Date', company.incorporationDate.toDateString()],
      ],
    },
    {
      title: 'Company Address',
      data: [
        ['Headquarters', company.headquarters],
        ['County', company.county],
        ['Postal Code', company.postalCode],
      ],
    },
    {
      title: 'Activities',
      data: [
        ['Main Activity', company.mainActivity],
        ['Secondary Activities', company.secondaryActivities],
      ],
    },
    {
      title: 'Company Management',
      data: [
        ['Administrator', company.administrator],
        ['Shareholders', company.shareholders],
      ],
    },
    {
      title: 'Financial Information',
      data: [
        ['Last Reported Revenue', `€${company.revenue.toLocaleString()}`],
        ['Net Profit', `€${company.netProfit.toLocaleString()}`],
        ['Employees', company.employees],
      ],
    },
  ];

  return (
    <div className="bg-[#f9f9f9] min-h-screen text-[#333]">
      <header className="bg-[#C92228] text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Company Details</h1>
        <p className="mt-2">Results for Registration ID: <strong>{company.registrationNumber}</strong></p>
      </header>

      <main className="max-w-4xl mx-auto my-8 bg-white p-6 rounded-2xl shadow-md">
        {sections.map((section, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="border-b-2 border-[#C92228] pb-2 mb-4 text-xl font-semibold">
              {section.title}
            </h2>
            <table className="w-full border-collapse mb-4">
              <tbody>
                {section.data.map(([label, value], index) => (
                  <tr key={index} className="border border-gray-300">
                    <th className="bg-gray-100 px-4 py-2 text-left font-medium w-1/3">
                      {label}
                    </th>
                    <td className="px-4 py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </main>
    </div>
  );
}
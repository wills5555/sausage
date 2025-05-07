import Card from "@/components/ui/Card";

export default function RecentPosts() {
  const posts = [
    {
      title: "Business Registration Essentials",
      description: "Learn the key requirements for registering your business properly and maintaining compliance with local regulations.",
      image: "/api/placeholder/400/250",
      date: "Apr 15, 2025",
      author: "Admin"
    },
    {
      title: "Regulatory Changes in 2025",
      description: "Stay updated on the latest regulatory changes affecting business registrations and compliance requirements.",
      image: "/api/placeholder/400/250",
      date: "Mar 28, 2025",
      author: "Admin"
    },
    {
      title: "International Business Compliance",
      description: "Navigate the complex landscape of international business registration and compliance across multiple jurisdictions.",
      image: "/api/placeholder/400/250",
      date: "Mar 10, 2025",
      author: "Admin"
    }
  ];

  return (
    <section className="section bg-white mt-4 py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-700">Recent Posts</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              description={post.description}
              image={post.image}
              imageAlt={post.title}
              link="#"
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
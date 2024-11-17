import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Interior Designer",
    comment:
      "Kualitas furnitur dari Surpet Barokah sangat memuaskan. Pelayanannya juga ramah dan profesional.",
    avatar: "/images/avatars/budi.jpg",
    rating: 5,
  },
  // ... tambahkan testimonial lainnya
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-background-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-foreground font-semibold">
                {testimonial.name}
              </h4>{" "}
              <p className="text-foreground-muted text-sm">
                {testimonial.role}
              </p>
            </div>
          </div>
          <p className="text-foreground-muted text-sm mb-4">
            {testimonial.comment}
          </p>
          <div className="flex items-center gap-2">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.361-.921 1.672 0l1.658 3.208a1 1 0 00.67.912h.008v.811h-.008a1 1 0 00-.67-.912l-1.658-3.208z"
                />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

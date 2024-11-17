export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
}

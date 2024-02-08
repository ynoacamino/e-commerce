export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-5xl font-bold mb-8">
      {children}
    </h1>
  );
}

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight w-full">
      {children}
    </h2>
  );
}

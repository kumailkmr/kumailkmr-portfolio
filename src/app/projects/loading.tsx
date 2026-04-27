export default function LoadingProjects() {
  return (
    <div className="container mx-auto grid gap-4 px-4 py-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-56 animate-pulse rounded-2xl bg-white/10" />)}
    </div>
  );
}

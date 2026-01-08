export default function MainPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="main-layout min-h-screen max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 py-8 md:py-12">
      {children}
    </main>
  );
}

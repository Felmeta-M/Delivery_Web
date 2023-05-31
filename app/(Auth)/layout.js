export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <div className="flex flex-col min-h-screen">
          <header className="bg-white shadow-lg">
            {/* Add your header content here */}
          </header>
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-200 py-4">
            {/* Add your footer content here */}
          </footer>
        </div>
      </body>
    </html>
  );
}
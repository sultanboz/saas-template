import { Navbar } from '@/components/layout/Navbar'

/**
 * Shared layout for pages that use the standard Navbar.
 * Keeps Navbar mounted across navigations to prevent state loss / hydration issues.
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

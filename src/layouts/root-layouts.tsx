import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { OnboardingCheck } from '../components/onboarding-check';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}
export const RootLayout = () => {
  const navigate = useNavigate()


  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <OnboardingCheck />
      <div>
        <header>
          <Link to="/">Home</Link>

          <SignedIn>
            <Link to="/onboarding">Onboarding</Link>
            <Link to="/dashboard">Dashboard</Link>

            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  )
}

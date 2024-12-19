import * as React from 'react'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export const OnboardingCheck = () => {

  const { user, isLoaded } = useUser()
  const navigate = useNavigate()

  React.useEffect(() => {

    // check if Clerk and loaded and there is a user.id, which means in a signed in user
    if (isLoaded && user?.id) {
      // check onboarding status. 
      if (!user?.publicMetadata.onboardingComplete) {
        // if 'onboardingComplete: true' is not set, then redirect user to /onboarding
        navigate('/onboarding')
      }
    }
  }, [user, isLoaded])

  return null
}

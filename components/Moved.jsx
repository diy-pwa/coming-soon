import React from 'react';

// <Redirect> is:
//  - Lazy-loaded
//  - Loaded and rendered only in the browser
export default function() {
    const [Component, setComponent] = React.useState(() => Loading)
  
    // useEffect() callbacks are only run in the browser, consequently the map component
    // is loaded and rendererd only in the browser.
    React.useEffect(() => {
      setComponent(() => React.lazy(() => import('./Redirect.jsx')))
    }, [])
  
    return (
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    )
  }
  
  function Loading() {
    return <p>moved permanently</p>

  }
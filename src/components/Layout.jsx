import FeatureHeader from './FeatureHeader.jsx'
import FeatureModal from './FeatureModal.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

// the help chat's live line to the team (site.js reads it): the backend that forwards it to the
// support group on Telegram. Without it, picking a teammate points to the contact page.
const CHAT_URL = import.meta.env.VITE_CHAT_URL || undefined

// Every page: the navbar (or, on feature pages, the "View full page" strip), the page's
// <main>, the footer, the feature pop-up shell and the help chat's backend address.
export default function Layout({ route, layout, children }) {
  const home = route === '/'
  return (
    <>
      {layout === 'feature' ? <FeatureHeader route={route} /> : <Navbar brandHref={home ? '#' : '/'} isLanding={home} />}
      <div className="container" />
      {children}
      <Footer />
      <FeatureModal fullPageHref={home ? '#' : route.replace(/\.html$/, '') + '#'} />
      {CHAT_URL && <div hidden data-avx-chat-url={CHAT_URL} />}
    </>
  )
}

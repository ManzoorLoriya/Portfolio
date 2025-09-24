import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import NetworkBackground from "./components/NetworkBackground"

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-gray-200">
      <NetworkBackground />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-blue-600 focus:text-white focus:px-3 focus:py-2 focus:rounded">Skip to main content</a>
      <div className="relative z-10">
        <Header />
      </div>
      <main id="main" className="relative z-10 flex-grow">
        <Home />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

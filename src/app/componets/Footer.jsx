import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-gray-950 text-center py-4 fixed bottom-0 text-white font-light">
      <p>&copy; {new Date().getFullYear()} Meet Sojitra.{" "} All rights reserved.</p>
    </div>
  )
}

export default Footer

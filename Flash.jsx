import React from 'react'
import { motion } from 'framer-motion' 
import { useAuth0 } from '@auth0/auth0-react'

function Flash() {
  const{isAuthenticated,user}=useAuth0()
  return (
    <div></div>
  )
}

export default Flash
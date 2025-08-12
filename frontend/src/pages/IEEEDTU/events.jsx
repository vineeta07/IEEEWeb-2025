import boilerPlate from '@/layout/Boilerplate'
import React from 'react'
import Events from '@/components/Events'

function events() {
  return (
    <div><Events></Events></div>
  )
}

export default boilerPlate(events)
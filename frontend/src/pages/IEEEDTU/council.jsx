import boilerPlate from '@/layout/Boilerplate'
import React from 'react'
import Council from '@/components/Council/council'
import Testimonials from '@/components/Council/testimonials'

function council() {
  return (
    <><div><Council></Council></div>
    <div><Testimonials></Testimonials></div></>
  )
}

export default boilerPlate(council)
import React from 'react'
import Slider from './Slider/Slider'
import Caltegories from './LehengaCategories/Caltegories'
import Trending from './Trending/Trending'
import BestSeller from './BestSeller/BestSeller'
import BridalCol from './BridalCol/BridalCol'

const Dashboard = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>
        <Caltegories />
      </div>
      <div>
        <Trending />
      </div>
      <div>
        <BestSeller />
      </div>
      <div>
        <BridalCol />
      </div>

    </div>
  )
}

export default Dashboard

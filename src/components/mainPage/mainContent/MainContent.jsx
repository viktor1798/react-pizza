import React from 'react'
import { Categories } from './Categories'
import { PizzaBlock } from './PizzaBlock'

export const MainContent = () => {
  return (
<div className="content">
        <div className="container">
          <Categories/>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock/>
          </div>
        </div>
      </div>
  )
}

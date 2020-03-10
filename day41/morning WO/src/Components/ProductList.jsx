import React from 'react';


export default class ProductList extends React.Component{
  render() {
    return (
      <div className="product-list">
    
       <div className="product">
           <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg" alt="" />>
           <div className="name">Propulsion gel</div>
       </div>
    
       <div className="product">
           <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg" alt="" />
           <div className="name">Weight cube</div>
       </div>
    
       <div className="product">
           <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jpg" alt="" />
           <div className="name">A friend</div>
       </div>
    
       <div className="product">
           <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg" alt="" />
           <div className="name">Portal gun</div>
       </div>
    
       <div className="product">
           <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg" alt="" />
           <div className="name">Home-defense robot</div>
       </div>
    
       <div className="product">
           <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg" alt="" />
      <div className="name">Cake (not a lie)</div>
      </div>
    
     </div>
    )
  }
}
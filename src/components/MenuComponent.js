import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
              DishdetailComponent: null, 
              dishes: DISHES
        };
        console.log('Menu Component constructor is involved')
    }
    componentDidMount(){
      'Menu Component componentDidMount is involved'
    }

    onDishSelect(dish){
        this.setState({DishdetailComponent: dish});
    }

    renderDish(dish){
        if (dish != null){
          return(
            <Card className='col-12 col-md-5 m-1' >
               <CardImg width="100%" src={dish.image} alt={dish.name} />
               <CardBody>
                <CardTitle>
                  {dish.name}
                </CardTitle>
                <CardText>
                  {dish.description}
                </CardText>
               </CardBody>
               <Dishdetail dishes={this.state.dishes}/>
            </Card>
            
          );
        }
        else{
          return(
            <div>

            </div>
          );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle> {dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className='row'>
              {this.renderDish(this.state.DishdetailComponent)}

            </div>
          </div>
        );
    }
}

export default Menu;
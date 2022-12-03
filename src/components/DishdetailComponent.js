import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';


class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Dishdetail: null
        };

    }
    renderComments(dish) {
        if (dish != null) {
            return (
                <Card className='col-12 col-md-5'>
                    <CardBody>
                        <CardText>
                            {dish.comments}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
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
                <CardTitle> {dish.name}</CardTitle>
                <CardText> {dish.comments} </CardText>
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






export default Dishdetail;
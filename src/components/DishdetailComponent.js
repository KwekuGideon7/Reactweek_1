import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';


class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Dishdetail: null
        };

    }
    onDishSelect(dish){
        this.setState({DishdetailComponent: dish});
    }
    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map((comment) => <div key={comment.id}>
                <p>
                {comment.author}
                </p>
                <p>
                {comment.date}

                </p>
                <p>
                    {comment.comment}
                </p>
                </div>)
            return (
                <Card className='col-12 col-md fcard'>
                    <CardBody>
                        <CardText>
                            {comments}
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
              {this.renderComments(this.state.DishdetailComponent)}

            </div>
          </div>
        );
    }
    

}






export default Dishdetail;
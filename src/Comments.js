import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from './actions/actions'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Comments extends Component {
    componentDidMount = () => {
        this.props.getComments()
    }
    render() {
        return (
            <div>
                {
                    this.props.commentsList.filter(comment => this.props.match.params.id == comment.postId).map(el => <div>
                        <Card>
                            <Card.Body><h2>{el.name}</h2></Card.Body>
                            <Card.Body>{el.email}</Card.Body>
                            <Card.Body>{el.body}</Card.Body>
                        </Card>
                    </div>)
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        commentsList: state.rootReducer
    }
}
export default connect(mapStateToProps, { getComments })(Comments);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPosts } from './actions/actions'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class Posts extends Component {
    componentDidMount = () => {
        this.props.getPosts()
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div>

                {
                    this.props.contactPost.filter(post => this.props.match.params.id == post.userId).map(
                        el =>
                            <div>
                                <Card>
                                    <Card.Body><h3>{el.title}</h3></Card.Body>
                                    <Card.Body>{el.body}</Card.Body>
                                </Card>
                                <Link to={`/comments/${el.id}`}>
                                    <Button variant="outline-success">Comments</Button>
                                </Link>


                            </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contactPost: state.rootReducer
    }
}

export default connect(mapStateToProps, { getPosts })(Posts);
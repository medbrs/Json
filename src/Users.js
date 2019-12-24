import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUsers } from './actions/actions'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class Users extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <div>
                {
                    this.props.UsersList.map(user =>
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>Name : {user.name}</Card.Title>
                                <Card.Text>
                                    UserName : {user.username}
                                    <br />
                                    E-mail : {user.email}
                                </Card.Text>
                                <Link to={`/posts/${user.id}`}>
                                <Button variant="primary">Posts</Button>
                                </Link>
                               
                            </Card.Body>
                        </Card>)
                }
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        UsersList: state.rootReducer
    }
}
export default connect(mapStateToProps, { getUsers })(Users);
import React from 'react';
import {connect} from 'react-redux';
// import {fetchUser} from '../actions';

class UserHeader extends React.Component {

    // no need this anymore since we have fetchPostsAndUsers
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {  
        const {user} = this.props;

        if (!user) { return null;}
        
        return (
            <div className="header">{user.name}</div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps, 
    // {fetchUser}
    )(UserHeader);
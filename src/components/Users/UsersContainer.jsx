import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";
import Paginator from "../../common/paginator";
import Box from "@material-ui/core/Box";
import {positions} from '@material-ui/system';
import {spacing} from '@material-ui/system';
import styles from "./Users.module.css";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (e, p) => {
        this.props.getUsers(p, this.props.pageSize)
        this.props.setCurrentPage(p)
        debugger;
    }


    render() {

        return <>
            {this.props.isFetching ? <div> Loading... </div> : null}
            <div className={styles.usersPageStyle}>
                <Paginator totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           page={this.props.currentPage}
                           onPageChanged={this.onPageChanged}/>
            </div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
        </>
    }
}


/*let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}*/

let MapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

export default compose(
    withAuthRedirect,
    connect(MapStateToProps, {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching,
        toggleFollowingProgress, getUsers
    })
)(UsersAPIComponent)
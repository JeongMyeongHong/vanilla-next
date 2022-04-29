import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {loginRequest} from '@/modules/auth/login';
import {Login} from '@/components';
const LoginPage = ({}) => {
    const [user, setUser] = useState({userid: '', password: ''})
    const dispatch = useDispatch()
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        alert(`로그인 정보 ${JSON.stringify(user)}`)
        dispatch(loginRequest(user))
        setUser({ userid:'', password:'' })
    }
    return (<Login onChange={onChange} onSubmit={onSubmit}/>);
};
const mapStateToProps = state => ({loginUser: state.loginUser})
const loginActions = {loginRequest}
export default connect(mapStateToProps, loginActions)(LoginPage);
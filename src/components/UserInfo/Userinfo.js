import {useSelector} from "react-redux";

import css from './UserInfo.module.css';

const Userinfo = () => {

    const {user} = useSelector(state => state.authReducer);

    return(
        <div className={css.user_info}>
            <div className={css.username}>{user.username}</div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXzzKQP6Go_tw9AK4uGceqcCpeKl5F-bb31Ggny8&s' alt={'username'}/>
        </div>
    )

}

export {Userinfo};
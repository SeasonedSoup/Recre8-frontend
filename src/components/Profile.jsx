import defaultUser from '../assets/user-default.png'
import { useAuth } from './auth/AuthContext';
export function Profile() {
    const {user} = useAuth();
    //receive form data for the images and other texts ig refer to the textile frontend repo
    const updateProfile = () => {

    }

    const formattedDateObj = new Date(user.joinedAt)
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        dateStyle: "long"
    }).format(formattedDateObj)

    return (
        <div className="profileCard">
            <img src={user.avatar || defaultUser} alt="your profile" />
            <h1>Name: {user.username}</h1>
            <h2>About me: {user.aboutMe || "Let people know what your about!" }</h2>
            <h3>Joined at: {formattedDate}</h3>
        </div>
    )
}
import defaultUser from '../assets/user-default.png'

export function Profile() {

    //receive form data for the images and other texts ig refer to the textile frontend repo
    const updateProfile = () => {

    }

    return (
        <div className="profileCard">
            <img src={defaultUser} alt="your profile" />
            <h1>Name: </h1>
            <h2>About me:</h2>
            <h3>Joined at</h3>
        </div>
    )
}
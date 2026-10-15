import defaultUser from '../assets/user-default.png'
import { useAuth } from './auth/AuthContext';
import { useState } from 'react';

export function Profile() {
  const { user } = useAuth();
  const [profileImg, setProfileImg] = useState(null);
  const [aboutMe, setAboutMe] = useState("");
  //receive form data for the images and other texts ig refer to the textile frontend repo
  const updateProfile = () => {
    const profileForm = new FormData();


  }

  const formattedDateObj = new Date(user.joinedAt)
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: "long"
  }).format(formattedDateObj)

  return (
    <div>
      <div className="profileCard">
        <img src={user.avatar || defaultUser} alt="your profile" />
        <h1>Name: {user.username}</h1>
        <h2>About me: {user.aboutMe || "Let people know what your about!"}</h2>
        <h3>Joined at: {formattedDate}</h3>
      </div>
      <form>

      </form>
    </div>
  )
}


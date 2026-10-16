import defaultUser from '../assets/user-default.png'
import { useAuth } from './auth/AuthContext';
import { useState } from 'react';

export function Profile() {
  const { user } = useAuth();
  const [profileImg, setProfileImg] = useState(null);
  const [profileUrl, setProfileUrl] = useState(user.avatar || null);
  const [aboutMe, setAboutMe] = useState("");
  //receive form data for the images and other texts ig refer to the textile frontend repo
  const updateProfile = () => {
    const profileFormData = new FormData();

    profileFormData.append("aboutMe", aboutMe);

    if (profileImg) {
      profileFormData.append("profilePic", profileImg);
    }

  }

  const handleImageFile = (e) => {

    const files = e.target.files;

    if (!files || files.length > 1) {
      alert("Only one file allowed");
      e.target.value = "";
      return;
    }

    const file = files[0];
    setProfileImg(file);
    const fileUrl = URL.createObjectURL(file);
    setProfileUrl(fileUrl);
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
        <img src={profileImg || user.avatar} />
        <input type="file" name="profileImg" accept='img/*' onChange={handleImageFile} />

        <label for="aboutMe">About me: </label>
        <input type="text" name="aboutMe" value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} />
      </form>
    </div>
  )
}


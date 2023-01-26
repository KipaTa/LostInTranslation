/**
 * Header for the profile page.
 */
const ProfileHeader = ({username}) => {
    return (
        <div className="startUpDiv">
        
          <img src={'/Logo-Hello.png'} alt="LogoHello" className="logo" />
          <h2> Welcome back <br></br> {username}!</h2>
          
        </div>
    )
}

export default ProfileHeader
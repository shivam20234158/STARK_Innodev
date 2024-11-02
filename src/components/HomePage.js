import React from 'react'
import signInImage from '../images/login_image.png'; 
import feedbackImage from '../images/feedback.jpeg'; 
import statusImage from '../images/status_image.png'; 


const HomePage = () => {
  return (
    <div>
      <h2>Welcome to H.E.L.M.</h2>
      <p>
  H.E.L.M. (Hostel Environment & Living Management) is an initiative dedicated to enhancing the hostel living experience by providing students with a secure, anonymous platform to voice their concerns, share suggestions, and contribute to meaningful improvements in their living environment. Inspired by the idea of creating a safe space similar to a command center, H.E.L.M. empowers students to act as advocates for positive change, ensuring their feedback is heard and acted upon.
  
  Our vision is to foster a transparent, responsive communication channel between students and hostel administrators. Through this platform, students can report issues, whether related to room conditions, mess facilities, security, or any other aspect of hostel life, without fear of exposure. Each submission is carefully categorized—be it "Mess," "Room," "Facilities," or more—so that hostel administrators can efficiently address and prioritize concerns.
  
  Much like Tony Stark’s J.A.R.V.I.S. system that streamlines complex tasks for the Avengers, H.E.L.M. is designed to create a smooth, intuitive experience, enabling students to focus on their academics and personal growth while trusting that their feedback will help drive necessary improvements. By actively involving both students and management, we envision a hostel environment where concerns are handled promptly, comfort and safety are prioritized, and each student feels valued and heard.
  
  With H.E.L.M., we aim to build a community-centered hostel life, promoting transparency, accountability, and continuous improvement to ensure a harmonious, enriching living experience for all.
</p>
    <h2>Choose the appropriate option:</h2>
    <div className="image-links">
        <div className="image-link">
          <a href="/login">
            <img src={signInImage} alt="Sign In" />
            <span>Sign In</span>
          </a>
        </div>
        <div className="image-link">
          <a href="/feedback">
            <img src={feedbackImage} alt="Feedback" />
            <span>Feedback</span>
          </a>
        </div>
        <div className="image-link">
          <a href="/status">
            <img src={statusImage} alt="Status" />
            <span>Status</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage

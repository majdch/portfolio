import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img src="https://media-exp1.licdn.com/dms/image/C4D35AQFxYTByjX5VMA/profile-framedphoto-shrink_400_400/0/1607269334108?e=1608577200&v=beta&t=KwZ8vKN12g4oAKJvx9ApmfigmbAltrsSPXFysZ-2ZLs" alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    MAJD  CHAGROUFI
                </div>
                <TypedText
                  dataText={
                      [
                          'Security',
                          'Frontend Development',
                          'Backend Development'
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    Casablanca Morocco
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1zb6d3ejcmzVwAG7HAsltBHVglhi4FFYt/view?usp=sharing" target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:majdchagroufi@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;

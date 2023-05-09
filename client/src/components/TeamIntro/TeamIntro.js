import './TeamIntro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const TeamIntro = () => {
  return (
    <div className="team-intro">
        <div className="intro-box">
            <h2>Team introduction</h2>
        </div>

      <div className="member-box">
        <h3>Irina Șeveliova</h3>
        <p><FontAwesomeIcon icon={faHeart} /> My favourite hobby is <strong>singing</strong></p>
        <p><FontAwesomeIcon icon={faHeart} /> I do it because it's relaxing and it makes me happy</p>
      </div>
      <div className="member-box">
        <h3>Team member</h3>
        <p>Description</p>
      </div>
      <div className="member-box">
        <h3>Team member</h3>
        <p>Description</p>
      </div>
      <div className="member-box">
        <h3>Team member</h3>
        <p>Description</p>
      </div>
      <div className="member-box">
        <h3>Team member</h3>
        <p>Description</p>
      </div>
      
    </div>
  );
};

export default TeamIntro;
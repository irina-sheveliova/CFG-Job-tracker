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
        <p>
          <FontAwesomeIcon icon={faHeart} /> My favourite hobby is{' '}
          <strong>singing</strong>
        </p>
        <p>
          <FontAwesomeIcon icon={faHeart} /> I do it because it's relaxing and
          it makes me happy
        </p>
      </div>
      <div className="member-box">
        <h3>Olivia Onu</h3>
        <p>
          <FontAwesomeIcon icon={faHeart} /> My favourite hobby is{' '}
          <strong>listening to music</strong>
        </p>
        <p>
          <FontAwesomeIcon icon={faHeart} /> I love listening to music in my
          downtime becasue its fun
        </p>
      </div>
      <div className="member-box">
        <h3>Katarzyna Kaczmarek</h3>
        <p>
          <FontAwesomeIcon icon={faHeart} /> My favourite hobby is{' '}
          <strong>rollerblading</strong>
        </p>
        <p>
          <FontAwesomeIcon icon={faHeart} /> I do it because it keeps me moving
          and makes me feel good
        </p>
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

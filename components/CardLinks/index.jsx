import PropTypes from 'prop-types';

import Trash from '../../public/icons8-trash.svg';
import * as S from './styles';

const CardLinks = ({ cardLinks = [], deleteLink }) => {
  return (
    <S.CardLinks>
      {cardLinks[0] && <S.HR />}
      {cardLinks.map((link) => (
        <div className="container" key={link.id}>
          <span>
            <a target="_blank" rel="noreferrer" href={link.link}>
              {link.name}
            </a>
            <img
              id={link.id}
              onClick={deleteLink}
              src={Trash}
              alt="delete link"
            />
          </span>
          <div className="added">
            <p>Added: {link.date}</p>
          </div>
        </div>
      ))}
    </S.CardLinks>
  );
}

CardLinks.propTypes = {
  cardLinks: PropTypes.array.isRequired,
  deleteLink: PropTypes.func.isRequired,
};

export default CardLinks;

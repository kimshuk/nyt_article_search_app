import {useState} from 'react'
import './Card.css';
import styled from 'styled-components';
import {AiOutlineHeart} from 'react-icons/ai'

const Image = styled.div`
  background-image: url(${props => props.backgroundImage});
  min-height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 9px 9px 0 0;

  @media only screen and (min-width: 601px) {
    min-height: 250px;
  }
`;

const Card = ({article, loading}) => {
  const content = article.abstract;
  const content_url = article.web_url;
  const img_url_prefix = process.env.REACT_APP_NYT_IMG_PREFIX;
  const img_placeholder = "https://via.placeholder.com/150x200?text=Tester";
  const img_url = article.multimedia.length > 0 ? img_url_prefix + article.multimedia[0].url : img_placeholder;
  const [isFavorite, setIsFavorite] = useState(false);

  if (loading) {
    return (
      <div className="CardContentWrapper">
        <p>Loading...</p>
      </div>
    ) 
  }

  const favClickHandler = () => {
    setIsFavorite(!isFavorite);

  }

  return (
      <div className="Card">
        <Image backgroundImage={img_url} />
        <a href={content_url} className="CardContentWrapper" target="_blank">
          <p className="CardContentText">{content.length > 30 ? content.substr(0, 29) + `...more` : content}</p>
        </a>
        <div>
          <AiOutlineHeart className={`CardContentFavIcon ${isFavorite ? 'icon_clicked' : ''}`} onClick={favClickHandler} /> <span>즐겨찾기</span>
        </div>
      </div>
  )
}

export default Card;
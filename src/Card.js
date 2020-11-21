import './Card.css';
import styled from 'styled-components';

const Image = styled.div`
  background-image: url(${props => props.backgroundImage});
  min-height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 9px 9px 0 0;
`;

const Card = ({article}) => {
  // console.log(article);
  const content = article.lead_paragraph;
  const content_url = article.web_url;
  const img_url_prefix = process.env.REACT_APP_NYT_IMG_PREFIX;
  const img_placeholder = "https://via.placeholder.com/150x200?text=Tester";
  const img_url = article.multimedia.length > 0 ? img_url_prefix + article.multimedia[0].url : img_placeholder;
  console.log(article.multimedia.length);
  console.log(img_url);

  return (
      <div className="Card">
        <Image backgroundImage={img_url} />
        <a href={content_url} className="CardContentWrapper">
          <p>{content.length > 30 ? content.substr(0, 29) + `...more` : content}</p>
        </a>
      </div>
  )
}

export default Card;
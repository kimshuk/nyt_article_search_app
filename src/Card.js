import './Card.css';

const Card = ({article}) => {
  const content = article.lead_paragraph;
  console.log(article);
  const content_url = article.web_url;
  return (
    <a href={content_url}>
      <div className="Card">
        <p>{content.length > 30 ? content.substr(0, 29) + `...more` : content}</p>
      </div>
    </a>
  )
}

export default Card;
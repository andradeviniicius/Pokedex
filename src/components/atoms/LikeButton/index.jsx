import "./likeButton.scss";

export default function LikeButton() {
  return (
    <button className="likeButton">
      <img
        className="likeButton__image"
        src="/assets/love.svg"
        alt="Like Button"
      />
    </button>
  );
}

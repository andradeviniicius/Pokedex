import { NavArrow} from "@atoms";

import "./detailArticleHeader.scss";

export default function detailArticleHeader() {
  return (
    <>
      <div className="detailArticle__header">
        <div className="detailArticle__headerTopWrapper">
          <NavArrow goingTo={'/'} />
        </div>
      </div>
    </>
  );
}

import {ArticleProps} from "./Article.types";
import styles from './Article.module.css';

const Article = ({children, textMargin}: ArticleProps): React.JSX.Element => {
    return <article className={`${styles.article} ${styles[`article-text-${textMargin}`]}`}>{children}</article>;
}

export default Article;
import { Col, Divider, Row, Layout } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IAuthor } from "../../../models/IAuthor";
import { IBook } from "../../../models/IBook";
import { getAllAuthors } from "../../../redux/slices/authorSlice";
import { fetchBooks } from "../../../redux/slices/bookSlice";
import { AppDispatch, RootState } from "../../../redux/store/store";
import BookImages from "../BookImages/BookImages";
import "./BookDetails.scss";
interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const { Content } = Layout;
const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="descriptionItem">
    <p className="descriptionItemParagraph">{title}:</p>
    {content}
  </div>
);

const BookDetails: React.FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBooks() as any);
    dispatch(getAllAuthors() as any);
  });

  const books: IBook[] = useSelector(
    (state: RootState) => state.books.booksData
  );
  const book = books.find((book) => book._id === id);

  const authors: IAuthor[] = useSelector(
    (state: RootState) => state.authors.authorsData
  );

  const author = authors.find((author) => author._id === book?.author);

  const getPublicationDate = () => {
    let publication = book?.publications as unknown as [
      {
        date: string | Date;
        _id?: string | undefined;
      }
    ];

    return new Date(publication[0].date.toString()).toDateString();
  };

  return (
    <>
      <Layout className="layout">
        <Content
          className="site-layout-background content"
          style={{
            padding: 24,
            margin: 0,
            maxHeight: "50vh",
          }}
        >
          <h1
            className="site-description-item-profile-p "
            style={{ marginBottom: 24, fontSize: 30, textAlign: "left" }}
          >
            {t("details.bigTitle")}
          </h1>
          <div style={{ textAlign: "left" }}>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title={t("details.title")}
                  content={book?.title || "No title provided"}
                />
              </Col>
              <Col span={12}>
                <DescriptionItem
                  title={t("details.publication")}
                  content={
                    getPublicationDate() === undefined
                      ? "No date provided"
                      : getPublicationDate()
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Author"
                  content={
                    author?.firstName + " " + author?.lastName ||
                    "No author provided"
                  }
                />
              </Col>
              <Col span={12}>
                <DescriptionItem
                  title={t("details.genre")}
                  content={book?.genre || "No genre provided"}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title={t("details.pages")}
                  content={book?.pages || "No pages provided"}
                />
              </Col>
            </Row>
          </div>
          <Divider />
          <BookImages book={book as IBook} />
        </Content>
      </Layout>
    </>
  );
};
export default BookDetails;

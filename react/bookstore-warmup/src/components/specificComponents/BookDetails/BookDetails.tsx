import { Col, Divider, Row, Layout } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IAuthor } from "../../../models/IAuthor";
import { IBook } from "../../../models/IBook";
import { RootState } from "../../../redux/store/store";
import BookImages from "../BookImages/BookImages";
import type { UploadFile } from "antd/es/upload/interface";
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

  const books: IBook[] = useSelector(
    (state: RootState) => state.books.booksData
  );
  const book = books.find((book) => book._id === id);

  const authors: IAuthor[] = useSelector(
    (state: RootState) => state.authors.authorsData
  );

  console.log(book, id);
  const author = authors.find((author) => author._id === book?.author);

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
                  content={book?.title}
                />
              </Col>
              <Col span={12}>
                <DescriptionItem
                  title={t("details.publication")}
                  content={"adsdasdsa"}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Author"
                  content={author?.firstName + " " + author?.lastName}
                />
              </Col>
              <Col span={12}>
                <DescriptionItem
                  title={t("details.genre")}
                  content={book?.genre}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title={t("details.pages")}
                  content={book?.pages}
                />
              </Col>
            </Row>
          </div>
          <Divider />
          <BookImages
            images={
              book?.images as unknown as
                | UploadFile<any>[]
                | (() => UploadFile<any>[])
            }
          />
        </Content>
      </Layout>
    </>
  );
};
export default BookDetails;

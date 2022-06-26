import { Space, Table, Button, Input, Tag, Popconfirm } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import BookModal from "../BookModal/BookModal";
import { Link } from "react-router-dom";
import { IBook } from "../../../models/IBook";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import {
  fetchBooks,
  addSearchQuery,
  deleteBook,
  setEditableBook,
  deleteEditableBook,
} from "../../../redux/slices/bookSlice";
import { Breadcrumb, Layout } from "antd";
import "./BooksTable.scss";
import { getAllAuthors } from "../../../redux/slices/authorSlice";
const { Content, Footer } = Layout;
const { Search } = Input;
interface IDeleteBook extends IBook {
  _id: string;
}

const BooksTable: React.FC = () => {
  const [showModal, setshowModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks() as any);
    dispatch(getAllAuthors() as any);
  }, [dispatch]);

  const onEdit = (book: IBook) => {
    setshowModal(true);
    dispatch(setEditableBook(book));
  };
  const onHandleClick = () => {
    setshowModal(true);
    dispatch(deleteEditableBook());
  };
  const onConfirm = (record: IDeleteBook) => {
    dispatch(deleteBook(record) as any);
  };

  const onSearch = (searchQuery: string) =>
    dispatch(addSearchQuery(searchQuery));

  let books: IDeleteBook[] = useSelector(
    (state: RootState) => state.books.booksData
  );
  const searchQuery = useSelector(
    (state: RootState) => state.books.searchQuery
  );
  if (searchQuery) {
    books = books.filter(
      (book) =>
        book.title.toLowerCase() === searchQuery.toLowerCase() ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const columns: ColumnsType<IDeleteBook> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
      render: (text: string) => <Link to="title">{text}</Link>,
    },
    {
      title: "Publication",
      dataIndex: "publications",
      key: "publications",
      render: (publications: [{ date: string }]) => (
        <div>{new Date(publications[0].date).toLocaleDateString()}</div>
      ),
    },
    {
      title: "Pages",
      dataIndex: "pages",
      key: "pages",
      render: (pages: string) => <div>{pages}</div>,
    },
    {
      title: "Genre",
      key: "genre",
      dataIndex: "genre",
      render: (_, { genre }) => (
        <>
          {genre.split("_").map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`:${record.title}`}>
            <MoreOutlined />
          </Link>
          <Link to="">
            <div onClick={() => onEdit(record)}>
              <EditOutlined />
            </div>
          </Link>
          <Link to={""}>
            <Popconfirm
              title="Are you sure to delete this book?"
              onConfirm={() => onConfirm(record)}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined />
            </Popconfirm>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ padding: "0 24px 24px", height: "95vh" }}>
      <Breadcrumb style={{ margin: "16px 0" }} />
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="books-table-container">
          <div className="button-and-search-container">
            <Search
              className="books-search-bar"
              placeholder="Search by name"
              enterButton="Search"
              size="large"
              onSearch={onSearch}
              // loading
            />
            <Button
              className="add-book-button"
              type="primary"
              onClick={onHandleClick}
            >
              Add Book
            </Button>
          </div>
          <Table
            className="table-books-style"
            columns={columns}
            dataSource={books}
          />
          <BookModal setshowModal={setshowModal} showModal={showModal} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created in 2022 by Enri Rane
      </Footer>
    </Layout>
  );
};

export default BooksTable;

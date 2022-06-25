import { Space, Table, Button, Input, Tag } from "antd";
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
} from "../../../redux/slices/bookSlice";
import "./BooksTable.scss";
const { Search } = Input;
interface IDeleteBook extends IBook {
  _id: string;
}

const BooksTable: React.FC = () => {
  const [showModal, setshowModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks() as any);
  }, [dispatch]);

  const onEdit = (book: IBook) => {
    setshowModal(true);
    dispatch(setEditableBook(book));
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
    books = books.filter((book) => book.title === searchQuery);
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
      render: (publication: [{ date: string }]) => (
        <div>{new Date(publication[0].date).toLocaleDateString()}</div>
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
            <div onClick={() => dispatch(deleteBook(record) as any)}>
              <DeleteOutlined />
            </div>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="books-table-container">
      <div className="button-and-search-container">
        <Search
          className="books-search-bar"
          placeholder="Search with name"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          // loading
        />
        <Button
          className="add-book-button"
          type="primary"
          onClick={() => setshowModal(true)}
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
  );
};

export default BooksTable;

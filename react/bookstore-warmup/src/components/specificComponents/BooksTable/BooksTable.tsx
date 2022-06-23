import { Space, Table, Button, Input } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IBook } from "../../../models/IBook";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect } from "react";
import { deleteBook, fetchBooks } from "../../../redux/slices/bookSlice";
import "./BooksTable.scss";
const { Search } = Input;

const BooksTable: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks() as any);
  }, [dispatch]);

  const books = useSelector((state: RootState) => state.books.booksData);

  const columns: ColumnsType<IBook> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
      render: (text: string) => <Link to="">{text}</Link>,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Publication",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => <div>{new Date(date).toLocaleString()}</div>,
    },
    {
      title: "Genre",
      key: "genre",
      dataIndex: "genre",
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
            <EditOutlined />
          </Link>
          <Link to={""}>
            <div onClick={() => dispatch(deleteBook(record.title))}>
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
          // loading
        />
        <Button className="add-book-button" type="primary">
          Add Book
        </Button>
      </div>
      <Table
        className="table-books-style"
        columns={columns}
        dataSource={books}
      />
    </div>
  );
};

export default BooksTable;

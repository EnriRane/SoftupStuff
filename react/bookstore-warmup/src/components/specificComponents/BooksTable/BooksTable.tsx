import { Space, Table, Tag, Button, Input } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import "./BooksTable.scss";
import { Link } from "react-router-dom";
import { IBook } from "../../../models/IBook";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
const { Search } = Input;

const BooksTable: React.FC = () => {
  const books = useSelector((state: RootState) => state.books.booksData);
  console.log(books);

  const columns: ColumnsType<IBook> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
      render: (text) => <Link to="">{text}</Link>,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Publication",
      dataIndex: "publication",
      key: "publication",
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
          <Link to={""}>
            <MoreOutlined />
          </Link>
          <Link to={""}>
            <EditOutlined />
          </Link>
          <Link to={""}>
            <DeleteOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  const data: IBook[] = [
    {
      title: "Te Mjeret",
      author: "Sa",
      publication: "dsadas",
      genre: "roman",
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

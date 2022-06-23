import { Space, Table, Tag, Input } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import "./BooksTable.scss";

const { Search } = Input;

const BooksTable: React.FC = () => {
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
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
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
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
          <a>
            <MoreOutlined />
          </a>
          <a>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Te Mjeret",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["roman", "drame"],
    },
  ];

  return (
    <div className="booksTableWrapper">
      <Search
        className="search"
        placeholder="Search book by name"
        enterButton="Search"
        size="large"
        loading
      />

      <Table className="table" columns={columns} dataSource={data} />
    </div>
  );
};

export default BooksTable;

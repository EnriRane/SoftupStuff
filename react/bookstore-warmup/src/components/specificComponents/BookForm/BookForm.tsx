import "./BookForm.scss";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form, Input, Select, DatePicker, InputNumber } from "formik-antd";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store/store";
import {
  createNewBook,
  deleteEditableBook,
  updateTheBook,
} from "../../../redux/slices/bookSlice";
import { RootState } from "../../../redux/store/store";
import { IAuthor } from "../../../models/IAuthor";
import { IBook } from "../../../models/IBook";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};

type BookFormType = {
  setShowModal: (showModal: boolean) => void;
};

const BookForm: React.FC<BookFormType> = ({ setShowModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  let editableBookData: IBook = useSelector(
    (state: RootState) => state.books.editableBook
  );

  let authors: IAuthor[] = useSelector(
    (state: RootState) => state.authors.authorsData
  );

  let genres = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Historical",
    "Romance",
    "Fantasy",
  ];

  const authorInitalName = () => {
    if (Object.keys(editableBookData).length < 1) return " ";
    const author = authors.find(
      (author) => author._id === editableBookData.author
    );
    if (!author) return " ";

    return author.firstName + " " + author.lastName;
  };

  const BookFormSchema = Yup.object().shape({
    title: Yup.string()
      .max(50, `${t("bookForm.error.titleMax")}`)
      .required(`${t("bookForm.error.titleReq")}`),
    author: Yup.string()
      .max(20, `${t("bookForm.error.authorMax")}`)
      .required(`${t("bookForm.error.authorReq")}`),
    publication: Yup.string().required(`${t("bookForm.error.publication")}`),
    genre: Yup.string().required(`${t("bookForm.error.genre")}`),
    pages: Yup.number()
      .required(`${t("bookForm.error.pages")}`)
      .min(5, `${t("bookForm.error.pagesMin")}`),
  });

  return (
    <div>
      <Formik
        initialValues={{
          title: "" || editableBookData.title,
          author: authorInitalName(),
          publication: "",
          genre: "" || editableBookData.genre,
          pages: editableBookData.pages,
        }}
        validationSchema={BookFormSchema}
        onSubmit={(values) => {
          const dateArray = new Date(values.publication)
            .toLocaleDateString()
            .split("/");
          let newDate = "";
          for (let i = 2; i >= 0; i--) {
            newDate = newDate + "-" + dateArray[i];
          }
          const bookAuthor = authors.find(
            (author) => author.firstName + author.lastName === values.author
          );
          let authorId = bookAuthor?._id;

          newDate = newDate.slice(1);
          let newBook: IBook = {
            title: values.title,
            author: authorId as string,
            genre: values.genre,
            pages: values.pages,
            publications: [newDate],
          };

          try {
            if (Object.keys(editableBookData).length < 1) {
              dispatch(createNewBook(newBook));
            } else {
              newBook._id = editableBookData._id;
              dispatch(updateTheBook(newBook));
            }

            setShowModal(false);
          } catch (error) {}
        }}
      >
        {({ errors, values }) => (
          <Form {...layout} name="add_book">
            <Form.Item
              name="title"
              label="Title"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <Input
                name="title"
                placeholder={t("bookForm.titlePlaceHolder")}
              />
            </Form.Item>
            <Form.Item
              name="author"
              label="Author"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <Select
                name="author"
                placeholder={t("bookForm.authorPlaceHolder")}
              >
                {authors.map((author) => (
                  <Select.Option
                    key={author._id}
                    value={author.firstName + author.lastName}
                  >
                    {author.firstName + " " + author.lastName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="genre"
              label="Genre"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <Select name="genre" placeholder={t("bookForm.genrePlaceHolder")}>
                {genres.map((genre) => (
                  <Select.Option key={genre} value={genre}>
                    {genre}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="publication"
              label="Publication"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <DatePicker name="publication" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="pages"
              label="Pages"
              className="fields-field-style"
              rules={[{ required: true }]}
            >
              <InputNumber
                name="pages"
                min={1}
                style={{ width: "100% " }}
                placeholder={t("bookForm.page")}
              />
            </Form.Item>

            <div className="buttons">
              <Form.Item name="cancel">
                <Button
                  onClick={() => {
                    dispatch(deleteEditableBook());
                    setShowModal(false);
                  }}
                  htmlType="button"
                >
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item name="sumbitButton">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default BookForm;

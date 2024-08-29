import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ContactForm = ({ initialValues, handleSubmit, registerSchema }) => {
  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.lable}>
            <span className={s.text}>Name</span>
            <Field
              className={s.input}
              name="name"
              placeholder="Contact name"
            ></Field>
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label>
            <span className={s.text}> Number</span>
            <Field
              className={s.input}
              name="number"
              placeholder="Contact number"
            ></Field>
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

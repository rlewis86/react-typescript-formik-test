import React from 'react';
import './App.css';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  birthDate: Yup.string().required("Required!"),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

function App() {
  const handleSubmit = (values: User) => {
    alert(JSON.stringify(values))
  }

  return (
    <div className="container mt-2">

      <h3>Basic Form using Bootstrap, Formik, Yup, & React</h3>
      <div className="col-md-6">
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', birthDate: '', password: '' }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={SignupSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" className="form-control" />
                {errors.firstName && touched.firstName ? (
                  <div className="text-danger">{errors.firstName}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" className="form-control" />
                {errors.lastName && touched.lastName ? (
                  <div className="text-danger">{errors.lastName}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className="form-control" />
                {errors.email && touched.email ? (
                  <div className="text-danger">{errors.email}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="birthDate">Birth Date</label>
                <Field name="birthDate" type="date" className="form-control" />
                {errors.birthDate && touched.birthDate ? (
                  <div className="text-danger">{errors.birthDate}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="form-control" />
                {errors.password && touched.password ? (
                  <div className="text-danger">{errors.password}</div>
                ) : null}
              </div>
              <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  );
}

export default App;

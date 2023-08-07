'use client';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './signUp.module.css';
import { useFormik } from 'formik';
import InputForm from '../components/InputForm';
import * as Yup from 'yup';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastName: '',
      phone: '',
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
      company: '',
      address1: '',
      address2: '',
      city: '',
      postcode: '',
      country: ''
    },
    validationSchema: Yup.object({
      // firstName: Yup.string().required('You must fill in this section'),
      // lastName: Yup.string().required('You must fill in this section'),
      // phone: Yup.string().required('You must fill in this section'),
      // email: Yup.string()
      //   .email('Invalid Email')
      //   .required('You must fill in this section'),
      // password: Yup.string()
      //   .min(8, 'Password must be at least 8 characters')
      //   .required('You must fill in this section'),
      // confirmPassword: Yup.string().oneOf(
      //   [Yup.ref('password'), null],
      //   'Passwords must match'
      // )
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  console.log(formik);
  return (
    <Container>
      <div className={`${styles.contentSignUp}  ${styles.signUp}`}>
        <h4 className={styles.signUpTitle}>Sign Up!</h4>
        <p className={styles.signUpDesc}>Create a new account with us!</p>

        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col lg={6}>
              <InputForm
                controlId="inputFirstName"
                type="text"
                label="First Name"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                errors={
                  formik.errors.firstname &&
                  formik.touched.firstname &&
                  formik.errors.firstname
                }
              />
            </Col>
            <Col lg={6}>
              <InputForm
                controlId="inputLastName"
                type="text"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                errors={
                  formik.errors.lastName &&
                  formik.touched.lastName &&
                  formik.errors.lastName
                }
              />
            </Col>
            <Col lg={6}>
              <InputForm
                controlId="inputPhone"
                type="text"
                label="Phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                errors={
                  formik.errors.phone && formik.touched.phone && formik.errors.phone
                }
              />
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}>
              <InputForm
                controlId="inputEmail"
                type="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                errors={
                  formik.errors.email && formik.touched.email && formik.errors.email
                }
              />
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}>
              <InputForm
                controlId="inputUserName"
                type="text"
                label="User Name"
                value={formik.values.userName}
                onChange={formik.handleChange}
                errors={
                  formik.errors.userName &&
                  formik.touched.userName &&
                  formik.errors.userName
                }
              />
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}>
              <InputForm
                controlId="inputPassword"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                errors={
                  formik.errors.password &&
                  formik.touched.password &&
                  formik.errors.password
                }
              />
            </Col>
            <Col lg={6}>
              <InputForm
                controlId="inputConfirmPassword"
                type="password"
                label="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                errors={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </Col>
            <Col lg={6}>
              <Col lg={6}></Col>
              <InputForm
                controlId="inputCompany"
                type="text"
                label="Company"
                value={formik.values.company}
                onChange={formik.handleChange}
                errors={
                  formik.errors.company &&
                  formik.touched.company &&
                  formik.errors.company
                }
              />
            </Col>
          </Row>
          <InputForm
            controlId="inputAddressLine1"
            type="text"
            label="Address Line 1"
            value={formik.values.address1}
            onChange={formik.handleChange}
            errors={
              formik.errors.address1 &&
              formik.touched.address1 &&
              formik.errors.address1
            }
          />
          <InputForm
            controlId="inputAddressLine2"
            type="text"
            label="Address Line 2"
            value={formik.values.address2}
            onChange={formik.handleChange}
            errors={
              formik.errors.address2 &&
              formik.touched.address2 &&
              formik.errors.address2
            }
          />
          <InputForm
            controlId="inputCity"
            type="text"
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            errors={formik.errors.city && formik.touched.city && formik.errors.city}
          />
          <InputForm
            controlId="inputPostcode"
            type="password"
            label="Postcode / ZIP"
            value={formik.values.postcode}
            onChange={formik.handleChange}
            errors={
              formik.errors.postcode &&
              formik.touched.postcode &&
              formik.errors.postcode
            }
          />
          <InputForm
            controlId="inputCountry"
            type="text"
            label="Country"
            value={formik.values.country}
            onChange={formik.handleChange}
            errors={
              formik.errors.country &&
              formik.touched.country &&
              formik.errors.country
            }
          />
          <Form.Group className={styles.checkRemember}>
            <span>
              In compliance with current regulations on Personal Data Protection Act
              2012 (&ldquo;PDPA 2012&rdquo;), we inform you that the data that you
              incorporate will be treated by with the purpose to manage your
              registration as a user. Your data will not be transferred to third
              parties except for legal obligations.
            </span>
            <Form.Check
              name="terms"
              label="I have read and accepted the Terms of Use & Privacy Policy."
            />
          </Form.Group>
          <Button className={styles.buttonForm} type="submit">
            Sign in
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignUp;

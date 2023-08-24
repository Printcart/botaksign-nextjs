'use client';
import { useFormik } from 'formik';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import Flag from '../Flag';
import InputForm from '../InputForm';
import styles from './signUp.module.css';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
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
      firstName: Yup.string().required('You must fill in this section'),
      lastName: Yup.string().required('You must fill in this section'),
      phone: Yup.string()
        .matches(/^\d+$/, 'Phone must be a valid number')
        .required('You must fill in this section'),
      email: Yup.string()
        .email('Invalid Email')
        .required('You must fill in this section'),
      userName: Yup.string().required('You must fill in this section'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('You must fill in this section'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('You must fill in this section'),
      address1: Yup.string().required('You must fill in this section'),
      postcode: Yup.string()
        .min(6, 'Post Code must be at least 6 characters')
        .required('You must fill in this section'),
      country: Yup.string().required('You must fill in this section')
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
    }
  });
  return (
    <Container>
      <div className={`${styles.contentSignUp}  ${styles.signUp}`}>
        <h4 className={styles.signUpTitle}>Sign Up!</h4>
        <p className={styles.signUpDesc}>Create a new account with us!</p>

        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col lg={6}>
              <InputForm
                required
                controlId="inputFirstName"
                type="text"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                errors={
                  formik.errors.firstName &&
                  formik.touched.firstName &&
                  formik.errors.firstName
                }
              />
            </Col>
            <Col lg={6}>
              <InputForm
                required
                controlId="inputLastName"
                type="text"
                name="lastName"
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
              <Flag
                required
                field={{
                  name: 'Phone',
                  value: formik.values.phone
                }}
                form={formik}
              />
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}>
              <InputForm
                required
                controlId="inputEmail"
                type="email"
                name="email"
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
                required
                controlId="inputUserName"
                type="text"
                name="userName"
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
                required
                controlId="inputPassword"
                type="password"
                label="Password"
                name="password"
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
                required
                controlId="inputConfirmPassword"
                type="password"
                name="confirmPassword"
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
                name="company"
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
            required
            controlId="inputAddressLine1"
            type="text"
            label="Address Line 1"
            name="address1"
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
            name="address2"
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
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            errors={formik.errors.city && formik.touched.city && formik.errors.city}
          />
          <InputForm
            required
            controlId="inputPostcode"
            type="password"
            label="Postcode / ZIP"
            name="postcode"
            value={formik.values.postcode}
            onChange={formik.handleChange}
            errors={
              formik.errors.postcode &&
              formik.touched.postcode &&
              formik.errors.postcode
            }
          />
          <InputForm
            required
            controlId="inputCountry"
            type="text"
            label="Country"
            name="country"
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
              <span className={styles.required}>*</span>
            </span>
            <div className={styles.checkInput}>
              <Form.Check
                name="terms"
                label="I have read and accepted the Terms of Use & Privacy Policy."
              />
            </div>
          </Form.Group>
          <Button className={styles.buttonForm} type="submit">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignUp;

'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import styles from './signIn.module.css';
import InputForm from '../InputForm';
import Breadcrumb from '../Breadcrumb';

const LoginLeft = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email')
        .required('You must fill in this section'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('You must fill in this section')
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
    }
  });

  return (
    <div className={styles.formLogin}>
      <h4 className={styles.signinTitle}>Sign In</h4>
      <p className={styles.signinDesc}>Continue where you left off</p>

      <Form onSubmit={formik.handleSubmit}>
        <InputForm
          placeholder="Username or email"
          controlId="inputDataEmail"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          errors={formik.errors.email && formik.touched.email && formik.errors.email}
        />
        <InputForm
          placeholder="Password"
          controlId="inputDataPassword"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          errors={
            formik.errors.password &&
            formik.touched.password &&
            formik.errors.password
          }
        />
        <Form.Group className={styles.checkRemember}>
          <Form.Check name="terms" label="Remember me" />
        </Form.Group>
        <Button className={styles.buttonForm} type="submit">
          Sign in
        </Button>
        <div className={styles.lostPassword}>
          <Link href="#">Lost your password?</Link>
        </div>
      </Form>
    </div>
  );
};

const LoginMiddle = () => {
  return (
    <div className={styles.socialLog}>
      <span>or</span>
    </div>
  );
};

const LoginRight = () => {
  return (
    <div className={styles.signUpNow}>
      <span>
        Don’t have account yet? <Link href="/sign-up">Sign up</Link>
      </span>
    </div>
  );
};

const SignIn = () => {
  return (
    <div className="siteContent">
      <Breadcrumb titlePage="My Account" fontWeight="900" />
      <Container className={`${styles.formLoginWrap} ${styles.signIn}`}>
        <Row>
          <Col lg={5} className={styles.loginLeft}>
            <LoginLeft />
          </Col>
          <Col lg={2} className={styles.loginMiddle}>
            <LoginMiddle />
          </Col>
          <Col lg={5} className={styles.loginRight}>
            <LoginRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;

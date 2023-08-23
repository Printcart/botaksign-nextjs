'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import { Accordion, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import styles from './signIn.module.css';
import InputForm from '../InputForm';
import Breadcrumb from '../Breadcrumb';
import Image from 'next/image';

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
      console.log(values);
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
  const isLogin = false;
  return (
    <div className="siteContent">
      <Breadcrumb titlePage="My Account" fontWeight="900" />
      {isLogin ? (
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
      ) : (
        <Container>
          <Row>
            <div className="px-3">
              <main className="siteName">
                <article className="m-0">
                  <div className="entryContent">
                    <div className={styles.woocomerce}>
                      <div className="w-100">
                        <nav className="mb-5">
                          <ul className="d-flex justify-content-center px-0">
                            <li className={styles.liLink}>
                              <Link href={'/'} className={styles.navLink}>
                                <div className="text-center">
                                  <Image
                                    src="https://botaksign.com/wp-content/plugins/custom-botaksign//assets/images/account-icon.png"
                                    width={40}
                                    height={40}
                                    alt="Icon"
                                    style={{ marginBottom: '8px', height: '40px' }}
                                  />
                                </div>
                                <p className="fw-bold">Account</p>
                              </Link>
                            </li>
                            <li className={styles.liLink}>
                              <Link href={'/'} className={styles.navLink}>
                                <div className="text-center">
                                  <Image
                                    src="https://botaksign.com/wp-content/plugins/custom-botaksign//assets/images/orders-icon.png"
                                    width={40}
                                    height={40}
                                    alt="Icon"
                                    style={{ marginBottom: '8px', height: '40px' }}
                                  />
                                </div>
                                <p className="fw-bold">Orders</p>
                              </Link>
                            </li>
                            <li className={styles.liLink}>
                              <Link href={'/'} className={styles.navLink}>
                                <div className="text-center">
                                  <Image
                                    src="https://botaksign.com/wp-content/plugins/custom-botaksign//assets/images/quotations-icon.png"
                                    width={40}
                                    height={40}
                                    alt="Icon"
                                    style={{ marginBottom: '8px', height: '40px' }}
                                  />
                                </div>
                                <p className="fw-bold">Quotions</p>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        <div className={styles.wrapMyaccount}>
                          <div className={styles.dashboard}>
                            <div className={styles.dashboardHeader}>
                              <Row>
                                <Col
                                  xs={6}
                                  style={{
                                    paddingTop: '10px',
                                    paddingBottom: '20px'
                                  }}
                                >
                                  <div className={styles.headerTitle}>
                                    <span>Hello David!</span>
                                  </div>
                                  <div className={styles.headerDesc}>
                                    It’s good to see you again.
                                  </div>
                                </Col>
                                <Col
                                  xs={6}
                                  style={{ display: 'flex', alignItems: 'end' }}
                                >
                                  <div className={styles.thumbnailwrap}>
                                    <Image
                                      src="https://botaksign.com/wp-content/plugins/custom-botaksign/assets/images/gif2.gif"
                                      alt="Image"
                                      width={100}
                                      height={100}
                                      className={styles.imgLogo}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div className={styles.dashboardBody}>
                              <Accordion>
                                <Accordion.Item eventKey="0" >
                                  <Accordion.Header>
                                    Accordion Item #1
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                  <Accordion.Header>
                                    Accordion Item #2
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SignIn;

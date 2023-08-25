'use client';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import AccordionCustom from '../AccordionCustom';
import Breadcrumb from '../Breadcrumb';
import InputForm from '../InputForm';
import InputFormFloat from '../InputFormFloat';
import styles from './signIn.module.css';

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

const NavigationMenu = (props) => {
  const { url, src, title } = props;
  return (
    <Link href={url} className={styles.navLink}>
      <div className="text-center">
        <Image
          src={src}
          width={40}
          height={40}
          alt={title}
          style={{ marginBottom: '8px', height: '40px' }}
        />
      </div>
      <p className="fw-bold">{title}</p>
    </Link>
  );
};

const DashboardHeader = () => {
  return (
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
          <div className={styles.headerDesc}>It’s good to see you again.</div>
        </Col>
        <Col xs={6} style={{ display: 'flex', alignItems: 'end' }}>
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
  );
};
const DashboardBody = ({ data }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      displayName: '',
      companyName: '',
      country: '',
      streetAddress: '',
      apartment: '',
      townCity: '',
      postcode: '',
      phone: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is a required field.'),
      lastName: Yup.string().required('Last name is a required field.'),
      displayName: Yup.string().required('Display name is a required field.'),
      country: Yup.string().required('Country is a required field.'),
      streetAddress: Yup.string().required('Street address is a required field.'),
      postcode: Yup.string().required('Postcode / ZIP is a required field.'),
      phone: Yup.string().required('Phone Number is a required field.'),
      email: Yup.string().required('Email is a required field.')
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });
  return (
    <div className={styles.dashboardBody}>
      <Accordion>
        <AccordionCustom eventKey="0" header="Billing address">
          <Form onSubmit={formik.handleSubmit}>
            <div className="addressFields">
              <div className="fieldsWrapper">
                <div className={styles.inputCss}>
                  <InputForm
                    required
                    customCss
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
                </div>
                <div className={styles.inputCss}>
                  <InputForm
                    customCss
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
                </div>
                <div className={styles.inputWide}>
                  <InputForm
                    customCss
                    controlId="inputCompanyName"
                    type="text"
                    name="companyName"
                    label="Company name (optional)"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.companyName &&
                      formik.touched.companyName &&
                      formik.errors.companyName
                    }
                  />
                </div>
                <div className={styles.inputWide}>
                  <InputForm
                    customCss
                    required
                    controlId="inputCountry"
                    type="hidden"
                    name="country"
                    label="Country"
                    value={formik.values.country || data?.country}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.country &&
                      formik.touched.country &&
                      formik.errors.country
                    }
                  />
                  <strong>Viet Nam</strong>
                </div>
                <div className={styles.inputWide}>
                  <InputForm
                    customCss
                    required
                    controlId="inputStreetAddress"
                    type="text"
                    name="streetAddress"
                    label="Street address"
                    placeholder="House number and street name"
                    value={formik.values.streetAddress || data?.address1}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.streetAddress &&
                      formik.touched.streetAddress &&
                      formik.errors.streetAddress
                    }
                  />
                </div>
                <div className={styles.inputWide2}>
                  <InputForm
                    customCss
                    required
                    controlId="inputStreetAddress2"
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optinal)"
                    name="apartment"
                    value={formik.values.apartment}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.apartment &&
                      formik.touched.apartment &&
                      formik.errors.apartment
                    }
                  />
                </div>
                <div className={styles.inputWide2}>
                  <InputForm
                    customCss
                    controlId="inputTownCity"
                    type="text"
                    name="townCity"
                    label="Town / City(optional)"
                    value={formik.values.townCity}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.townCity &&
                      formik.touched.townCity &&
                      formik.errors.townCity
                    }
                  />
                </div>
                <div className={styles.inputWide2}>
                  <InputForm
                    customCss
                    required
                    controlId="inputPostcode"
                    type="text"
                    name="postcode"
                    label="Postcode / ZIP"
                    value={formik.values.postcode || data?.postcode}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.postcode &&
                      formik.touched.postcode &&
                      formik.errors.postcode
                    }
                  />
                </div>
                <div className={styles.inputWide2}>
                  <InputForm
                    customCss
                    required
                    controlId="inputPhone"
                    type="text"
                    name="phone"
                    label="Phone"
                    value={formik.values.phone || data?.phone}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.phone &&
                      formik.touched.phone &&
                      formik.errors.phone
                    }
                  />
                </div>
                <div className={styles.inputWide2}>
                  <InputForm
                    customCss
                    required
                    controlId="inputEmail"
                    type="text"
                    name="email"
                    label="Email address"
                    value={formik.values.email || data?.email}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.email &&
                      formik.touched.email &&
                      formik.errors.email
                    }
                  />
                </div>
              </div>
              <div className={styles.buttomSubmit}>
                <Button type="submit" className={styles.buttomUpdate}>
                  UPDATE
                </Button>
              </div>
            </div>
          </Form>
        </AccordionCustom>
        <AccordionCustom eventKey="1" header="Shipping address">
          <Form onSubmit={formik.handleSubmit}>
            <div className="addressFields">
              <div className="fieldsWrapper">
                <div className={styles.inputCss}>
                  <InputForm
                    required
                    customCss
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
                </div>
                <div className={styles.inputCss}>
                  <InputForm
                    customCss
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
                </div>
                <div className={styles.inputWide}>
                  <InputForm
                    customCss
                    controlId="inputCompanyName"
                    type="text"
                    name="companyName"
                    label="Company name (optional)"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.companyName &&
                      formik.touched.companyName &&
                      formik.errors.companyName
                    }
                  />
                </div>
                <div className={styles.inputWide}>
                  <InputForm
                    customCss
                    required
                    controlId="inputCountry"
                    type="hidden"
                    name="country"
                    label="Country"
                    readonly="readonly"
                    value={formik.values.country || data.country}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.country &&
                      formik.touched.country &&
                      formik.errors.country
                    }
                  />
                  <strong>Viet Nam</strong>
                </div>
                <div className={styles.inputWide}>
                  <InputForm
                    customCss
                    required
                    controlId="inputStreetAddress"
                    type="text"
                    name="streetAddress"
                    label="Street address"
                    placeholder="House number and street name"
                    value={formik.values.streetAddress}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.streetAddress &&
                      formik.touched.streetAddress &&
                      formik.errors.streetAddress
                    }
                  />
                </div>
                <div className={styles.inputWide2}>
                  <InputForm
                    customCss
                    required
                    controlId="inputStreetAddress"
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optinal)"
                    name="apartment"
                    value={formik.values.apartment}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.apartment &&
                      formik.touched.apartment &&
                      formik.errors.apartment
                    }
                  />
                </div>
                <div className={styles.inputWide2}>
                  <InputForm
                    customCss
                    controlId="inputTownCity"
                    type="text"
                    name="townCity"
                    label="Town / City(optional)"
                    value={formik.values.townCity}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.townCity &&
                      formik.touched.townCity &&
                      formik.errors.townCity
                    }
                  />
                </div>
                <div className={styles.inputWide2}>
                  <InputForm
                    customCss
                    required
                    controlId="inputPostcode"
                    type="text"
                    name="postcode"
                    label="Postcode / ZIP"
                    value={formik.values.postcode || data?.postcode}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.postcode &&
                      formik.touched.postcode &&
                      formik.errors.postcode
                    }
                  />
                </div>
              </div>
              <div className={styles.buttomSubmit}>
                <Button type="submit" className={styles.buttomUpdate}>
                  UPDATE
                </Button>
              </div>
            </div>
          </Form>
        </AccordionCustom>
        <AccordionCustom eventKey="2" header="Account details">
          <Form onSubmit={formik.handleSubmit}>
            <Row style={{ marginBottom: '1.5rem' }}>
              <Col xs={6}>
                <InputFormFloat
                  customCss
                  required
                  controlId="inputFirstName"
                  type="text"
                  name="firstName"
                  label="First name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  errors={
                    formik.errors.firstName &&
                    formik.touched.firstName &&
                    formik.errors.firstName
                  }
                />
              </Col>
              <Col xs={6}>
                <InputFormFloat
                  customCss
                  required
                  controlId="inputLastName"
                  type="text"
                  name="lastName"
                  label="Last name"
                  value={formik.values.lastName || data?.lastName}
                  onChange={formik.handleChange}
                  errors={
                    formik.errors.lastName &&
                    formik.touched.lastName &&
                    formik.errors.lastName
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <InputFormFloat
                  customCss
                  required
                  controlId="inputDisplayName"
                  type="text"
                  name="displayName"
                  label="Display name"
                  value={formik.values.displayName || data?.firstName}
                  onChange={formik.handleChange}
                  errors={
                    formik.errors.displayName &&
                    formik.touched.displayName &&
                    formik.errors.displayName
                  }
                />
              </Col>
              <Col xs={6}>
                <InputFormFloat
                  customCss
                  required
                  controlId="inputEmail"
                  type="text"
                  name="email"
                  label="Email address"
                  value={formik.values.email || data?.email}
                  onChange={formik.handleChange}
                  errors={
                    formik.errors.email &&
                    formik.touched.email &&
                    formik.errors.email
                  }
                />
              </Col>
            </Row>
            <div className={styles.buttomSubmit}>
              <Button type="submit" className={styles.buttomUpdate}>
                UPDATE
              </Button>
            </div>
          </Form>
        </AccordionCustom>
        <AccordionCustom eventKey="3" header="Change password">
          <Form onSubmit={formik.handleSubmit}>
            <fieldset>
              <Row style={{ marginBottom: '1.5rem' }}>
                <Col xs={6}>
                  <InputFormFloat
                    customCss
                    controlId="inputCurrentPassword"
                    type="text"
                    name="firstName"
                    label="Current Password"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.firstName &&
                      formik.touched.firstName &&
                      formik.errors.firstName
                    }
                  />
                </Col>
                <Col xs={6}></Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <InputFormFloat
                    customCss
                    controlId="inputNewPassword"
                    type="text"
                    name="displayName"
                    label="New password"
                    value={formik.values.displayName}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.displayName &&
                      formik.touched.displayName &&
                      formik.errors.displayName
                    }
                  />
                </Col>
                <Col xs={6}>
                  <InputFormFloat
                    customCss
                    controlId="inputConfirmPass"
                    type="text"
                    name="email"
                    label="Confirm new password"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    errors={
                      formik.errors.email &&
                      formik.touched.email &&
                      formik.errors.email
                    }
                  />
                </Col>
              </Row>
            </fieldset>
            <div className={styles.buttomSubmit}>
              <Button type="submit" className={styles.buttomUpdate}>
                UPDATE
              </Button>
            </div>
          </Form>
        </AccordionCustom>
      </Accordion>
    </div>
  );
};

const PageContent = ({ data }) => {
  return (
    <div className="px-3">
      <main className="siteMain">
        <article className="m-0">
          <div className="entryContent">
            <div className={styles.woocomerce}>
              <div className="w-100">
                <nav style={{ marginBottom: '70px' }}>
                  <ul className="d-flex justify-content-center px-0">
                    <li className={styles.liLink}>
                      <NavigationMenu
                        url="/my-account/"
                        src="https://botaksign.com/wp-content/plugins/custom-botaksign//assets/images/account-icon.png"
                        title="Account"
                      />
                    </li>
                    <li className={styles.liLink}>
                      <NavigationMenu
                        url="/my-account/orders/"
                        src="https://botaksign.com/wp-content/plugins/custom-botaksign//assets/images/orders-icon.png"
                        title="Orders"
                      />
                    </li>
                    <li className={styles.liLink}>
                      <NavigationMenu
                        url="/my-account/quotation/"
                        src="https://botaksign.com/wp-content/plugins/custom-botaksign//assets/images/quotations-icon.png"
                        title="Quotions"
                      />
                    </li>
                  </ul>
                </nav>
                <div className={styles.wrapMyaccount}>
                  <div className={styles.dashboard}>
                    <DashboardHeader />
                    <DashboardBody data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

const dataUser = {
  firstName: 'Quang',
  lastName: 'Thiet',
  phone: '0376196299',
  email: 'quangthietdev@gmail.com',
  userName: 'quangthietdev',
  passWord: 'quangthietdev',
  confirmPassword: 'quangthietdev',
  company: 'Botaksign',
  address1: 'No1 Washington DC',
  address2: 'suite 17',
  city: 'New York',
  postcode: '8386',
  country: 'USA'
};

const SignIn = () => {
  const data = dataUser;
  const isLogin = true;

  return (
    <div className="siteContent">
      <Breadcrumb titlePage="My Account" fontWeight="900" />
      {!isLogin ? (
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
            <PageContent data={data} />
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SignIn;

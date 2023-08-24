'use client';
import Link from 'next/link';
import React from 'react';
import styles from './contact.module.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputForm from '../components/InputForm';
import PageCoverHeader from '../components/PageCoverHeader';

const Information = () => {
  return (
    <div className={styles.information}>
      <Row>
        <Col lg={3} xs={6} className={styles.infoBox}>
          <div className={styles.infoBoxImage}>
            <Image
              width={120}
              height={120}
              alt="image"
              src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/thumbnails/homepage/icon/call__whatsapp_us.jpg"
            />
          </div>
          <div className={styles.infoBoxTitle}>
            <h3>Call / WhatsApp Us</h3>
          </div>
          <div className={styles.infoBoxPhone}>
            <Link href="tel:91907688">+(65) 9190 7688</Link>
            <br />
            <Link href="tel:62862298">+(65) 6286 2298 </Link>
            <br />
            <Link href="http://wa.me/message/PFRE2EMUCA4DP1" target="_blank">
              +(65) 9731 6551 (WhatsApp Only){' '}
            </Link>
          </div>
        </Col>
        <Col lg={3} xs={6} className={styles.infoBox}>
          <div className={styles.infoBoxImage}>
            <Image
              width={120}
              height={120}
              alt="image"
              src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/thumbnails/homepage/icon/drop_us_an_email.jpg"
            />
          </div>
          <div className={styles.infoBoxTitle}>
            <h3>DROP US AN EMAIL</h3>
          </div>
          <div className={styles.infoBoxPhone}>
            <Link href="mailto: info@botaksign.com.sg">info@botaksign.com.sg</Link>
            <br />
          </div>
        </Col>
        <Col lg={3} xs={6} className={styles.infoBox}>
          <div className={styles.infoBoxImage}>
            <Image
              width={120}
              height={120}
              alt="image"
              src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/thumbnails/homepage/icon/chat_with_us.jpg"
            />
          </div>
          <div className={styles.infoBoxTitle}>
            <h3>Chat with us</h3>
          </div>
          <div className={styles.infoBoxPhone}>
            <span>Monday-Friday: 9am-6pm</span>
            <br />
            <span>Saturday: 9am-1pm </span>
            <br />
            <span>Offline: Sundays & Public Holidays</span>
          </div>
        </Col>
        <Col lg={3} xs={6} className={styles.infoBox}>
          <div className={styles.infoBoxImage}>
            <Image
              width={120}
              height={120}
              alt="image"
              src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/thumbnails/homepage/icon/locate_us.jpg"
            />
          </div>
          <div className={styles.infoBoxTitle}>
            <h3>Locate Us</h3>
          </div>
          <div className={styles.infoBoxPhone}>
            <span>22 Yio Chu Kang Road #01-19</span>
            <br />
            <span>Highland Centre Singapore </span>
            <br />
            <span>Singapore 545535</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const MessageMap = () => {
  return (
    <Row className={styles.messageMapWrapper}>
      <Col lg={6} className={styles.messageMap}>
        <iframe
          className={styles.googleMap}
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.3509831917543!2d103.87723541960939!3d1.3554145880821693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17af99b6e069%3A0xcf921095bc0aa73a!2sBotak%20Sign%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1692260783558!5m2!1sen!2ssg"
          width="600"
          height="450"
          // style="border:0;"
          allowFullScreen="" // Corrected attribute name
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Col>
      <Col lg={6} className={styles.messageMap}>
        <FormContact />
      </Col>
    </Row>
  );
};

const FormContact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      contactNumber: '',
      email: '',
      inquiry: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('You must fill in this section'),
      contactNumber: Yup.string()
        .matches(/^\d+$/, 'Phone must be a valid number')
        .required('You must fill in this section'),
      email: Yup.string()
        .email('Invalid Email')
        .required('You must fill in this section'),
      inquiry: Yup.string().required('You must fill in this section')
    }),
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      resetForm();
    }
  });
  return (
    <>
      <div className={styles.formContact}>
        <h3 className={styles.title}>Drop us a message</h3>
        <Form onSubmit={formik.handleSubmit}>
          <InputForm
            applyLabelForm={true}
            placeholder="Full Name"
            controlId="inputName"
            type="text"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            errors={formik.errors.name && formik.touched.name && formik.errors.name}
          />
          <InputForm
            applyLabelForm={true}
            placeholder="Phone Number"
            controlId="inputContactNumber"
            type="text"
            label="Contact number"
            name="contactNumber"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            errors={
              formik.errors.contactNumber &&
              formik.touched.contactNumber &&
              formik.errors.contactNumber
            }
          />
          <InputForm
            applyLabelForm={true}
            placeholder="Your Email"
            controlId="inputEmail"
            type="email"
            label="Email"
            name="email"
            value={formik.values.city}
            onChange={formik.handleChange}
            errors={
              formik.errors.email && formik.touched.email && formik.errors.email
            }
          />
          <InputForm
            applyLabelForm={true}
            placeholder="Message"
            textarea={true}
            rows={3}
            controlId="inputInquiry"
            type="inquiry"
            label="Inquiry"
            name="inquiry"
            value={formik.values.inquiry}
            onChange={formik.handleChange}
            errors={
              formik.errors.inquiry &&
              formik.touched.inquiry &&
              formik.errors.inquiry
            }
          />

          <Button className={styles.buttonForm} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
const ContactUs = () => {
  return (
    <div>
      <PageCoverHeader title="CONTACT us" link="Home" titlePage="Contact Us" />
      <Container>
        <Row>
          <Information />
          <MessageMap />
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;

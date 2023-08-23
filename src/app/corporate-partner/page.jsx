'use client';
import React from 'react';
import PageCoverHeader from '../components/PageCoverHeader';
import { Button, Container, Form } from 'react-bootstrap';
import Link from 'next/link';
import styles from './CorporatePartner.module.css';
import Image from 'next/image';
import InputForm from '../components/InputForm';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Select = (props) => {
  const { field, form, required, onSelectChange } = props;
  const { name, value } = field;

  const error = form.touched[name] && form.errors[name];

  const handleChange = (event) => {
    const selectedValue = event.target.value;

    onSelectChange(selectedValue);
    form.setFieldValue(name, selectedValue);
    form.setFieldTouched(name, true);
  };

  return (
    <>
      <label htmlFor={field.name} className={styles.titleSelect}>
        {field.name} {required && <span className={styles.required}>*</span>}
      </label>
      <Form.Select value={value} onChange={handleChange}>
        <option value="">---</option>
        <option value="Advertising / Marketing / PR">
          Advertising / Marketing / PR
        </option>
        <option value="Architecture / Interior Design">
          Architecture / Interior Design
        </option>
        <option value="Arts / Design / Fashion">Arts / Design / Fashion</option>
        <option value="Banking/Accounting/Financial Services">
          Banking/Accounting/Financial Services
        </option>
        <option value="Construction & Engineering">
          Construction & Engineering
        </option>
        <option value="Customer Service">Customer Service</option>
        <option value="Education">Education</option>
        <option value="Entertainment/Media/Publishing">
          Entertainment/Media/Publishing
        </option>
        <option value="Other">Other</option>
      </Form.Select>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

const TermsConditions = () => {
  return (
    <div className={styles.termsConditions}>
      <h2 className={styles.termsConditions}>Terms & Conditions</h2>
      <ol>
        <li>
          All applications are subjected to the approval of Botak Sign Pte Ltd. We
          will monitor the account activity for the next 6 to 8 months to determine
          the approval of the application.
        </li>
        <li>
          By applying to become a corporate partner, you agree to grant us permission
          to have access to your data (which includes, but not limited to, personal
          information, contact information, payment information) in accordance with
          the Personal Data Protection Act 2012 to be able to execute your requests
          smoothly.
        </li>
        <li>
          Botak Sign Pte Ltd reserves the right to reject or void the status of a
          corporate partner if the criteria are not met. This will be assessed at our
          discretion on a case-by-case basis and will be done with the utmost care of
          our partners.
        </li>
      </ol>
    </div>
  );
};

const ApplyJoin = () => {
  const formik = useFormik({
    initialValues: {
      companyName: '',
      industryOfCompany: '',
      companyWebsite: '',
      name: '',
      email: '',
      number: '',
      volume: ''
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required('You must fill in this section'),
      industryOfCompany: Yup.string().required('You must select an industry'),
      companyWebsite: Yup.string().required('You must fill in this section'),
      name: Yup.string().required('You must fill in this section'),
      email: Yup.string()
        .email('Invalid Email')
        .required('You must fill in this section'),
      number: Yup.string()
        .matches(/^\d+$/, 'Contact number  must be a valid number')
        .required('You must fill in this section'),
      volume: Yup.string().required('You must fill in this section')
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  const handleSelectChange = (selectedValue) => {
    formik.setFieldValue('selectedOption', selectedValue);
    console.log(selectedValue);
  };
  return (
    <div className={styles.applyJoin}>
      <h2 className={styles.titleApplyJoin}>
        Apply to join now as a Corporate Partner below
      </h2>
      <div>
        <Form onSubmit={formik.handleSubmit}>
          <InputForm
            label="Company name"
            required
            dots
            controlId="inputCompanyName"
            type="text"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            errors={
              formik.errors.companyName &&
              formik.touched.companyName &&
              formik.errors.companyName
            }
          />
          <Select
            required
            field={{
              name: 'Industry of company',
              value: formik.values.industryOfCompany
            }}
            onSelectChange={handleSelectChange}
            form={formik}
          />
          <InputForm
            label="Company website"
            required
            dots
            controlId="inputCompanyWebsite"
            type="text"
            name="companyWebsite"
            value={formik.values.companyWebsite}
            onChange={formik.handleChange}
            errors={
              formik.errors.companyWebsite &&
              formik.touched.companyWebsite &&
              formik.errors.companyWebsite
            }
          />
          <InputForm
            label="Name of contact person"
            required
            dots
            controlId="inputName "
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            errors={formik.errors.name && formik.touched.name && formik.errors.name}
          />
          <InputForm
            label="Email"
            required
            dots
            controlId="inputEmail"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errors={
              formik.errors.email && formik.touched.email && formik.errors.email
            }
          />
          <InputForm
            label="Contact number"
            required
            dots
            controlId="inputNumber"
            type="text"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            errors={
              formik.errors.number && formik.touched.number && formik.errors.number
            }
          />
          <InputForm
            label="Estimated monthly volume ($)"
            required
            dots
            controlId="inputVolume"
            type="text"
            name="volume"
            value={formik.values.volume}
            onChange={formik.handleChange}
            errors={
              formik.errors.volume && formik.touched.volume && formik.errors.volume
            }
          />
          <Button className={styles.buttonForm} type="submit">
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

const Criteria = () => {
  return (
    <div className={styles.criteria}>
      <h2 className={styles.titleCriteria}>
        What are the criteria for being a Corporate Partner?
      </h2>
      <ol className={styles.lists}>
        <li>
          To be able to provide print-ready files to our graphic specialists:
          <ul>
            <li>PDF format</li>
            <li>CMYK color mode</li>
            <li>
              Text converted to outlines and images embedded into artwork file (if
              applicable)
            </li>
            <li>Artwork provided in actual size in adequate resolution</li>
            <li>
              Outlines/Cut lines files must be provided in PDF vector format for any
              cutting services
            </li>
          </ul>
        </li>
        <li>
          Clear order details sent to dedicated graphic specialist via email only
          <ul>
            <li>Size</li>
            <li>
              Materials and finishings (Kindly refer to our website for list of
              available materials and finishings)
            </li>
            <li>Quantity</li>
          </ul>
        </li>
        <li>Punctual payment and good credit terms</li>
      </ol>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <h2 className={styles.nbtitle}>
        What are the benefits that I can look forward to being a Corporate Parner?
      </h2>
      <ol>
        <li>Exclusive corporate rates for products</li>
        <li>
          Dedicated sales person (graphic specialist) to process orders and provide
          strategic marketing or printing advice
        </li>
        <li>Complimentary minor artwork amendment services</li>
        <li>
          Gain mutual news sharing, information, and access to the latest printing
          product discounts and market knowledge
        </li>
        <li>
          Priority printing without express/urgent surcharge (applicable on a
          case-by-case basis)
        </li>
        <li> Opportunities to collaborate on projects </li>
      </ol>
      <div className={styles.imageBenefits}>
        <Image
          width={700}
          height={500}
          alt="image"
          src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2021/05/placeholder-info_updated.jpg"
        />
      </div>
    </div>
  );
};

const SpecialProject = () => {
  return (
    <>
      <div>
        <div className={styles.image}>
          <Image
            width={700}
            height={700}
            alt="image"
            src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2020/09/corporate-partner-banner.jpg"
          />
        </div>
        <div className={styles.wrapperContent}>
          <h2 className={styles.nbTitle}>
            Special Project Price Available for Corporate Partners!
          </h2>
          <span>
            In this Covid-19 period, we understand it has been a hard time for our
            partners and so, we want to lend our support by giving out reduced
            pricing rate that may be lower than the market pricing in an attempt to
            help with the competitive pricing in the market.
          </span>
          <span>
            We hope that this will help our customers who have been loyal to us to
            secure their businesses.
          </span>
          <span>
            Contact your dedicated{' '}
            <Link href="https://botaksign.com/contact-us/" target="_blank">
              Sales / Graphic Specialist
            </Link>{' '}
            today!
          </span>
          <span>
            *Terms and conditions of the special pricing will be subjected to the
            criteria as mentioned below
          </span>
        </div>
      </div>
    </>
  );
};

const LinkCorporatePartner = () => {
  return (
    <nav className={styles.wrapper}>
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href="#">Guides</Link>
      <span>/</span>
      <b>Corporate Partner</b>
    </nav>
  );
};

const CorporatePartner = () => {
  return (
    <div>
      <PageCoverHeader
        title="Corporate Partner"
        link="Home"
        titlePage="Corporate Partner"
      />
      <Container>
        <LinkCorporatePartner />
        <SpecialProject />
        <Benefits />
        <Criteria />
        <ApplyJoin />
        <TermsConditions />
      </Container>
    </div>
  );
};

export default CorporatePartner;

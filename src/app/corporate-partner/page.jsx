'use client';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import * as Yup from 'yup';
import FormField from '../components/FormField';
import PageCoverHeader from '../components/PageCoverHeader';
import styles from './CorporatePartner.module.css';

const industryOptions = [
  { value: 'Advertising / Marketing / PR', label: 'Advertising / Marketing / PR' },
  {
    value: 'Architecture / Interior Design',
    label: 'Architecture / Interior Design'
  },
  { value: 'Arts / Design / Fashion', label: 'Arts / Design / Fashion' },
  {
    value: 'Banking/Accounting/Financial Services',
    label: 'Banking/Accounting/Financial Services'
  },
  { value: 'Construction & Engineering', label: 'Construction & Engineering' },
  { value: 'Customer Service', label: 'Customer Service' },
  { value: 'Education', label: 'Education' },
  {
    value: 'Entertainment/Media/Publishing',
    label: 'Entertainment/Media/Publishing'
  },
  {
    value: 'Other',
    label: 'Other'
  }
];

const Select = ({
  label,
  required,
  dots,
  value,
  name,
  onChange,
  options,
  errors,
  touched
}) => {
  const hasError = touched[name] && errors[name];
  return (
    <div className={styles.form}>
      <label className={styles.labelSelect}>
        {label} {required && <span className={styles.required}>*</span>}{' '}
        {dots && <span>:</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.selectOption} ${hasError ? styles.error : ''}`}
      >
        <option value="">---</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hasError && <div className={styles.errorText}>{errors[name]}</div>}
    </div>
  );
};

const TermsConditions = () => {
  return (
    <div className={styles.termsConditions}>
      <h2 className={styles.termsConditionsTitle}>Terms & Conditions</h2>
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

const SignupSchema = Yup.object().shape({
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
  volume: Yup.string()
    .matches(/^\d+$/, 'Contact number  must be a valid number')
    .required('You must fill in this section')
});

const ApplyJoin = () => {
  return (
    <div className={styles.applyJoin}>
      <h2 className={styles.titleApplyJoin}>
        Apply to join now as a Corporate Partner below
      </h2>
      <div>
        <Formik
          initialValues={{
            companyName: '',
            industryOfCompany: '',
            companyWebsite: '',
            name: '',
            email: '',
            number: '',
            volume: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
          }}
        >
          {({ handleChange, values, errors, touched }) => (
            <Form>
              <FormField
                name="companyName"
                label="Company name"
                type="text"
                required
                dots
              />
              <Select
                value={values.industryOfCompany}
                onChange={handleChange}
                options={industryOptions}
                name="industryOfCompany"
                label="Industry of company"
                required
                dots
                errors={errors}
                touched={touched}
              />
              <FormField
                name="companyWebsite"
                label="CompanyWebsite"
                type="text"
                required
                dots
              />
              <FormField name="name" label="Name" type="text" required dots />
              <FormField name="email" label="Email" type="email" required dots />
              <FormField name="number" label="Number" type="text" required dots />
              <FormField name="volume" label="Volume" type="text" required dots />
              <button className={styles.buttonForm} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
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

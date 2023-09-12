'use client';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import * as Yup from 'yup';
import PageCoverHeader from 'botak/components/PageCoverHeader';
import styles from './CorporatePartner.module.css';
import FormField from 'botak/components/Footer/FormField';
import { Fragment } from 'react';

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

const data = [
  {
    specialProject: [
      {
        description:
          'In this Covid-19 period, we understand it has been a hard time for our partners and so, we want to lend our support by giving out reduced pricing rate that may be lower than the market pricing in an attempt to help with the competitive pricing in the market.'
      },
      {
        description:
          'We hope that this will help our customers who have been loyal to us to secure their businesses.'
      },
      {
        description: 'Contact your dedicated  ',
        link: {
          name: 'Sales / Graphic Specialist',
          href: '/contact-us/'
        },
        behindDescription: 'today!'
      },
      {
        description:
          '*Terms and conditions of the special pricing will be subjected to the criteria as mentioned below'
      }
    ]
  },
  {
    benefits: [
      {
        list: 'Exclusive corporate rates for products'
      },
      {
        list: 'Dedicated sales person (graphic specialist) to process orders and provide strategic marketing or printing advice'
      },
      {
        list: 'Complimentary minor artwork amendment services'
      },
      {
        list: 'Gain mutual news sharing, information, and access to the latest printing product discounts and market knowledge'
      },
      {
        list: 'Priority printing without express/urgent surcharge (applicable on a case-by-case basis)'
      },
      {
        list: 'Opportunities to collaborate on projects'
      }
    ]
  },
  {
    criteria: [
      {
        name: 'To be able to provide print-ready files to our graphic specialists',
        lists: [
          { list: 'PDF format' },
          { list: 'CMYK color mode' },
          {
            list: 'Text converted to outlines and images embedded into artwork file (if applicable)'
          },
          { list: 'Artwork provided in actual size in adequate resolution' },
          {
            list: 'Outlines/Cut lines files must be provided in PDF vector format for any cutting services'
          }
        ]
      },
      {
        name: 'Clear order details sent to dedicated graphic specialist via email only',
        lists: [
          { list: 'Size' },
          { list: 'CMYK color mode' },
          {
            list: 'Materials and finishings (Kindly refer to our website for list of available materials and finishings)'
          },
          { list: 'Quantity' }
        ]
      },
      {
        name: 'Punctual payment and good credit terms'
      }
    ]
  },
  {
    conditions: [
      {
        list: 'All applications are subjected to the approval of Botak Sign Pte Ltd. We will monitor the account activity for the next 6 to 8 months to determine the approval of the application.'
      },
      {
        list: 'By applying to become a corporate partner, you agree to grant us permission to have access to your data (which includes, but not limited to, personal information, contact information, payment information) in accordance with the Personal Data Protection Act 2012 to be able to execute your requests smoothly.'
      },
      {
        list: 'Botak Sign Pte Ltd reserves the right to reject or void the status of a corporate partner if the criteria are not met. This will be assessed at our discretion on a case-by-case basis and will be done with the utmost care of our partners.'
      }
    ]
  }
];

const Title = (props) => {
  const { title, className } = props;
  return <h2 className={styles[className]}>{title}</h2>;
};

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
      <Title title="Terms & Conditions" className="termsConditionsTitle" />
      <ol>
        {data?.[3]?.conditions.map((item, indexConditions) => (
          <li key={`index${indexConditions}`}>{item.list}</li>
        ))}
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
      <Title
        title="Apply to join now as a Corporate Partner below"
        className="titleApplyJoin"
      />
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
                label="Company website "
                type="text"
                required
                dots
              />
              <FormField
                name="name"
                label="Name of contact person"
                type="text"
                required
                dots
              />
              <FormField name="email" label="Email" type="email" required dots />
              <FormField
                name="number"
                label="Contact number "
                type="text"
                required
                dots
              />
              <FormField
                name="volume"
                label="Estimated monthly volume ($)"
                type="text"
                required
                dots
              />
              <button className={styles.buttonForm} type="submit">
                Send
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
      <Title
        title="What are the criteria for being a Corporate Partner?"
        className="titleCriteria"
      />
      <ol className={styles.lists}>
        {data?.[2]?.criteria?.map((section, indexCriteria) => (
          <Fragment key={`indexcriteria${indexCriteria}`}>
            <li>
              {section.name}
              <ul>
                {section.lists?.map((listItem, listItemIndex) => (
                  <li key={`listItemIndex${listItemIndex}`}>{listItem.list}</li>
                ))}
              </ul>
            </li>
          </Fragment>
        ))}
      </ol>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <Title
        title=" What are the benefits that I can look forward to being a Corporate Parner?"
        className="nbtitle"
      />
      <ol>
        {data?.[1]?.benefits.map((item, indexBenefits) => (
          <li key={`indexBenefits${indexBenefits}`}>{item.list}</li>
        ))}
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
          <Title
            title="Special Project Price Available for Corporate Partners!"
            className="nbTitle"
          />
          {data?.[0]?.specialProject?.map((item, indexSpecialProject) => (
            <span key={`index${indexSpecialProject}`}>
              {item.description}
              {item.link ? (
                <>
                  <Link
                    target="_blank"
                    className={styles.link}
                    href={item.link.href}
                  >
                    {item.link.name}
                  </Link>{' '}
                </>
              ) : null}
              {item.behindDescription}
            </span>
          ))}
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

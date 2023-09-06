'use client';
import { Container } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import styles from './AboutUs.module.css';
import Link from 'next/link';
import Image from 'next/image';

const dataContentBottom = [
  {
    image:
      'https://botaksign.com/wp-content/uploads/2020/06/sustainability_thumbnail.png',
    title: 'Sustainability',
    descript:
      'Dedicated to sustainability and contributing to a greener future, Botak Sign feels the responsibility to use environmentally-friendly HP latex  inks that are not only non-toxic, but come from renewable sources and do not contain VOCs (volatile organic compounds). HP latex inks also deliver more applications and are odorless - ideal for indoor environments likeschools and hospitals. By choosing to incorporate HP latex inks into ourprinting, we hope to lead the change in sustainable printing'
  },
  {
    image: 'https://botaksign.com/wp-content/uploads/2020/06/speed_thumbnail.png',
    title: 'Speed',
    descript:
      'Great products aren&apos;t great unless they reach your hands on time. With our large number of inkjet and laser printers and a dedicated production team that runs 24hrs a day, you can be assured we take our speed incredibly seriously to ensure orders get to you on time. We not only specialize in last-minute printing with our RUSH express printing and delivery services, we also cater to smaller order quantities as all orders - whether big or small - are as important to us as they are to you'
  },
  {
    image: 'https://botaksign.com/wp-content/uploads/2020/06/privacy_thumbnail.png',
    title: 'Privacy $ Security',
    descript:
      'When it comes to ensuring the security and integrity of your files, we make sure that strict privacy practices are in place so that your files remain safe and confidential. For sensitive documents that require higher levels of privacy, do contact us so that we can arrange for a Non-Disclosure Agreement.'
  },
  {
    image: 'https://botaksign.com/wp-content/uploads/2020/06/accuracy_thumbnail.png',
    title: 'Sustainability',
    descript:
      'To keep up with producing your orders on a tight deadline, sometimes a single print job is run by several machines at the same time. However, all color results are identical on all prints as they go through our centrally-controllable color management system. This system allows us to produce consistent colors regardless of printer or material with an accuracy of between Delta E 1 - 4.'
  }
];

const dataContentCenter = [
  {
    image:
      'https://botakrevamp.s3-ap-southeast-1.amazonaws.com/Images/About+Us+Images/printer.jpg',
    descript:
      ' Botak Sign Pte Ltd was established in 1991. We started from providing services in vinyl sticker cutting, which remains as our forte to this day, and moved towards large format inkjet printing after that. With much  effort, Botak Sign Pte Ltd steadily progressed to what we are today: Singapore&apos;s leading company in large format printing and distribution. Several hundred of our customers’ orders are fulfilled everyday by more than 34 units of printers that run 24-hours, 6 days a week. We have over sixty staff members spread over 8,000 square feet at 3 locations in Singapore.'
  },
  {
    image:
      'https://botakrevamp.s3-ap-southeast-1.amazonaws.com/Images/About+Us+Images/botak.jpg',
    descript:
      'In order to stay at the forefront of industry, we at Botak Sign Pte Ltd are constantly improving our services and investing in the latest machinery and technology to give our valued customers the highest quality print output at an amazing quick turnaround time. We also provide free colour proofing for all projects; this additional service will help our customers to get the ideal expected colour they need. Our customers are mainly advertising agencies, designers, exhibition builders, events and sign makers.',
    descript1:
      'Besides printing, we also have a large selection of display purposes. Many of our products are designed and patented by us, and distributed widely in both local and overseas markets.'
  }
];

const Title = () => {
  return (
    <nav className={styles.title}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>About Us</strong>
    </nav>
  );
};

const ContentBottom = () => {
  return (
    <div className={styles.contentBottom}>
      {dataContentBottom?.length > 0 &&
        dataContentBottom?.map((item, index) => (
          <div className={styles.aboutList} key={`index${index}`}>
            <Image src={item?.image} alt="image" height={80} width={80} />
            <div>
              <h2>{item?.title}</h2>
              <p>{item?.descript}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

const ContentCenter = () => {
  return (
    <div className={styles.aboutBotak}>
      <h2>About Botak Sign</h2>
      <div className={styles.line}></div>
      {dataContentCenter?.length > 0 &&
        dataContentCenter?.map((item, index) => (
          <div className={styles.aboutBotakConten} key={`index${index}`}>
            <Image src={item?.image} alt="image" width={200} height={200} />
            <div className={styles.descript}>
              <p>{item?.descript}</p>
              <p>{item?.descript1}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div>
      <PageCoverHeader title="About Us" link="Home" titlePage="About Us" />
      <Container>
        <Title />
        <ContentCenter />
        <ContentBottom />
      </Container>
    </div>
  );
};

export default AboutUs;

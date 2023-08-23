'use client';
import { Container } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import styles from './AboutUs.module.css';
import Link from 'next/link';
import Image from 'next/image';

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
      <div className={styles.aboutList}>
        <Image
          src="https://botaksign.com/wp-content/uploads/2020/06/sustainability_thumbnail.png"
          alt="image"
          height={80}
          width={80}
        />
        <div>
          <h2>Sustainability</h2>
          <p>
            Dedicated to sustainability and contributing to a greener future, Botak
            Sign feels the responsibility to use environmentally-friendly HP latex
            inks that are not only non-toxic, but come from renewable sources and do
            not contain VOCs (volatile organic compounds). HP latex inks also deliver
            more applications and are odorless - ideal for indoor environments like
            schools and hospitals. By choosing to incorporate HP latex inks into our
            printing, we hope to lead the change in sustainable printing.
          </p>
        </div>
      </div>
      <div className={styles.aboutList}>
        <Image
          src="https://botaksign.com/wp-content/uploads/2020/06/speed_thumbnail.png"
          alt="image"
          height={80}
          width={80}
        />
        <div>
          <h2>Speed</h2>
          <p>
            Great products aren&apos;t great unless they reach your hands on time.
            With our large number of inkjet and laser printers and a dedicated
            production team that runs 24hrs a day, you can be assured we take our
            speed incredibly seriously to ensure orders get to you on time. We not
            only specialize in last-minute printing with our RUSH express printing
            and delivery services, we also cater to smaller order quantities as all
            orders - whether big or small - are as important to us as they are to
            you.
          </p>
        </div>
      </div>
      <div className={styles.aboutList}>
        <Image
          src="https://botaksign.com/wp-content/uploads/2020/06/privacy_thumbnail.png"
          alt="image"
          height={80}
          width={80}
        />
        <div>
          <h2>Privacy $ Security</h2>
          <p>
            When it comes to ensuring the security and integrity of your files, we
            make sure that strict privacy practices are in place so that your files
            remain safe and confidential. For sensitive documents that require higher
            levels of privacy, do contact us so that we can arrange for a
            Non-Disclosure Agreement.
          </p>
        </div>
      </div>
      <div className={styles.aboutList}>
        <Image
          src="https://botaksign.com/wp-content/uploads/2020/06/accuracy_thumbnail.png"
          alt="image"
          height={80}
          width={80}
        />
        <div>
          <h2>Color Accuracy</h2>
          <p>
            To keep up with producing your orders on a tight deadline, sometimes a
            single print job is run by several machines at the same time. However,
            all color results are identical on all prints as they go through our
            centrally-controllable color management system. This system allows us to
            produce consistent colors regardless of printer or material with an
            accuracy of between Delta E 1 - 4.
          </p>
        </div>
      </div>
    </div>
  );
};

const ContentCenter = () => {
  return (
    <div className={styles.aboutBotak}>
      <h2>About Botak Sign</h2>
      <div className={styles.line}></div>
      <div className={styles.aboutBotakConten1}>
        <Image
          src="https://botakrevamp.s3-ap-southeast-1.amazonaws.com/Images/About+Us+Images/printer.jpg"
          alt="image"
          width={200}
          height={200}
        />
        <p>
          Botak Sign Pte Ltd was established in 1991. We started from providing
          services in vinyl sticker cutting, which remains as our forte to this day,
          and moved towards large format inkjet printing after that. With much
          effort, Botak Sign Pte Ltd steadily progressed to what we are today:
          Singapore&apos;s leading company in large format printing and distribution.
          Several hundred of our customers’ orders are fulfilled everyday by more
          than 34 units of printers that run 24-hours, 6 days a week. We have over
          sixty staff members spread over 8,000 square feet at 3 locations in
          Singapore.
        </p>
      </div>
      <div className={styles.aboutBotakConten2}>
        <p>
          Botak Sign Pte Ltd was established in 1991. We started from providing
          services in vinyl sticker cutting, which remains as our forte to this day,
          and moved towards large format inkjet printing after that. With much
          effort, Botak Sign Pte Ltd steadily progressed to what we are today:
          Singapore&apos;s leading company in large format printing and distribution.
          Several hundred of our customers’ orders are fulfilled everyday by more
          than 34 units of printers that run 24-hours, 6 days a week. We have over
          sixty staff members spread over 8,000 square feet at 3 locations in
          Singapore.
        </p>
        <Image
          src="https://botakrevamp.s3-ap-southeast-1.amazonaws.com/Images/About+Us+Images/botak.jpg"
          alt="image"
          width={300}
          height={300}
        />
      </div>
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

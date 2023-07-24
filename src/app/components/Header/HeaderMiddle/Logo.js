import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ headerData }) => {
  return (
    <div className="logowrapper">
      <div className="mainlogo">
        <Link href="/">
          <Image
            src={headerData?.logo?.src}
            width={230}
            height={80}
            alt={headerData?.logo?.title}
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;

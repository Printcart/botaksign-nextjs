import Image from 'next/image';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Flag.module.css';

const Flag = () => {
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = 'https://restcountries.com/v3.1/all';
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setCountryState((prevState) => ({
          ...prevState,
          countries: data,
          loading: false
        }));
      } catch (error) {
        setCountryState((prevState) => ({
          ...prevState,
          errorMessage: 'An error occurred while fetching data.',
          loading: false
        }));
      }
    };

    fetchData();
  }, []);
  const { loading, countries } = countryState;

  const [selectedCountry, setSelectedCountry] = useState();
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });

  return (
    <div className="">
      <div>
        {loading === true ? (
          <div className="">
            <p className="">...loading</p>
          </div>
        ) : (
          <div className="">
            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className=""
              >
                <option>--Select Country--</option>
                {countries.map((item) => {
                  console.log(item);
                  return (
                    <option key={uuidv4()} value={item.idd.common}>
                      <div>{item.name.common}</div>
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              {searchSelectedCountry && (
                <div className={styles.imageSelect}>
                  <div className="">
                    <Image
                      height={25}
                      width={25}
                      src={searchSelectedCountry && searchSelectedCountry.flags.png}
                      alt="image"
                    />
                  </div>
                  <div>
                    <p className="">
                      {searchSelectedCountry && searchSelectedCountry.idd.root}
                      {searchSelectedCountry && searchSelectedCountry.idd.suffixes}
                    </p>
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flag;

'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import useAboutPageData from '@/app/constants/aboutPageData';

export default function AboutPage() {
  const t = useTranslations('AboutMePage');
  const aboutPageData = useAboutPageData();
  const [isVisibleCard, setIsVisibleCard] = useState(false);

  useEffect(() => {
    setIsVisibleCard(true);
  }, []);

  const renderList = (list) => (
    <>
      {list.map((el) => (
        <span key={el.label}>{el.label}</span>
      ))}
    </>
  );

  return (
    <div className="about flex flex-col md:flex-row flex-grow items-center">
      <div className="mx-auto max-w-[1200px] 2xl:max-w-[1400px] px-8 md:px-0">
        <h2
          className="text-[26px] md:text-5xl 3xl:text-5xl text-[#704B40] text-center tracking-widest mt-15 md:mt-0 md:mb-5 uppercase md:normal-case font-medium md:font-light"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          {t('section-title')}
        </h2>
        <div
          className={`${
            isVisibleCard ? 'about-me-card-animate' : 'about-me-card-hidden'
          } flex flex-wrap justify-between mb-15 md:mt-0 transition-opacity`}
        >
          {aboutPageData.map((data) => (
            <div
              className="mt-10 md:mt-15 custom-shadow-card rounded-md px-4 md:px-6 py-6 md:py-8 bg-[#ffffff]/60 md:w-[30%]"
              key={data.imgUrl}
            >
              <Image
                src={data.imgUrl}
                width={50}
                height={50}
                alt={data.imgAlt}
                className="block mx-auto md:w-[65px] md:h-[65px]"
              />
              <h3
                className="text-xl mt-6 mb-2 text-[#704B40] font-medium"
                style={{ fontFamily: 'var(--font-el-messiri)' }}
              >
                {data.title}
              </h3>
              <p className="list-description text-lg md:text-xl text-[#422F27]">
                {typeof data.description === 'string'
                  ? data.description
                  : renderList(data.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

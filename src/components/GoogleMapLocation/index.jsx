import { GOOGLE_MAP_LOCATION } from '@/constants/contacts';

export default function GoogleMapLocation() {
  return (
    <div className="mb-15 xl:mb-0 pt-5 md:pt-0 cursor-pointer w-full max-w-full 2xl:max-w-[650px]">
      <a
        href={GOOGLE_MAP_LOCATION}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2463.4458025884805!2d19.0622633!3d49.822735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c0e1136e2accf21%3A0xa93c4a3a424e3854!2sOlena%20Marchenko%20t%C5%82umacz%20przysi%C4%99g%C5%82y%20j%C4%99zyka%20ukrai%C5%84skiego!5e1!3m2!1sen!2spl!4v1749556191011!5m2!1sen!2spl"
          height="400"
          style={{ pointerEvents: 'none' }}
          allowFullScreen=""
          loading="lazy"
          className="border-none custom-shadow rounded-md w-full h-[300px] md:h-[400px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </a>
    </div>
  );
}

import useContactInfo from './hooks/useContactInfo';
import useSocialLinks from '../Header/hooks/useSocialLinks';

export default function Footer() {
  const { socialLinksFooter } = useSocialLinks();
  const contactInfo = useContactInfo();

  return (
    <footer className="2xl:w-full py-4 3xl:py-6 hidden xl:block custom-shadow bg-[#A98573] text-white px-20">
      <div className="text-lg 2xl:text-xl 3xl:text-2xl max-w-[1200px] 2xl:max-w-[1400px] mx-auto flex justify-center 2xl:justify-between">
        <ul className="flex justify-center gap-10">
          {contactInfo.map((value) => (
            <li key={value.title} className="flex gap-2 items-center">
              {value.href ? (
                <>
                  {value.label}
                  <a
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value.title}
                  </a>
                </>
              ) : (
                <>
                  {value.label} {value.title}
                </>
              )}
            </li>
          ))}
        </ul>
        <ul className="hidden 2xl:flex justify-center xl:gap-4 2xl:gap-8">
          {socialLinksFooter.map((socialLink) => (
            <li
              key={socialLink.href}
              className="hover-state flex gap-1 2xl:gap-2 items-center"
            >
              <a
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialLink.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

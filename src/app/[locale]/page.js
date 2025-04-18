import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="px-20">
      <p>{t("title")}</p>
    </div>
  );
}

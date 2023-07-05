import { useTranslation } from "react-i18next";
import heroVideo from "../assets/hero_animation.mp4";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="hero" lang={i18n.language}>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <div>
          <h1>{t("hero.title")}</h1>
          <div style={{ flex: 1 }}></div>
        </div>
        <p>{t("hero.text")}</p>
      </div>
    </div>
  );
};

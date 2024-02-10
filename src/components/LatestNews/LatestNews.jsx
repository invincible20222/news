import BannerList from "../BannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannerList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;

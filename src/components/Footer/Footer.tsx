import styles from './Footer.module.scss';
import facebookSvg from '../../assets/icons/facebook.svg';
import instagramSvg from '../../assets/icons/instagram.svg';
import twitterSvg from '../../assets/icons/twitter.svg';
import youtubeSvg from '../../assets/icons/youtube.svg';

const Footer: React.FC = () => {

    const socialMedia = [facebookSvg, instagramSvg, twitterSvg, youtubeSvg]

    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                {socialMedia.map((media, i) => <img key={i} src={media} alt="" />)}
            </div>
            <div className={styles.links}>
                <span>Conditions of Use</span>
                <span>Privacy & Policy</span>
                <span>Press Room</span>
            </div>
            <p className={styles.copyright}>© 2022 MovieApp</p>
        </footer>
    )
}

export default Footer
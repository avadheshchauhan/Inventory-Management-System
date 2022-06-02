import { Typography } from '@mui/material';
//import Image from 'material-ui-image'
//import Header from "../../header/Header"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from './inventory.png';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.containerLeft}>
        <Typography variant="h6">
          Free forever tool for SME Digitization
        </Typography>
        <Typography variant="h2" className={styles.vision}>
          Digitizing normal SMEs into extraordinary businesses
        </Typography>
        <Typography variant="h6" className={styles.into}>
          For Indian SME manufacturers, TranZact is a zero-effort digital
          transformation tool that digitizes your entire business process right
          from sales inquiry to dispatch.
        </Typography>
        <Button className={styles.registerBtn} variant="contained">
          <Link className={styles.links} to="register">
            SIGN UP
          </Link>
        </Button>
      </div>
      <div className={styles.containerRight}>
        <img src={logo} alt="inventory" style={{ marginTop: '50px' }} />
      </div>
    </div>
  );
};
export default Homepage;

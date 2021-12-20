import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Categories } from 'constants/filter.constants';
import HeaderActions from 'actions/header.actions';
import FilterActions from 'actions/filter.actions';
import Header from 'components/header';

import fantomLogo from 'assets/svgs/fantom_logo_white.svg';
import card1 from 'assets/svgs/card1.svg';
import card2 from 'assets/svgs/card2.svg';
import card3 from 'assets/svgs/card3.svg';
import card4 from 'assets/svgs/card4.svg';
import search from 'assets/svgs/magnifier.svg';

import styles from './styles.module.scss';

const cards = [
  {
    icon: card1,
    title: 'Easy Connect',
    description:
      'Using Metamask or CoinBase Wallet. Just click "Connect Wallet" on the top right to start.',
    path: '/',
  },
  {
    icon: card2,
    title: 'Super Fast',
    description:
      'Since NFTHab runs on the Fantom Opera Network, transactions are usually confirmed within 1-2 seconds.',
    path: '/',
  },
  {
    icon: card3,
    title: 'Low Transaction Fees',
    description:
      'Transactions are usually just a few cents, allowing users to create and trade many NFTs without prohibitively high network fees.',
    path: '/',
  },
  {
    icon: card4,
    title: 'Low Platform Fees',
    description:
      'Trade NFTs via auction or direct offers with NFTHab taking only 2.5% of each sale as a fee.',
    path: '/explore',
  },
];

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(HeaderActions.toggleSearchbar(false));
    dispatch(FilterActions.updateCategoryFilter(null));
  }, []);

  const handleViewCategory = id => {
    dispatch(FilterActions.updateCategoryFilter(id === 'all' ? null : id));
    history.push('/explore');
  };

  const renderAboutCard = (key, icon, title, desc, path) => (
    <div className={styles.aboutCard} key={key}>
      <NavLink to={path} className={styles.aboutCardLink}>
        <div className={styles.cardIconWrapper}>
          <img src={icon} />
        </div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDesc}>{desc}</div>
      </NavLink>
    </div>
  );

  const renderCategoryCard = (key, icon, label, extra = false) => (
    <div
      className={styles.categoryCard}
      key={key}
      onClick={() => handleViewCategory(key)}
    >
      <div className={styles.cardIconWrapper2}>
        <img src={icon} />
      </div>
      <div className={cx(styles.cardLabelWrapper, extra && styles.extraCard)}>
        <div className={styles.cardLabel}>{label}</div>
        <div className={styles.browseBtn}>
          <ChevronRightIcon className={styles.browseBtnIcon} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <div className={styles.main}>
          <div className={styles.mainLeft}>
            <div
              className={styles.title}
              style={{ color: '#FFF' }}
            >{`Trade EXCLUSIVE NFTs only available on NFTHab`}</div>
            <div className={styles.subtitle}>
              NFTHab is a marketplace built on Fantom Opera. Trade the freshest
              NFTs by featured artists instantly with low network fees.
            </div>
            <div className={styles.subtitle}>
              <strong>
                Warning: This is a beta version. Use at your own caution.
              </strong>
            </div>

            <Link to="/explore" className={styles.exploreButton}>
              Explore
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardMedia}>
              <img
                src={
                  'https://gateway.pinata.cloud/ipfs/QmaSR3M1YjLjaBrY3kn7dCVMeYbyNYjtuYivivxrAv2Pn8'
                }
              />
            </div>
            <div className={styles.cardInfo}>
              <Link
                to="/explore/0xfcea75477ddbd4de8266f46e06f7e0b318369102/3"
                className={styles.cardCategory}
              >
                Ethiopia
              </Link>
              <div className={styles.cardName}>{'SPOTLIGHT NFT'}</div>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutTitle}>Why NFTHab</div>
            <div className={styles.aboutCards}>
              {cards.map((card, key) =>
                renderAboutCard(
                  key,
                  card.icon,
                  card.title,
                  card.description,
                  card.path
                )
              )}
            </div>
            <div className={styles.aboutTitle}>Browse by category</div>
            <div className={styles.categories}>
              {Categories.map(cat =>
                renderCategoryCard(cat.id, cat.icon, cat.label)
              )}
              {renderCategoryCard('all', search, 'Explore All NFTs', true)}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <a
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.privacypolicies.com/live/d391c019-a441-4bcf-bd14-0ee67c94d8ca"
        >
          Privacy Policy
        </a>
        <a
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.privacypolicies.com/live/08a2cde6-e38f-4237-8b8a-518741ea8f2e"
        >
          Cookie Policy
        </a>
        <a
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          target="_blank"
          rel="noopener noreferrer"
          href="/tos"
        >
          Terms of Service
        </a>
      </div>
      <div className={styles.ftmfooter}>
        <a
          href="https://fantom.foundation/"
          target="_blank"
          rel="noopener noreferrer
            noreferrer"
        >
          <img src={fantomLogo} alt="fantom-logo" className={styles.logo} />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;

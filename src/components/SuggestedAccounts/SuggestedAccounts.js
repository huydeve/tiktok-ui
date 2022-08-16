import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

function SuggestedAccounts({ label, popper = false, message }) {
  const data = false;
  const render = () => {
    if (!message) {
      return (
        <>
          <AccountItem popper={popper} />
          <AccountItem popper={popper} />
          <AccountItem popper={popper} />
          <AccountItem popper={popper} />
          <AccountItem popper={popper} />
          <p className={cx('more-btn')}>See all</p>
        </>
      );
    }
    if (data) {
      return (
        <>
          <AccountItem popper={popper} />
          <AccountItem popper={popper} />
          <AccountItem popper={popper} />
          <p className={cx('more-btn')}>See all</p>
        </>
      );
    }
    return <p className={cx('message')}>{message}</p>;
  };

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {render()}
    </div>
  );
}

export default SuggestedAccounts;

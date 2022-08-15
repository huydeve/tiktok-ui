import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Image from '../Image';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
  popper: PropTypes.bool,
};

function AccountItem({ data, popper = true }) {
  const renderPreview = (attribute) => {
    return (
      <div tabIndex="-1" {...attribute}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  const user = () => {
    return (
      <div className={cx('account-item')}>
        <Image className={cx('avatar')} src="" alt="" />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>Conmeo</strong>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </p>
          <p className={cx('name')}>Conga</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {popper ? (
        <Tippy interactive offset={[-10, 0]} placement="bottom-start" delay={[800, 700]} render={renderPreview}>
          {user()}
        </Tippy>
      ) : (
        user()
      )}
    </div>
  );
}

export default AccountItem;

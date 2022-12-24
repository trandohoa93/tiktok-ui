import classNames from 'classnames/bind';
import styles from './DefaulLayout.module.scss';
import { Header } from '../components';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
function DefaulLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaulLayout;

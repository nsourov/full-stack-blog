import React from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import pageScroll from 'src/utils/pageScroll';

const Navigation = (props) => {
  const { children, rightNav, leftNav } = props;
  return (
    <PerfectScrollbar>
      <Scrollspy items={rightNav} currentClassName="active">
        {Array.isArray(children) &&
          children.map((item, i) => (
            <li key={i}>
              <Link
                to={(rightNav && `#${item}`) || (leftNav && `/docs/${item}`)}
                className="text-capitalize"
                onClick={rightNav && pageScroll}
              >
                {item}
              </Link>
            </li>
          ))}
      </Scrollspy>
    </PerfectScrollbar>
  );
};

export default Navigation;

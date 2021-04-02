import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Col, Row } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';

import { getAboutData } from '../../api';
import Skeleton from '../../components/Skeleton';

const About = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await getAboutData();
        if (response.data.body) {
          setData(response.data.body);
        }
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Row>
      <Col style={{ padding: '50px 20px' }}>
        <h1>About</h1>
        <br />
        <div className='post-body'>
          <ReactMarkdown allowDangerousHtml children={data} />
        </div>
        {loading && (
          <>
            <Skeleton width='100%' height={10} />
            <Skeleton width='100%' height={10} />
            <Skeleton width='100%' height={10} />
            <Skeleton width='100%' height={10} />
            <Skeleton width='100%' height={10} />
            <Skeleton width='100%' height={10} />
          </>
        )}
      </Col>
    </Row>
  );
};

export default About;

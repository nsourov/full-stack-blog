import React, { useState } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { wouldBuy as buy } from '../../../api';

const PostMeta = ({ category, wouldBuy }) => {
  const [clickedBuy, setClickedBuy] = useState(false);
  const { slug } = useParams();
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);
  const userId = useSelector((store) => store.user.data.id);

  const handleBuy = async () => {
    try {
      await buy(slug, localStorage.jwtToken);
      setClickedBuy(true)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='post-meta d-flex justify-content-between'>
      <Col sx="6" style={{ padding: 0 }}>
        <div className='category'>
          <Link to='#'>{category}</Link>
        </div>
      </Col>
      {isAuthenticated && !wouldBuy.map(w => w.user).includes(userId) && !clickedBuy && (
        <Col sx="6" style={{ padding: 0 }}>
          <div className='category buy'>
            <Link to='#' onClick={handleBuy} className="float-right">I would buy this</Link>
          </div>
        </Col>
      )}
    </div>
  );
};

export default PostMeta;

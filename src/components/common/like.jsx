import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Like = (props) => {
  const { liked, onClick } = props;
  return liked ? (
    <FaHeart
      onClick={onClick}
      style={{ cursor: 'pointer', color: '#DC3545' }}
    />
  ) : (
    <FaRegHeart
      onClick={onClick}
      style={{ cursor: 'pointer', color: '#DC3545' }}
    />
  );
};

export default Like;

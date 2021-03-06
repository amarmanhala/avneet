import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './tags.module.less';

const TagCard = (props) => {
  const {
    img, name, description, color,
  } = props;
  const tagPage = Config.pages.tag;
  return (
      <div className={style.tagCard}>
        <div
          className={style.tagImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h3 style={{ color: '#000' }}>
              {name}
            </h3>
          </div>
          <p>
            {description}
          </p>
        </div>
      </div>
  );
};

export default TagCard;

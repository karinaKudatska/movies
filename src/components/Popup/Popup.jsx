import React from 'react';
import PropTypes from 'prop-types';
import './Popup.scss';
import defaultImage from '../../images/default-image.png';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';

const Popup = ({ checkedMovie, hidePopup }) => {
  return (
      <div className="popup">
          <Card className="popup__content">
          <CancelIcon 
            className="popup__close"
            onClick={hidePopup}
          />
            <h2>{checkedMovie.title}</h2>
            <p>{checkedMovie.release_date ? checkedMovie.release_date : 'Unknown date'}</p>
            <CardMedia
                className="popup__image"
                image={checkedMovie.poster_path ? 
                  `https://image.tmdb.org/t/p/original${checkedMovie.poster_path}` :
                  defaultImage
                }
                title={checkedMovie.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {checkedMovie.overview ? checkedMovie.overview : 'No description'}
                </Typography>
            </CardContent>
          </Card>
      </div>
  );
}

Popup.propTypes = {
  checkedMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  hidePopup: PropTypes.func.isRequired
}

export default Popup;
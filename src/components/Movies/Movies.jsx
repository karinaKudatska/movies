import React from 'react';
import PropTypes from 'prop-types';
import './Movies.scss';
import defaultImage from '../../images/default-image.png';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const Movies = ({ movies, showPopup }) => {
    return(
        <>
        {movies && (
            <Grid container spacing={5}>
                {movies.map(movie => (
                    <Grid key={movie.id} item xs={3}>
                    <Card className="movie" onClick={() => showPopup(movie.id)}>
                        <CardActionArea>
                        <CardMedia
                            className="movie__image"
                            image={movie.poster_path ?
                            `https://image.tmdb.org/t/p/original${movie.poster_path}` : defaultImage
                            }
                            title={movie.title}
                        />
                        <CardContent>
                            <Typography>
                            {movie.title}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                ))}
            </Grid>
            )}
        </>
    )
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ),
    showPopup: PropTypes.func.isRequired,
}

export default Movies;
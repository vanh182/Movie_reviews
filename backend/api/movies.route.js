import express from 'express';

import MoviesController from './movies.controller.js';

import ReviewsController from './reviews.controller.js';//buổi 5

const router = express.Router(); //get access to express router

//router.route('/').get((req, res)=>res.send('hello world'));//(MoviesController.apiGetMovies); //
router.route('/').get(MoviesController.apiGetMovies);

router//buổi 5
    .route('/review')
    .post(ReviewsController.apiPostReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview);

router.route("/id/:id").get(MoviesController.apiGetMovieById);//buổi 6
router.route("/ratings").get(MoviesController.apiGetRatings); //buổi 6

export default router;
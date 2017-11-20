
//CODIGO PARA PUG

const gulp = require('gulp'),

	pug = require('gulp-pug');
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();

gulp.task('pug', () =>
	gulp.src('./pug/*.pug')
	.pipe(pug({

		pretty: true

	}))

	.pipe(gulp.dest('./'))
);

gulp.task('sass', ()=>
	gulp.src('./sass/*.sass')
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true
		}))
		.pipe(autoprefixer({
			versions: ['last 2 browsers']
		}))
		.pipe(gulp.dest('./css'))
);

gulp.task('default', () => {

	gulp.watch('./pug/*.pug', ['pug']);
	gulp.watch('./sass/*.sass', ['sass']);

	browserSync.init({
		server: './'
	});

	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./css/*.css').on('change', browserSync.reload);

});


/* CODIGO PARA SASS

const gulp = require('gulp'),

	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=>
	gulp.src('./sass/*.sass')
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true
		}))
		.pipe(autoprefixer({
			versions: ['last 2 browsers']
		}))
		.pipe(gulp.dest('./css'))
);

gulp.task('default', () => {

	gulp.watch('./sass/*.sass', ['sass']);

});

*/








/*
const gulp = require('gulp');  //trae dependencia de gulp

gulp.task('default', ()=>
	//ruta de origen   el punto ./ significa diectorio actual
	gulp.src('./origen') //ruta de origen   el punto ./ significa diectorio actual
		.pipe(plugin1)
		.pipe(plugin2)
		.pipe(plugin3)
		.pipe(gulp.dest('./origen')); //donde deja los archivos
);

gulp.task()
gulp.watch('./origen', ['myTask']); */

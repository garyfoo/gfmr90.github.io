var gulp = require('gulp'),
    gulpReplace = require('gulp-replace'),
    slugify = require('slugify'),
    minimist = require('minimist');

gulp.task('copy-presentation', function(){

    // I know this is dirty. I have to refactor this :D
    var presets = {
        title: 'Sample Presentation',
        repo: ''
    };
    var options = minimist(process.argv.slice(2), presets);

    options.slug = slugify(options.title).toLowerCase();
    options.repo = slugify(options.repo).toLowerCase();

    return gulp.src('presentations/_templates/*.html')
        .pipe(gulpReplace(/#{title}/g, options.title))
        .pipe(gulpReplace(/#{slug}/g, options.slug))
        .pipe(gulpReplace(/#{repo}/g, options.repo))
        .pipe(gulp.dest('presentations/'+ options.slug));

});

gulp.task('add-presentation',['copy-presentation', 'copy-markdown'],  function(){

    // I know this is dirty. I have to refactor this :D
    var presets = {
        title: 'Sample Presentation',
        repo: ''
    };
    var options = minimist(process.argv.slice(2), presets);

    options.slug = slugify(options.title).toLowerCase();
    options.repo = slugify(options.repo).toLowerCase();

    var link= ' * [' + options.title + '](/presentations/' + options.slug + '/presentation.html)\n<!--#{link}-->';
    return gulp.src('markdown/hub.md')
        .pipe(gulpReplace('<!--#{link}-->',link))
        .pipe(gulp.dest('markdown'));
});

gulp.task('copy-markdown', function(){

    // I know this is dirty. I have to refactor this :D
    var presets = {
        title: 'Sample Presentation',
        repo: ''
    };
    var options = minimist(process.argv.slice(2), presets);

    options.slug = slugify(options.title).toLowerCase();
    options.repo = slugify(options.repo).toLowerCase();

    return gulp.src('markdown/_templates/*.md')
        .pipe(gulpReplace(/#{title}/g, options.title))
        .pipe(gulpReplace(/#{slug}/g, options.slug))
        .pipe(gulpReplace(/#{repo}/g, options.repo))
        .pipe(gulp.dest('markdown/'+ options.slug));

});

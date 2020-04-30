//importar el contenido de los paquetes descargados en el package.Json
const gulp = require('gulp'); 
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

//funciona en cadena y en orden
function css() {
    return gulp
     //La entrada:en que parte va a encontrar el archivo para pasar a CSS
        .src('scss/app.scss')
        //con un pipe, tiene que correr esa funcion 
        .pipe(autoprefixer() )
        /*compilarlo con dicho estilo hay 4: nested, compact, expanded, compressed*/
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest("css"))//donde se van a guardar los archivos (destino)
}

//revisar archivos por cada cambio
//atento a los cambios q pueda tener.

function watchFiles() {
    gulp.watch('scss/*.scss', css); //recibe 2 parametros 1: la ubicacion del archivo, 2:la tarea
    gulp.watch('index.html') 
}

// TAREAS

// tasks para registrarlas
// recibe 2 parametros 1:nombre 2: la funcion
gulp.task('css', css);

/*para hacer una funcion asincrona, se ejecutan al mismo tiempo y una no depende de la otra*/
gulp.task("watch", gulp.parallel(watchFiles)); 
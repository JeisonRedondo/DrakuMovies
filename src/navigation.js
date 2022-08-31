window.addEventListener('DOMContentLoaded',navigator,false)
window.addEventListener('hashchange',navigator,false)

function navigator (){
    console.log({ location })

    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if (location.hash.startsWith('#search=')){
        SearchPage();
    }else if (location.hash.startsWith('#movie=')){
        movieDetailsPage();
    }else if (location.hash.startsWith('#category=')){
        CategoriesPage();
    }else {
        homePage();
    }
    location.hash
}

function homePage(){
    console.log('Home!!');

    getTrendingMoviesPreview();
    getCategoriesPreview();
    
    location.hash
}
function CategoriesPage(){
    console.log('Categories!!');

    location.hash
}
function movieDetailsPage(){
    console.log('Movie!!');

    location.hash
}
function SearchPage(){
    console.log('Search!!');

    location.hash
}
function trendsPage(){
    console.log('TRENDS!!');

    location.hash
}
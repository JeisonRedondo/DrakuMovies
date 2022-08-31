searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=';
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends=';
});

arrowBtn.addEventListener('click', () => {
    location.hash = '#home';
});

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
    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');


    getTrendingMoviesPreview();
    getCategoriesPreview();

    location.hash
}
function CategoriesPage(){
    console.log('Categories!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    
    location.hash
}
function movieDetailsPage(){
    console.log('Movie!!');

    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    location.hash
}
function SearchPage(){
    console.log('Search!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    location.hash
}
function trendsPage(){
    console.log('TRENDS!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    location.hash
}
const API_TMDB = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
       'Content-type':'application/json;charset=utf-8',
    },
    params:{
        'api_key': API_KEY,
    },
});

async function getTrendingMoviesPreview () {
    const API_TRENDING = '/trending/';
    const media_type = 'movie/';
    const time_window = 'day';

    const {data} = await api(`${API_TRENDING}${media_type}${time_window}`);

    const movies = data.results;

    movies.forEach(movie => {

        const trendingPreviewMoviesContainer =document.querySelector
        ('#trendingPreview .trendingPreview-movieList');

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt',movie.title);
        movieImg.setAttribute(
            'src',
            `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
        );

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);

    });
    
    
}

async function getCategoriesPreview() {

    const ENDPOINT_CATEGORIES = '/genre/movie/list';
    
    const {data} = await api(`${ENDPOINT_CATEGORIES}`);
    

    const categories = data.genres;

    categories.forEach(category => {

        const previewCategoriesContainer = document.querySelector
        ('#categoriesPreview .categoriesPreview-list');
        
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3'); 
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id','id'+ category.id);
        const categoryTitleText = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer);
       
    });
    
    
}

# Services Exercise

## Steps to do:

### First: 
- In movies folder create a service named "movies.service.ts"
- Inside "movies.service.ts" put the following code:

```ts 
    import { Injectable } from '@angular/core'


@Injectable()
export class MoviesService {
    movies = [
        {
          id: 1, 
          name: 'Harry Potter',
          genre: 'Magic',
          length: 126,
          image: '../../assets/images/harry.png',
        },
        {
          id: 2,
          name: 'Naruto',
          genre: 'Action',
          length: 150,
          image:  '../../assets/images/naruto.png',
        },
        {
          id: 3,
          name: 'One Piece',
          genre: 'Adventure',
          length: 175,
          image:  '../../assets/images/lofi.png',
        },
        
      ]
}
```
- Now register this service in the "app.module.ts" by taking the following code:

```ts
    import { MoviesService } from './movies/movies.service'
```
- and in providers array inside @NgModule put the name of the service like that:
```ts
    providers:[MoviesService]
```
- Congraulations now you registered the service


### Second:
#### Now after you registered the service it's time to Inject it inside the movies component as follows:
- Go to "movies.component.ts" file and import "MoviesService" as folows:
```ts
    import { MoviesService } from './movies.service'
```
- Inject the service by putting it in the constructor function as follows:
```ts
    constructor(private movieService: MoviesService)
```
- Congraulations now you have Inject the movie service inside movie component

### Third:
#### Now it's time to use the movies service
- Inside "movies.component" file and in ngOnInit function assign the movies to your movies array as follows
```ts
    movies

    ngOnInit(){
        this.movies = movieService.movies
    }
```
- Now you have the movies provided from the service (WoHoo!!!)

### Fourth
Now add to your service some functionalities such as 
- AddMovie(movie)
- DeleteMovie(movie)
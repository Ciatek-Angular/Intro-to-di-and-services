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

      addMovie(movie){
        this.movies.push(movie)
      }

      deleteMovie(movie){
        let index = this.movies.indexOf(movie)
        this.movies.splice(index, 1)
      }
}
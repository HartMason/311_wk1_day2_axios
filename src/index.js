const axios = require('axios'); 

// import axios here

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'



const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  return axios(url)
};



const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  let axiosCall2 = axios.get(url) 
    .then(response => {
      console.log(response.data)
      return response.data;
    })
    .catch(error => console.log(error))
    return axiosCall2; 
}

// axios(url).then(function(result) {
//   return result.data;
// })
// }



const getMovieByIdFailure = () => {
  const fakeId = 5783
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios(url).then(function(response) {
    return response.status
  })
    .catch(function(error) {
      return error.response.status
    })
    .then(function(result) {
      return result
    });
}

  
  // let axiosCall3 = axios.get(url)
  //   .then(response => {
  //     console.log(response.status)
  //   })
  //   .catch(error => {
  //     console.log("HELLLLLLLLLLLLOOOOOOOOOO WATERMELON!!!!", error.response.status)
  //     return error.response.status
  //   })
  //   .then(function(result) {
  //     return axiosCall3
  //   })

  // }; 
  module.exports = {
    discoverMovie,
    getMovieById,
    getMovieByIdFailure
}
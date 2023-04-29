export default  function addFavoriteHouse(favorites, store) {
  // проверяем, поддерживается ли Local Storage в браузере
  if (typeof(Storage) !== "undefined") {
    // получаем текущий массив "favorite" из Local Storage, если он уже существует
    const currentFavorites = localStorage.getItem("favorite")

    // если массив "favorite" еще не был создан, создаем новый массив и добавляем значения
    if (!currentFavorites || JSON.parse(currentFavorites).length === 0) {
      console.log('empty')
      const favoritesArray = [favorites]
      localStorage.setItem("favorite", JSON.stringify(favoritesArray))
    } else { // если массив "favorite" уже существует, добавляем значения к текущему массиву
      let favoritesArray = JSON.parse(currentFavorites)

      const find = favoritesArray.filter(item => item === favorites)
      console.log(favoritesArray, favorites, find)

      if(find && find.length !== 0){
        favoritesArray = favoritesArray.filter(item => item !== favorites)
      }else{
        favoritesArray.push(favorites)
      }
      console.log('add' , favoritesArray)

      localStorage.setItem("favorite", JSON.stringify(favoritesArray))
    }
  }

  const re = getFavorite()
  store.commit('houses/setFavoriteCount', Array.isArray(re) ? re?.length : null)
}

export function getFavorite(arr){
  if (typeof(Storage) !== "undefined") {
    let res = JSON.parse(localStorage.getItem("favorite")) || []

    if(arr && arr?.length > 0){
      res = arr.filter(item => res.includes(item.info.id))
    }

    return res
  }
}

export function checkFavorite(id){
  if (typeof(Storage) !== "undefined") {
    const arr = JSON.parse(localStorage.getItem("favorite")) || []
    const find = arr.filter(item => item === id)

    return !!find[0]
  }
}

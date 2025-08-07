'use strict'

export const getPhotos = async () => {
  const url = 'https://projeto-fotos-1.onrender.com/fotos'
  const response = await fetch(url)
  const data = await response.json()
  return data
}

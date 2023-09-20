import config from '../config.json'
const ENV = config.ENV
const BASE_URL = config.CONTENT_URL[ENV]

export const BASE_IMAGES_FOLDER = `${BASE_URL}/images`
export const PRODUCTS_IMAGES_FOLDER = `${BASE_IMAGES_FOLDER}/products`
export const CATEGORIES_IMAGES_FOLDER = `${BASE_IMAGES_FOLDER}/categories`

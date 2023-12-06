import React from 'react'
import { IMG_CDN_LINK } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48'>
        <img alt='Movie card' className='' src={IMG_CDN_LINK + posterPath} />
    </div>
  )
}

export default MovieCard;
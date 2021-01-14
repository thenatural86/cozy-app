import React, { useState } from 'react'
import styled from 'styled-components'

// default param of images to avoid undefined error. if images is undefine set to empty array with one object that has url property set to an empty string
const ProductImages = ({ images = [{ url: '' }] }) => {
  // console.log(images)
  // change state of main image to be displayed
  const [main, setMain] = useState(images[0])
  // console.log(main)
  return (
    <Wrapper>
      <img src={main.url} alt='main' className='main' />
      {/* image gallery */}
      <div className='gallery'>
        {images.map((image, index) => {
          const { url, file_name } = image
          return (
            <img
              src={url}
              alt={file_name}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${url === main.url ? 'active' : null}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages

import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({ stars, reviews }) => {
  // console.log(stars)
  // console.log(reviews)

  // double ternary operators and manual approach
  // ;<span>
  //   {stars >= 1 ? <BsStarFill /> : stars >= 0.5 ? <BsStarHalf /> : <BsStar />}
  // </span>

  // programmatic approach
  // Array.from() creates an array which has a length equal to the length property we that is passed in. 2nd arg is callback function that we call against every item. first param of callback is undefined represented as an '_', 2nd param is index
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    // index 0 - 4, every iteration index changes from 0 up to 4, hence index + 1.
    // if stars is whole display whole star, if stars >= 1.5,2.5 ect, display half star, otherwise display empty star
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  console.log(tempStars)
  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars

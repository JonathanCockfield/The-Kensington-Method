'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Noticeable Difference',
    body: "I've been using The Kensington Method for a month, and my posture has really improved. Feeling more energetic and less stressed!",
    author: 'Jessica H.',
    rating: 5,
  },
  {
    title: 'Surprisingly Effective',
    body: 'Was skeptical at first, but the breathing exercises have genuinely helped my anxiety. More relaxed now.',
    author: 'Michael B.',
    rating: 5,
  },
  {
    title: 'Gentle and Effective',
    body: 'The exercises are easy to follow and I’ve noticed an improvement in my digestion. Great for beginners.',
    author: 'Laura J.',
    rating: 5,
  },
  {
    title: 'Small Changes, Big Impact',
    body: 'Didn’t realize how much posture affects health. Better breathing and less back pain now. Recommend giving it a try.',
    author: 'Brian T.',
    rating: 5,
  },
  {
    title: 'A Balanced Approach',
    body: 'Love how the app balances physical exercises with mental health. Feeling more aligned and centered.',
    author: 'Sophia L.',
    rating: 5,
  },
  {
    title: 'Gradual Improvement',
    body: 'No overnight miracles, but steady progress in posture and mental clarity. Worth the patience.',
    author: 'David K.',
    rating: 5,
  },
  {
    title: 'Good for Everyday Wellness',
    body: 'Helpful tips and exercises that are easy to integrate into daily life. Feeling less stiff and more upbeat.',
    author: 'Emma C.',
    rating: 5,
  },
  {
    title: 'Solid App for Health',
    body: 'Consistent use has improved my posture and I feel less bloated. Good for overall well-being.',
    author: 'James R.',
    rating: 5,
  },
  {
    title: 'Effective and Simple',
    body: 'Simple exercises with effective results. Improved posture and a surprising boost in mood.',
    author: 'Olivia G.',
    rating: 5,
  },
  {
    title: 'Good for Desk Workers',
    body: 'As someone who sits a lot for work, this app has been a lifesaver for my back and shoulders.',
    author: 'Ethan M.',
    rating: 5,
  },
  {
    title: 'Worth the Effort',
    body: 'Takes some commitment, but I’ve seen real improvement in my core strength and stress levels.',
    author: 'Grace F.',
    rating: 5,
  },
  {
    title: 'Positive Changes',
    body: 'Noticed improvements in my breathing and posture, which has helped with my daily stress.',
    author: 'Noah W.',
    rating: 5,
  },
  {
    title: 'Practical and Useful',
    body: 'Really practical exercises that have made a difference in my digestive health. Easy to use.',
    author: 'Chloe P.',
    rating: 5,
  },
  {
    title: 'Holistic Health Benefits',
    body: 'The focus on posture has surprisingly improved my overall health. Feeling more balanced and healthy.',
    author: 'Liam S.',
    rating: 5,
  },
  {
    title: 'Steady Progress',
    body: 'Not a quick fix, but consistent use has improved my posture and mental well-being. Quite happy with it.',
    author: 'Ava D.',
    rating: 5,
  }
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-amber-300' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Results of The Kensington Method.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Read about how users are feeling better after getting their bodies back. 
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}

import cx from 'classnames'
import { DOTS } from '@hooks/common.hook'

interface IPaginationProps {
  paginationRange: (number | string)[] | undefined
  currentPage: number
  onChangePage: (page: number) => void
}

export function Pagination({
  currentPage,
  paginationRange,
  onChangePage,
}: IPaginationProps): JSX.Element | null {
  const onPrevious = () => {
    onChangePage(currentPage - 1)
  }

  const onNext = () => {
    onChangePage(currentPage + 1)
  }

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1]
  return (
    <ul className="flex list-none justify-center pt-4 text-xs">
      <li
        className={cx(
          'px-3 h-8 text-center my-auto mx-1 flex items-center rounded-2xl text-sm min-w-8 cursor-pointer',
          currentPage === 1 && 'pointer-events-none'
        )}
        onClick={onPrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </li>
      {paginationRange &&
        paginationRange?.map((pageNumber: number | string) => {
          if (pageNumber === DOTS) {
            return (
              <li className="px-3 h-8 text-center my-auto mx-1 flex items-center rounded-2xl text-sm min-w-8 dots">
                &#8230;
              </li>
            )
          }

          return (
            <li
              className={cx(
                'px-3 h-8 text-center my-auto mx-1 flex items-center rounded-2xl text-sm min-w-8 cursor-pointer',
                pageNumber === currentPage && 'bg-primary-purple text-white'
              )}
              onClick={() => onChangePage(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          )
        })}
      <li
        className={cx(
          'px-3 h-8 text-center my-auto mx-1 flex items-center rounded-2xl text-sm min-w-8 cursor-pointer',
          currentPage === lastPage && 'pointer-events-none'
        )}
        onClick={onNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </li>
    </ul>
  )
}

import cx from 'classnames'
import { DOTS } from './users-list-pagination.hook'
import { ChevronLeft, ChevronRight } from '@components/icons/icons.component'

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
        <ChevronLeft />
      </li>
      {paginationRange &&
        paginationRange?.map((pageNumber: number | string, index: number) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={`${pageNumber}-${index}`}
                className="px-3 h-8 text-center my-auto mx-1 flex items-center rounded-2xl text-sm min-w-8 dots"
              >
                &#8230;
              </li>
            )
          }

          return (
            <li
              key={`${pageNumber}-${index}`}
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
        <ChevronRight />
      </li>
    </ul>
  )
}

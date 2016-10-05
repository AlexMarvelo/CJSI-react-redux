import React, { PropTypes } from 'react'

const LoadMore = ({loadingStatus, onBtnClick}) => {
  const btnClasses = [
    'button',
    'button_gradient'
  ]
  let disabled = loadingStatus == 'PENDING';
  if (disabled) btnClasses.push('button_pushed');
  return (
    <div className="row">
      <div className="col-sm-4 col-sm-push-4">
        <button
          className={btnClasses.join(' ')}
          disabled={disabled}
          onClick={e => {
            e.preventDefault();
            onBtnClick();
          }}>
          Load more
        </button>
      </div>
    </div>
  )
}

export default LoadMore;

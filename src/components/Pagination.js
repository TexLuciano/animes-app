import React, { useEffect } from 'react';
import '../App.css';



let maxItems = 9;
const maxLeft = (maxItems - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset,  }) => {




  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - maxLeft, 1);



  function onPage(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <ul className="nav-page" >
      <li>
        <button
          disabled={current === 1 ? 'ativo' : null}
          style={{ rotate: '180deg' }}
          onClick={() => onPage(current - 1)}
        >
          ➔
        </button>
      </li>
      {Array.from({ length: Math.min(maxItems, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page} className ="responsivo">
            <button
              className={page === current ? 'nav-page__item--active' : null}
              onClick={() => onPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button onClick={() => onPage(current + 1)}>➔</button>
      </li>
    </ul>
  );
};

export default Pagination;

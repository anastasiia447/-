export function BreadCrumbsItem(props) {
    return (
      <>
        <svg
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.8576 9L13.5467 5L8.8576 1"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.651611 9L5.34074 5L0.651611 1"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="breadcrumb">{props.title}</span>
      </>
    );
  }
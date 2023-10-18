import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <header className="header">
      <div className="LeftSection">
        <p>
          Hello Shahrukh{" "}
          <span role="img" aria-label="Wave">
            👋
          </span>,
        </p>
      </div>
      <div className="RightSection">
        <BsSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}
export default Header
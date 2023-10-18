import { Profile } from './profile';
import {BsCart3,BsChevronCompactRight, BsGrid1X2Fill, BsFillGrid3X3GapFill, BsFillArchiveFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill,BsFillGearFill, BsMenuButton, BsChevronCompactDown} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <aside id='sidebar' className="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon-header" />
          Dashboard
        </div>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#">
            <BsGrid1X2Fill className="icon" />
            Dashboard
          </a>
          <BsChevronCompactRight className="icon-1" />
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillArchiveFill className="icon" />
            Product
          </a>
          <BsChevronCompactRight className="icon-1" />
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGrid3X3GapFill className="icon" />
            Customers
          </a>
          <BsChevronCompactRight className="icon-1" />
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsPeopleFill className="icon" />
            Income
          </a>
          <BsChevronCompactRight className="icon-1" />
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsListCheck className="icon" />
            Promote
          </a>
          <BsChevronCompactRight className="icon-1" />
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsMenuButtonWideFill className="icon" />
            Help
          </a>
          <BsChevronCompactRight className="icon-1" />
        </li>
      </ul>

      <Profile/>
    </aside>
  );
}
export default Sidebar
import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import htmlStructure from '../utils/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/sortButton';
import { events } from '../components/form';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();

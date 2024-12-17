import './App.css';
import ScrollIndicator from './components/scroll indicator';
// import LightToDarkMode from './components/Light to Dark';
// import QRCodeGenerator from './components/qr-code-generator';
// import TreeView from './components/tree-view';
// import menus from './components/tree-view/data';

// import Accordian from "./components/accordian";
// import RandomColor from './components/accordian/Random Color/inndex';

// import StarRating from "./components/star rating"

// import ImageSlider from "./components/ImageSlider/index"
// import LoadMoreData from './components/Load More dats';



function App() {
  return (
    <div className="App">
      {/* ACCORDIAN  component */}

      {/* <Accordian /> */}

      {/* Random color */}

      {/* <RandomColor /> */}

      {/* <StarRating noOfStars={5} /> */}


      {/* < ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}



      {/* Load More compments */}

      {/* <LoadMoreData /> */}



      {/* treeView  component/ menu ui/ recursive navigation /*/}

      {/* <TreeView menu={menus} /> */}


      {/* generating QR code Here */}


      {/* <QRCodeGenerator /> */}


      {/* light to Dark Mode switch */}

      {/* <LightToDarkMode /> */}



      {/* /////////scrollll indicator */}


      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />

    </div>
  );
}

export default App;
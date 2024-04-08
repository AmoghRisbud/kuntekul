import './App.css';
import React, { useState , useEffect} from "react";
import PDF from './components/PDF.js'
import Toolbar from'./components/Toolbar.js'
import Navbar from './components/Navbar.js'
import Arpanpatrika from "../src/assets/Arpanpatrika.jpg";

function App() {

  const [pageNumber, setPageNumber] = useState(1);

  const [showHighResImage, setShowHighResImage] = useState(false);

  useEffect(() => {
    // After 5 seconds, switch to the high-resolution image
    const timer = setTimeout(() => {
      setShowHighResImage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
    console.log(newPageNumber+"new psge");
  };

  return (
    <div className="App bg-slate-950">
      {showHighResImage ? (
        <div>
          <Navbar onPageChange={handlePageChange} />
          <PDF pageNumber={pageNumber} />
        </div>
      ) : (
        <img
          className="h-screen m-auto animate-fadeOut"
          src={Arpanpatrika}
          alt="Thumbnail image"
        />
      )}
    </div>
  );
}

export default App;

import React, {useState,useEffect} from "react";
import axios from "axios";
import Photos from "./components/Photos/Photos";
import Pagination from "./components/Pagination/Pagination";


function App() {
  const [photos,setPhotos] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);

  useEffect((e)=>{
    const getCounties = async () => {
      setLoading(true)
      const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=300")
      setPhotos(response.data)
      setLoading(false)
    }
    getCounties()
  },[])

  const lastPageIndex = currentPage * photosPerPage
  const firsPageIndex = lastPageIndex - photosPerPage
  const CurrentPage = photos.slice(firsPageIndex,lastPageIndex)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  return (
      <div className="container mt-5">
        <h1 className="text-primary">Photos</h1>
        <Photos loading={loading} photos={CurrentPage}/>
        <Pagination photosPerPage={photosPerPage} totalPhotos={photos.length} paginate={paginate}/>
      </div>
  );
}

export default App;

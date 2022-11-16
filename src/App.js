import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/index.jsx";
import HotelItem from "./HotelItemPage";
import HotelSearchResult from "./HotelSearchResultPage";
import BottomNavigation from "./BottomNavigation";

function App() {
  return (
    <div className="w-full container flex flex-col items-center">
      <Header />

      <div className=" bg-slate-200 w-full flex justify-center px-40 py-4">
        <Routes>
          <Route path="/" element={<HotelSearchResult />} />
          <Route path="/hotel/:id" element={<HotelItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <BottomNavigation />
    </div>
  );
}

export default App;

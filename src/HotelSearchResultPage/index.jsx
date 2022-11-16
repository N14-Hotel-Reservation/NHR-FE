import HotelFilter from "./HotelFilter";
import HotelItem from "./HotelItem";

const HotelSearchResult = () => {
  const renderHotelItems = () => {
    let content = [];
    for (let index = 0; index < 5; index++) {
      content.push(
        <HotelItem
          description={"Wake up to breathtaking views of the iconic Sydney Opera House, the Harbour Bridge or Darling Harbour each morning. You will be spoiled for choice at the Shangri-La Hotel, with a day spa, fitness centre and indoor pool at your disposal."}
          hotelName={"Shangri-La Sydney"}
          rs={"9.2"}
          location={"176 Cumberland Street, The Rocks, Sydney CBD, 2000 Sydney, Australia"}
          hotelImage={"https://bridgeporthotel.com.au/wp-content/uploads/2020/06/HomeAnimation12_2021.jpg"}
          ifVaccination={"0"}
        />
      )
    }
    return content
  };

  return (
    <div className="w-full border border-black">
      HotelSearchResult
      <HotelFilter />
      <div className=" grid grid-cols-1 gap-x-10 gap-y-10 px-40 mt-4">
        {renderHotelItems()}
      </div>
    </div>
  );
};

export default HotelSearchResult;

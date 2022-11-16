import hotelImage from '../asset/hotel.png'

const HotelItem = () => {
  return (
    <div className=' w-full'>
      <div>
      <p className=' text-3xl'>title</p>
      </div>
      <div className=' w-96'>
        <img src={hotelImage} alt="" />
      </div>
      <div className=' h-44'>
        <p>description</p>
        <p>Wake up to breathtaking views of the iconic Sydney Opera House, the Harbour Bridge or Darling Harbour each morning. You will be spoiled for choice at the Shangri-La Hotel, with a day spa, fitness centre and indoor pool at your disposal.

The Shangri-la Sydney is located in the historic Rocks area, where Europeans first settled in Australia in 1788. This enviable location is just 5 minutes’ walk from both the Sydney Opera House and the MCA (Museum of Contemporary Art).


CHI, The Spa offers a luxurious escape in its private spa suites, with a range of body treatments and massages on offer. The hotel also offers a hot tub, sauna and sun deck so you can make the most of your stay.

The award-winning Altitude Restaurant boasts magnificent views of the harbour and the New York-inspired Blu Bar on 36 is the perfect spot for a creative cocktail.</p>
      </div>
      <div className=' h-44'>
        <p>Availability Status</p>
      </div>
      <div className=' h-44'>
        <p>Review Score</p>
      </div>
      <div className=' h-44'>
        <p>Facilities</p>
      </div>
    </div>
  )
}

export default HotelItem
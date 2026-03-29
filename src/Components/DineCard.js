export default function DineCard({ RestData }) {

  return (
   <div className="w-full max-w-sm flex-none rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
  
    <a target="_blank" href={RestData.cta.link} rel="noopener noreferrer">
    
    <div className="relative">

      <img
        className="w-full h-44 md:h-48 object-cover"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles?.[0]?.url}
        alt={RestData?.info?.name}
        loading="lazy"
      />

      {/* Restaurant Name */}
      <p className="absolute bottom-2 left-2 text-lg md:text-xl text-white font-bold z-10 line-clamp-1">
        {RestData?.info?.name}
      </p>

      {/* Rating */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full z-10">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-4 h-4"
        >
          <circle cx="50" cy="50" r="45" className="fill-green-500" />
          <polygon
            points="50,20 58,40 80,40 62,55 70,75 50,62 30,75 38,55 20,40 42,40"
            className="fill-white"
          />
        </svg>

        <p className="text-white font-bold">
          {RestData?.info?.rating?.value}
        </p>

      </div>

      {/* Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>

    </div>

  </a>

  {/* Card Content */}
  <div className="px-3 py-2 space-y-2">

    <div className="text-sm text-gray-700 font-semibold line-clamp-2">
      {RestData?.info?.cuisines?.join(", ")}
    </div>

    <div className="flex justify-between text-xs text-gray-700 font-semibold">

      <span className="line-clamp-1">
        {RestData?.info?.locationInfo?.formattedAddress}
      </span>

      <span>
        {RestData?.info?.locationInfo?.distanceString}
      </span>

    </div>

    {/* Offer */}
    <div className="flex justify-between items-center bg-green-500 px-3 py-2 rounded-xl font-bold">

      <div className="flex items-center gap-1">

        <img
          className="w-5 h-4"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
          alt="Offer"
        />

        <span className="text-white text-sm line-clamp-1">
          {RestData?.info?.offerInfoV3?.vendorOffer?.title}
        </span>

      </div>

      <span className="text-white text-xs">
        {RestData?.info?.offerInfoV3?.vendorOffer?.subtext}
      </span>

    </div>

    {/* Customer Offer */}
    <div className="text-sm bg-green-100 text-green-600 px-3 py-2 rounded-xl font-bold line-clamp-2">
      {RestData?.info?.customerOffer?.infos?.[0]?.description}
    </div>

    </div>

  </div>
  );
}
 


 

      
import PropartyCard from "./PropertyCard";

function Properties() {
  const getProperties = () => {
    return [
      {
        id: 1,
        title: "Modern Design Villa",
        image:
          "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: "$3000.00",
        bedrooms: 3,
        bathrooms: 2,
      },
      {
        id: 2,
        title: "Cozy Family Cottage",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/520347605.jpg?k=6154bc8750a5dca079bf47b861e1c74a9667b7180aecd6b3313d88bc4918b695&o=&hp=1",
        price: "$1800.00",
        bedrooms: 3,
        bathrooms: 3,
      },
      {
        id: 3,
        title: "Luxury Penthouse Suite",
        image: "https://cdn.mos.cms.futurecdn.net/Hd4DfAjXCgUHvpbtkUcz9L.png",
        price: "$5000.00",
        bedrooms: 4,
        bathrooms: 3,
      },
      {
        id: 4,
        title: "Charming Country House",
        image:
          "https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1647613641514-TSAQ9HZ5Z3QJZHLI4I9R/Francis%2BYork%2BCharming%2BCountry%2BHouse%2BOverlooking%2Bthe%2BWest%2BDorset%2BCoast%2B2.jpg?format=1000w",
        price: "$2400.00",
        bedrooms: 3,
        bathrooms: 1,
      },
      {
        id: 5,
        title: "Stylish Urban Apartment",
        image:
          "https://www.wealthmanagement.com/sites/wealthmanagement.com/files/uploads/2017/03/garden-apartment-77010.jpg",
        price: "$2200.00",
        bedrooms: 6,
        bathrooms: 3,
      },
      {
        id: 6,
        title: "Spacious Family Home",
        image:
          "https://cdn.houseplansservices.com/content/imc3gd3pp0ca47e656k6mbcfb0/w991x660.jpg?v=9",
        price: "$3500.00",
        bedrooms: 4,
        bathrooms: 2,
      },
    ];
  };
  return (
    <div>
      <section>
        <div className="container">
          <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Properties
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Grab your Dream Property
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getProperties().map((property) => (
              <PropartyCard
                key={property.id}
                title={property.title}
                image={property.image}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                description={property.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Properties;

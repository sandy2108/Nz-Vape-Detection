import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";


const ServiceArea = () => {
  const Map = () => {
    useEffect(() => {
      // Initialize the map when the component mounts
      mapboxgl.accessToken = "pk.eyJ1Ijoic2FuZHkyMTA4IiwiYSI6ImNsamZpZTh1czAxNWwzcXRnZmVrMTd0azQifQ.oFnHGpVMJTjsyf3n7x0zOg";
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: [174.636027, -36.857887], // longitude, latitude of the location
        zoom: 15 // starting zoom
      });

      const marker = new mapboxgl.Marker()
        .setLngLat([174.636027, -36.857887])
        .addTo(map);

      // Add event listener to the marker
      marker.getElement().addEventListener("click", () => {
        // Redirect to Google Maps
        window.location.href =
          "https://www.google.com/maps?q=15A+Tiroroa+Avenue,+Te+Atatū+South,+Auckland+0610,+New+Zealand";
      });

      // Clean up the map instance when the component unmounts
      return () => map.remove();
    }, []);

    return <div id="map" style={{ width: "100%", height: "400px" }} />;
  };

  return (
    <section className="bg-gray-900">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-2 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
          <div className="mr-auto place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white">
              Service Area
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
              Auckland New Zealand
            </p>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white ">
              Call Us
            </h1>
            <Link href="tel:021 023 26040" className="max-w-2xl mb-6 font-light text-white  lg:mb-8 md:text-lg lg:text-xl ">
              021 023 26040
            </Link>
            <h1 className="max-w-2xl mb-4 text-4xl mt-3 font-extrabold tracking-tight leading-none text-white">
              Email
            </h1>
            <Link href="mailto:ben@vapedetection.co.nz" className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">
              ben@vapedetection.co.nz
            </Link>
          </div>
          <div className="lg:flex md:my-0 my-10">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;

import Image from "next/image";
import Link from "next/link";

export default function Events({ event }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-6">
      <Link
        href={{
          pathname: `/events/`,
          query: { id: event.id.toString() },
        }}
      >
        <a
          key={event.id}
          className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div className="relative overflow-hidden">
            <Image
              src={event.image.url}
              className="absolute inset-0 w-full object-cover"
              alt={event.image.alt}
              width={500}
              height={300}
            />
          </div>
          <div className="p-4">
            <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
              {event.category.name}
            </span>
            <h2 className="mt-2 mb-2  font-bold">{event.name}</h2>
            <p className="text-sm">{event.shortDescription}</p>
            <div className="mt-3 flex items-center">
              <span className="font-bold text-xl">{event.price}</span>&nbsp;
              <span className="text-sm font-semibold">₽</span>
            </div>
            <div className="mt-3 flex items-center">
              <span className="font-bold text-xl">{event.ageRestriction}</span>
              &nbsp;
              <span className="text-sm font-semibold">+</span>
            </div>
          </div>
          <div className="p-4 border-t border-b text-xs text-gray-700">
            <span className="flex items-center mb-1">
              <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
              {event.tags?.map((tag) => tag.name).join(", ")}
            </span>
            {event.places.map((place, i) => (
              <span key={i} className="flex items-center">
                <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                {place.address.fullAddress}
              </span>
            ))}
          </div>
          <div className="p-4 flex items-center text-sm text-gray-600">
            <ul className="flex justify-center">
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart"
                  className="w-3.5 text-red-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart"
                  className="w-3.5 text-red-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart"
                  className="w-3.5 text-red-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  className="w-3.5 text-red-500 mr-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  className="w-3.5 text-red-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
              </li>
            </ul>
            <span className="ml-2">34 Bewertungen</span>
          </div>
        </a>
      </Link>
    </div>
  );
}

// <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
//   <Image
//     src={event.image.url}
//     className="w-full h-full object-center object-cover group-hover:opacity-75"
//     alt={event.image.alt}
//     width={500}
//     height={200}
//   />
// </div>
// <h3 className="mt-4 text-sm text-gray-700">{event.name}</h3>
// <p className="mt-1 text-lg font-medium text-gray-900">
//   {event.shortDescription}
// </p>

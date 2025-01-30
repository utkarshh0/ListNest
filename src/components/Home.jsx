import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import PropertyCard from "./PropertyCard";

const fetchProperties = async (page) => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newProperties = Array.from({ length: 6 }, (_, index) => ({
        id: page * 10 + index + 1,
        price: 14000,
        title: "Equestrian Family Home",
        location: "California, CA, USA",
        featured: Math.random() > 0.5,
        beds: 4,
        baths: 2,
        sqft: 2500,
        image: "https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A",
      }));
      resolve(newProperties);
    }, 1000);
  });
};

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { ref, inView } = useInView({ threshold: 1 });

  const loadMore = useCallback(async () => {
    const newProperties = await fetchProperties(page);
    if (newProperties.length === 0) {
      setHasMore(false);
    } else {
      setProperties((prev) => [...prev, ...newProperties]);
      setPage((prev) => prev + 1);
    }
  }, [page]);

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    if (inView && hasMore) {
      loadMore();
    }
  }, [inView, hasMore, loadMore]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
      {hasMore && (
        <div ref={ref} className="text-center col-span-full">
          <p>Loading more properties...</p>
        </div>
      )}
    </div>
  );
};

export default PropertyList;

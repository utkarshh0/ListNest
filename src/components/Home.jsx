import PropertyCard from './PropertyCard';

const properties = [
    {
      id: 1,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: true,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__'
    },
    {
      id: 2,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: true,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 3,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: false,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 4,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: true,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 5,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: false,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 6,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: false,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 7,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: true,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 8,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: true,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 9,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: true,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 10,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: false,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 11,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: true,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
    {
      id: 12,
      price: 14000,
      title: 'Equestrian Family Home',
      location: 'California, CA, USA',
      featured: false,
      beds: 4,
      baths: 2,
      sqft: 2500,
      image: 'https://s3-alpha-sig.figma.com/img/4845/a3aa/91cb1e5c1e7365f44b6c4227f40c3020?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYff0n~ljXTNL-aNi1jJeGqfZ3FkrUAjHe7TUMwHoNVljdnsyidN5t6YMJcgyc2A~tQq3g932TWC57za4inISnA~xd4HxpaXWfrcbmA-55zbQuvB0Yj8jGqILJ~Ak--re6UmFLU7RSsVsOPlKnzIgHslHjU-I3TJCQR7NA52c9T5VUUKWNRkhbhvW5iHWMI5ZrK~f-0NnnwtO8g7~W2Zbjre2TzULD0d6SL4YzSYyvT-i0aCjrWViGsKvOO8D9Nb83LSd0SGJFObi5YBFChsDrnRew1kCcsVQt0cT2dIgHvkWWue8GHIvMI5xA9lBAiM~~XuT1HbcIESHZ0~nIxx3A__ '
    },
  ];    

export default function Home(){
  return (
    <div className='w-full h-full px-4 py-8'>
         <p className='text-lg font-bold mb-6'>Discover popular properties</p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-4">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
             </div>
      </div> 
  )
}
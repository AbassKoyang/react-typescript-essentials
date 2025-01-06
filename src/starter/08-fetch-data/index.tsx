// import { useState, useEffect } from "react";
// import { type Tour, tourSchema } from "./utils";
// const url = 'https://www.course-api.com/react-tours-project';

// function Component() {
//   const [tours, setTours] = useState<Tour[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [isError, setIsError] = useState<string | null>();


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(url);
//         if(!response.ok){
//           throw new Error('failed to load...')
//         }
//         const rawData : Tour[] = await response.json();
//         console.log(rawData)
//         const result = tourSchema.array().safeParse(rawData);
//         if(!result.success){
//           console.log(result.error.message);
//           throw new Error('failed to parse tours')
//         }
//         setTours(result.data);
//       } catch (error) {
//         const errorMessage = error instanceof Error ? error.message : 'An unexpected error occured';
//         setIsError(errorMessage);
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchData();
//   }, [])

//   if(loading){
//     return <h2>Loading</h2>
//   }
//   if(isError){
//     return <h2>Error: {isError}</h2>
//   }
  
//   return (
//     <>
//       {tours.map((tour: Tour) => <h2 key={tour.id}>{tour.name}</h2>)}
//     </>
//   );
// }
// export default Component;

import { useQuery } from "@tanstack/react-query";
import { fetchTours } from "./utils";
function Component(){
  const {isPending, isError, error, data:tours} = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,
  })
  if(isPending){
    return <h2>Loading</h2>
  }
  if(isError){
    return <h2>Error: {error.message}</h2>
  }
  
  return (
    <>
      {tours.map((tour) => <h2 key={tour.id}>{tour.name}</h2>)}
    </>
  );
}
export default Component;

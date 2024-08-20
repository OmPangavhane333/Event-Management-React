import { useCallback, useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SerachEventList/SearchEventList";
import Navigation from "../../components/Navigation/Navigation";
import './FilterEvents.css';

const FilterEvents = () => {
   const [monthYear, setMonthYear] = useState({
       selectedMonth: null,
       selectedYear: null,
       filterType: 'All' 
   });

   const getMonthYear = useCallback((selectedMonth, selectedYear, filterType) => {
       setMonthYear({ selectedYear, selectedMonth, filterType });
   }, []);

   return (
       <div>
           <Navigation />
           <div className="find-events-wrapper">
               <FilterBox getMonthYear={getMonthYear} />
               <SearchEventList monthYear={monthYear} />
           </div>
       </div>
   );
}

export default FilterEvents;

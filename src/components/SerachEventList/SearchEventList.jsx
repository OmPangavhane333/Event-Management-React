import EventCard from "../EventCard/EventCard";
import { eventList } from '../../utils/EventDatabase';
import Footer from "../../components/Footer/Footer.jsx"; 
import "./SearchEventList.css";

const SearchEventList = ({ monthYear }) => {
    const { selectedMonth, selectedYear, filterType } = monthYear;

    
    const selectedDate = new Date(`${selectedMonth} 1, ${selectedYear}`);
    const currentDate = new Date();

    
    const filteredEvents = eventList.filter((eventDetail) => {
        const eventDate = new Date(`${eventDetail.date.year}-${eventDetail.date.month} 1`);

        
        if (filterType === "Past") {
            return eventDate < selectedDate;
        } else if (filterType === "Upcoming") {
            return eventDate >= selectedDate;
        } else {
            return true; 
        }
    });

    
    const renderEventCards = () => {
        return filteredEvents.map(({ id, date, heading, location, img }) => {
            return (
                <EventCard
                    key={id}
                    id={id}
                    date={date}
                    heading={heading}
                    location={location}
                    img={img}
                />
            );
        });
    };

    return (
        <div className="event-search">
            {filteredEvents.length > 0 ? (
                renderEventCards()
            ) : (
                <p>No events available for the selected filters</p>
            )}
            
        </div>
            
    );
};

export default SearchEventList;

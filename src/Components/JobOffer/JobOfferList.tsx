import JobOffer from "./JobOffer";
import { offers } from "../../Data/OffersData";
import { useState, useEffect } from "react";
import { Offer } from "./JobOffer"; 
import styled from "styled-components";

const JobListContainer = styled.div`
position: relative; 
`

interface JobOfferListProps {
    toggleTag: (tag: string) => void;  
    selectedTags: string[]; 

}

  const filterOffers = (offers: Offer[], tags: string[]): Offer []=> {
    if (tags.length === 0) return offers;
    return offers.filter(offer =>
        tags.every(tag=>
            offer.languages.includes(tag) ||
            offer.tools.includes(tag) ||
            offer.level === tag ||
            offer.role === tag
        )
    );
  };

const JobOfferList: React.FC<JobOfferListProps>= ({toggleTag, selectedTags}) => {
       const [filteredOffers, setFilteredOffers] = useState(offers);

    
        useEffect(() => {
        setFilteredOffers(filterOffers(offers, selectedTags));
    }, [selectedTags]);


    return (
        <JobListContainer>
            {filteredOffers.map((offer) => (
                <JobOffer key={offer.id} offer={offer} toggleTag={toggleTag} />
            ))}
          </JobListContainer>
    );
};

export default JobOfferList;
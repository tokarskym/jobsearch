import JobOffer from "./JobOffer"
import { offers } from "../../Data/OffersData"

const JobOfferList: React.FC = () => {
    return (
        <>
            {offers.map((offer) => (
                <JobOffer key={offer.id} offer={offer}></JobOffer>
            ))}
        </>
    )
}

export default JobOfferList; 
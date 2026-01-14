import { useState, useEffect } from "react";


//https://dog.ceo/api/breeds/list

type BreedCard = {
    name: string,
    imageURL: string
};

export const BreedWithImages = () => {

    const breedApi = "https://dog.ceo/api/breeds/list";

    const [breedCard, setBreedCard] = useState<BreedCard[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch breed names
                const response = await fetch(breedApi);
                if(!response.ok) throw new Error("Breeds not found");

                const breedData = await response.json();
                if(breedData.message.length === 0) return;

                const limitedBreeds = breedData.message.slice(0, 5);

                const cards:BreedCard[] = [];

                for(let i = 0; i < limitedBreeds.length; i ++) {
                    const breed = limitedBreeds[i];

                    //Get breed image
                    const ImgRes = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
                    if(!ImgRes.ok) throw new Error("Breed image not found for:" + breed);

                    const imgData = await ImgRes.json();

                    //Create card object for this breed
                    cards.push({
                        name: breed,
                        imageURL: imgData.message
                    });
                };

                setBreedCard(cards);
                console.log(cards)

            } catch(err) {
                setError(true);
                console.log("Error", err);
            } finally {
                setLoading(false);
            }
    };

    fetchData();
    }, [])

    if(loading) {
        return <div className="text-blue-400 font-semibold text-[20px]">Loading data...</div>
    }

    if(error) {
        return <div className="text-red-400 font-semibold text-[20px]">Error loading data</div>
    }

    return (
        <div>
            {breedCard.map((breed) => {
                const breedName = breed.name.charAt(0).toLocaleUpperCase() + breed.name.slice(1);

                return(
                    <div key={breed.name} className="mb-4 px-4 py-4 bg-white text-black rounded-[12px]">
                        <div>
                            <img className="w-[400px] mb-4 rounded-[6px]" src={breed.imageURL} alt={breedName} />
                            <span className="text-[18px] font-semibold">{breedName}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
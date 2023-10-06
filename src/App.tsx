import Navbar from './Components/Navbar/Navbar';
import JobOfferList from './Components/JobOffer/JobOfferList';
import GlobalStyles from './Components/GlobalStyles/GlobalStyles';
import { useState, useEffect } from 'react';

function App() {

  
 const [selectedTags, setSelectedTags] = useState<string[]>(() => {
        const savedTags = localStorage.getItem('selectedTags');
        return savedTags ? JSON.parse(savedTags) : [];
    });


    useEffect(() => {
        localStorage.setItem('selectedTags', JSON.stringify(selectedTags));
    }, [selectedTags]);

    const toggleTag = (tag: string) => {
        setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };

 const clearTags: () => void = () => {
    setSelectedTags([]);
}


  return (
    <div className="App">
      <GlobalStyles/>
      <Navbar toggleTag={toggleTag} selectedTags={selectedTags} clearTags={clearTags} />
      <JobOfferList toggleTag={toggleTag} selectedTags={selectedTags} />
    </div>
  );
}

export default App;


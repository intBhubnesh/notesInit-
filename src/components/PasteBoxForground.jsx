import React, { useState, useMemo, useEffect } from 'react';
import { NavBar } from './NavBar';
import { CategorySelection } from './CategorySelection';
import { PasteCard } from './PasteCard';
import { useSelector } from 'react-redux';

export const PasteBoxForground = () => {
    const allPaste = useSelector((state) => state.Paste.pasteList);
    const [pasteList, setPasteList] = useState([])
    const filterCategoryList = useSelector(state => state.Category.categoryList.filter(cat => cat.isSelected === true).map(cat => cat.name))
    const [selectedTag, setSelectedTag] = useState(filterCategoryList)

    useEffect(() => {
      const filteredList  = selectedTag.includes('All')  ? allPaste : allPaste.filter(paste => paste.category.some(cat => selectedTag.includes(cat)))

      setPasteList(filteredList)
      console.log('fucl',selectedTag,filteredList)
    }, [selectedTag,allPaste])

    // Group pastes alphabetically
    const groupedPastes = useMemo(() => {
        const groups = {};
        console.log(pasteList);
    pasteList.forEach(({ title, id, ...rest }) => {
      const letter = title[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push({ id, title, ...rest });
    });
    return groups;
  }, [pasteList]);

  return (
    <div className='absolute px-8 inset-0 z-0 m-4 bg-black/40 backdrop-blur-xl rounded-[32px] outline-2 outline-zinc-400/30 outline'>
      <NavBar />
      <CategorySelection
      setSelectedTag={setSelectedTag}
      />

      <div className='flex flex-col w-full gap-4 mt-12 overflow-scroll h-2/3'>
        {Object.keys(groupedPastes)
          .sort()
          .map((letter) => (
            <div key={letter}>
              <div className='w-full mt-4  border-b-[1px] border-white/20 pb-2'>
              <h2 className='text-3xl font-bold text-white'>{letter}</h2>
              </div>
              <div className='flex flex-row flex-wrap gap-4 mt-5'>
                {groupedPastes[letter].map(({ id, title, description, time }) => (
                  <PasteCard key={id} title={title} description={description} time={time}/>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
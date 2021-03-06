import React, {useState, useEffect} from 'react';
import {Layout, Recent, SearchBar, Trending} from '../components';
import {trendingList} from '../library/constants/trendingList';
import {Item} from '../components/Item/index'

export const Home = (props) => {

  //const [recent, setRecent] = useState([])
  const [trending, setTrending] = useState(trendingList)

    // const trendingSection = (recipes) => {
    //     recipes.map(item => {
    //         return(
    //         <Item
    //           name={item.name}
    //           image={item.image}
    //         />
    //         )
    //     })
    // }

const handleSearch=(text)=>{
  if(text){
    const listFilter = trendingList.filter((item)=>item.name.toLocaleLowerCase().includes(text))
    setTrending(listFilter)
  }else{
    setTrending(trendingList)
  }
}

  return (
    <Layout>
      <>
        <SearchBar handleSearch={handleSearch} />
        <Trending props={props} list={trendingList} />
        <Recent props={props} list={trendingList}/>
      </>
    </Layout>
  );
};

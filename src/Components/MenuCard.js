import { useState } from "react"
import RestInfo from "./RestInfo"
import TopPickCard from "./Top_Picks"


export default function MenuCard({menuItems,foodselected}){

    const [isOpen, setIsOpen] = useState(true);
    
    
    if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} foodselected={foodselected}></MenuCard>)
                }
            </div>
            </div>
        )
    }

   
    if(!isOpen){
        return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>   
        ) 
    }
    

    if(foodselected==='veg'){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

    if(foodselected==='nonveg'){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

   


    return (
       
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                
         {
           menuItems?.itemCards ? ( menuItems.itemCards.map((item) => (<RestInfo key={item.card.info.id} restData={item.card.info} /> )) ) : menuItems?.carousel ?(
      // 👇 ADD HERE
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2">
        {menuItems.carousel.map((item) => (
          <div key={item.dish.info.id} className="flex-shrink-0 snap-start">
            <TopPickCard item={item} />
          </div>
        ))}
      </div>
    ): null
         }
             
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        
    )
}
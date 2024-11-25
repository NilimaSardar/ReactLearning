import  React from 'react';

// function Card(props){
//     console.log(props.name)
function Card({name, address="Nepal"}){
    console.log(name)
    return(
        <>
             <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29473242/pexels-photo-29473242/free-photo-of-bright-tulip-bouquet-in-natural-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
       {name}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {/* {address || "Nepal"} */}
        {address}
      </div>
    </figcaption>
  </div>
</figure>
        </>
    )
}


export default Card
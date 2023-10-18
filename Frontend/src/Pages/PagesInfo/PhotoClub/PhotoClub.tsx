import Photo1 from "../../../Assets/PhotoClub/1.jpeg"
import Photo2 from "../../../Assets/PhotoClub/2.jpg"
import Photo3 from "../../../Assets/PhotoClub/3.jpg"
import Photo4 from "../../../Assets/PhotoClub/4.jpg"
import Photo5 from "../../../Assets/PhotoClub/5.jpeg"
import Photo6 from "../../../Assets/PhotoClub/6.jpg"
export const PhotoClub = () => {
    return(
        <div className="grid grid-cols-3 relative p-2 gap-2">
            <img className='h-80 w-full object-cover object-center' src={Photo1} alt={"Loading..."}/>
            <img className='h-80 w-full object-cover object-center' src={Photo2} alt={"Loading..."}/>
            <img className='h-80 w-full object-cover object-center' src={Photo3} alt={"Loading..."}/>
            <img className='h-80 w-full object-cover object-center' src={Photo4} alt={"Loading..."}/>
            <img className='h-80 w-full object-cover object-center' src={Photo5} alt={"Loading..."}/>
            <img className='h-80 w-full object-cover object-center' src={Photo6} alt={"Loading..."}/>
        </div>
    )
}
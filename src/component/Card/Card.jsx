import { useQuery } from '@tanstack/react-query';
import Navber from '../Navber/Navber';
import { useEffect, useState } from 'react';

const Card = () => {


    // const data1 = [
    //     {
    //         id: 1,
    //         name: 'shakil',
    //         arr: {
    //             designation: 'student'
    //         },
    //         age: 23,
    //         address: 'mohammadpur'
    //     },
    //     {
    //         id: 2,
    //         name: 'jahid',
    //         age: 23,
    //         address: 'comilla'
    //     }
    // ]
    
    
    
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);
   
    
    useEffect(() => {
        fetch('/student.json')
            .then(res => res.json())
            .then(data=> setData(data))
    }, [])
   
    if (!loading) {
        return <p>Loading..</p>
    }
    


    // const getStudent = async() => {
    //     return await fetch("/student.json").then(res => res.json())
    // }
    
    // const {data, isLoading, isError}  = useQuery({
    //     queryKey: ['studentData'],
    //     queryFn: getStudent,
    // })
    
    // if (isLoading) {
    //     return <p>Loading..</p>
    // }
    // console.log(data);
    



    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                {
                    data?.students?.map(item => <p key={item.id}>{item.name}</p>)
               }
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Card;










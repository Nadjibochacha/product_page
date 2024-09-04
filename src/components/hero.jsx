import React, { useEffect, useState } from 'react'
import './hero.css'
import main_prod from '../images/main.png'
import prod1 from '../images/prod1.png'
import prod2 from '../images/prod2.jpeg'
import prod3 from '../images/prod3.jpeg'
import prod4 from '../images/prod4.jpeg'
import ad_img from '../images/ad_img.png'
import {firestore} from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'


const Hero = () => {
    const [count,setCount] = useState(1)
    const [total,setTotal] = useState(8750)
    const [name,setname] = useState()
    const [phone,setPhone] = useState()
    const [wilaya,setWelaya] = useState()
    const [region,setRegion] = useState()
    const ref = collection(firestore, 'orders')

    useEffect(()=>{
        setTotal(8750*count)
    },[count])

    const handelSubmit = async (e) => {
        e.preventDefault()
        if (name && phone && wilaya && region) {
            console.log(name, phone, wilaya, region);
            let data = {
                name: name,
                phone_Number : phone,
                wilaya: wilaya,
                region: region,
                countity_product: count
            }
            try{
                addDoc(ref,data)
                Swal.fire({
                    title: 'Success',
                    text: "Your message has been sent successfully! we'll response to you soon.",
                    icon:'success',
                    confirmButtonText: 'Close',
                })
                setPhone(0)
                setRegion('')
                setCount(1)
                setWelaya('')
                setname('')
            }catch(e){
                console.log(e);
            }
            
        } else {
            Swal.fire({
                title: 'Error',
                text: "Your informations are not valid. Please try again!",
                icon:'error',
                confirmButtonText: 'Close',
            })
        }
    }
    
  return (
    <div id='hero' className='pt-5 pb-4'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-5">
                    <h2 className='text-uppercase text-center' dir='ltr'> pack 10</h2>
                    <img className='main-img' src={prod4} alt="" />
                    {/* <div className="list text-center">
                        <span> <img src={main_prod} alt="" /> </span>
                        <span> <img src={prod1} alt="" /> </span>
                        <span> <img src={prod2} alt="" /> </span>
                        <span> <img src={prod3} alt="" /> </span>
                        <span> <img src={prod4} alt="" /> </span>
                    </div> */}
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                    <h4> <span style={{color:'#9E0059FF'}}>8750 د.ج</span>   <span className='first'> 9799.99 د.ج</span> </h4>
                    <form className='mt-3 p-2 mb-2' onSubmit={handelSubmit}>

                        <h2>معلومات المنتج</h2>

                        <div className="row justify-content-around mt-4 mb-2">
                            <div className="col-md-3">الكمية</div>
                            <div className="col-md-7"> 
                                <input required type="number" min='1' defaultValue={1} onChange={e=> setCount(e.target.value)} className='w-100' max='0799999999' name="name" id="" placeholder='الكمية'/>
                            </div>
                        </div>
                        
                        <div className="total row justify-content-between mt-4 mb-3">
                            <div className="col-5">المبلغ الاجمالي ⬅️</div>
                            <div className="col-5">  {total} دج</div>
                        </div>
                        <h2>معلومات الزبون</h2> 

                        <div className="row justify-content-around mt-4 mb-2">
                            <div className="col-md-3">الاسم الكامل</div>
                            <div className="col-md-7"> 
                                <input required type="text" name="name" onChange={e=> setname(e.target.value)} id="" className='form-input w-100' placeholder='الاسم الكامل'/>
                            </div> 
                        </div>
                        <div className="row justify-content-around mt-4 mb-2">
                            <div className="col-md-3">رقم الهاتف</div>
                            <div className="col-md-7"> 
                                <input required type="number" min='213500000000' onChange={e=> setPhone(e.target.value)} className='w-100' max='213799999999' name="name" id="" placeholder='213*********'/>
                            </div>
                        </div>
                        <div className="row justify-content-around mt-4 mb-2">
                            <div className="col-md-3">ادخل الوﻻية</div>
                            <div className="col-md-7"> 
                                <input required type="text" name="name" id="" onChange={e=> setWelaya(e.target.value)} className='form-input w-100' placeholder='الوﻻية'/>
                            </div>
                        </div>
                        <div className="row justify-content-around mt-4 mb-2">
                            <div className="col-md-3">ادخل البلدية</div>
                            <div className="col-md-7"> 
                                <input required type="text" name="name" className='w-100' id="" onChange={e=> setRegion(e.target.value)} placeholder='البلدية'/>
                            </div>
                        </div>

                        <div className="row justify-content-center ">
                            <button type='submit' className="btn btn-purp w-50">تأكيد الطلبية</button>
                        </div>
                    </form>
                    <div className='pt-4' style={{borderTop:'2px solid white'}}>
                        <img src={ad_img} style={{width: "300px"}} class="fr-fic fr-dib" data-name="stores/031ea411a15fe6722075e67d725c4c26/others/ymiDwy18t5NnOeOLx6VTdECXhRJByvboXicUNoaN.png"/>
                    </div>
                </div>
            </div>
            {/* <div className="comments">
                <h2>مراجعة الزبائن</h2>
                <p className="text-secondary text-center mt-5">---------- أضف تقييمك ----------</p>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <button className='btn btn-purp'>إضافة تقييمك</button>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Hero
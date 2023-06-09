import React,{useState} from 'react'
import './SignUp.css'
import {db} from '../firebase.js';
import { setDoc ,doc, collection,addDoc,updateDoc} from 'firebase/firestore';
import {CircularProgress} from '@mui/material'


export default function WelcomeComponent(props){

    const [waitingSubmit,setWaitingSubmit] =useState(false)




    async function handleClick(event){
    
        try{
    
          event.preventDefault();
          const {firstName,LastName  , idNumber ,address ,fatherName, fatherPhone, motherName, motherPhone, schoolName ,grade ,disease ,diseaseExp,clinic,medicine,medicineExp} = event.target
          let student={}
          student['الاسم'] = firstName.value
          student['العائلة']=LastName.value
          student['رقم الهوية']=idNumber.value
          student['العنوان']=address.value
          student['اسم الأب']=fatherName.value
          student['رقم هاتف الأب']=fatherPhone.value
          student['اسم الام']=motherName.value
          student['رقم هاتف الام']=motherPhone.value
          student['اسم المدرسة']=schoolName.value
          student['الصف']=grade.value
          student['يعاني من مرض']=disease.value
          student['تعليل المرض']=diseaseExp.value
          student['عيادة الطالب']=clinic.value
          student['يحتاج ادوية']=medicine.value
          student['نوع الادوية']=medicineExp.value
          console.log('student obj')
          console.log(student)

          const userRef = doc(db, "users", idNumber.value)
          
          setWaitingSubmit(true)

          setDoc(userRef,student).then(()=>{
            //successfully registerd
            console.log('user added')
            alert('user added')
            setWaitingSubmit(false)

          }).catch(err=>{
            setWaitingSubmit(false)
            alert('user failed')

            console.log(err)
          })


    
    
      }catch(e){
    
          console.error(e)
    
    
      }
      }




    return(waitingSubmit? <CircularProgress size={"25px"} style={{marginTop:"20%",marginLeft:"3px"}} />: <div className='container'>
    <h1> التسجيل للمخيم الصيفي </h1>
    <form onSubmit={handleClick} style={{display:'flex',overflow:'auto',flexDirection:'column',flexWrap:'nowrap',width:'100%'}}>
    <div className='subDivStyle'
    ><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="firstName" />
    :اسم الطالب
  </label></div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="LastName" />
    :العائلة
  </label></div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="idNumber" />
    :رقم الهوية
  </label></div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="address" />
    :العنوان
  </label></div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="fatherName" />
    :اسم الاب
  </label></div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="fatherPhone" />
    :رقم هاتف الاب
  </label></div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="motherName" />
    :اسم الام
  </label></div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="motherPhone" />
    :رقم هاتف الام
  </label></div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="schoolName" />
    :اسم المدرسة
  </label></div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="grade" />
    :الصف
  </label></div>
  <div className='subDivStyle'>
    <h1>موافقة الأهل</h1>
  </div>
  <ul>
    <li>
    <br></br>
        <h4>اوافق على اشتراك ابني / ابنتي في المخيم*</h4>
    </li>
    <li>
    <br></br>

        <h4>ساعلم الادارة في حال غياب ابني *</h4>
    </li>
    <li>
    <br></br>

        <h4> مسؤولية احضار الطالب واعادته للمنزل تقع على الوالدين *</h4>
    </li>
    <li>
    <br></br>

        <h4>اوافق على اشتراك ابني / ابنتي في المخيم*</h4>
    </li>
  </ul>
  <div className='subDivStyle'>
  <h1>موافقة صحية </h1>
  </div>
  <div className="choosediv">
  <h2 style={{color:'red'}}>يعاني ابني من مشكلة صحية او حساسية معينه </h2>
  
  <label>
  نعم  <input className='chooseinput' type="radio" value="نعم" name="disease" /> 

  </label>
  
  <label>
  لا  <input className='chooseinput' type="radio" value="لا" name="disease" />

  </label>
  <h3>اذا اجبت بنعم علل</h3>
  <textarea className="resizableInput" name='diseaseExp'></textarea>
  

  </div>
  <div className='subDivStyle'><label >
    <input style={{display:'inline',padding:'10px',margin:'10px',textAlign:'right'}} type="text" name="clinic" />
    :العيادة التي يتبع لها الطالب
  </label></div>

  <div className="choosediv">
  <h2 style={{color:'red'}}> يستعمل ابني أدوية بشكل مستمر</h2>
  
  <label>
  نعم  <input className='chooseinput' type="radio" value="نعم" name="medicine" /> 

  </label>
  
  <label>
  لا  <input className='chooseinput' type="radio" value="لا" name="medicine" />

  </label>
  <h3>اذا اجبت بنعم علل</h3>
  <textarea className="resizableInput" name='medicineExp'></textarea>
  
  </div>

  <div className='subDivStyle'>
<button type='submit'>تسجيل</button>
  </div>
    </form>
   

 </div>)

}


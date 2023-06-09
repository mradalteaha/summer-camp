import React, { useState ,useEffect ,useContext } from 'react'
import { useLocation} from 'react-router-dom';
import '../components/SignUp.css'
import GlobalContext from '../context/Context'
import TableExportButton from './TableExportButton';
import { getDoc, getDocs,query ,onSnapshot,collection} from 'firebase/firestore';
import { db } from '../firebase';




export default function ShowData(props){
    const location = useLocation()
    const [userData,setUserData]=useState([])
    const {adminLog} = useContext(GlobalContext)


    const usersRef = collection(db,"users")

   
    const tableHead = ['رقم الهوية',"الاسم", "العائلة" ,'العنوان','اسم الأب','رقم هاتف الأب','اسم الام','رقم هاتف الام','اسم المدرسة'
  ,'الصف','يعاني من مرض','تعليل المرض','عيادة الطالب','يحتاج ادوية','نوع الادوية']
 
    console.log('printing the data')
    console.table(userData)


    const usersQuery = query(// query on firestore collection 
    collection(db,'users') 
);
  useEffect(()=>{ //onloading the page require all the requested chats for this user
      const unsubscribe = onSnapshot(usersQuery,(QuerySnapshot)=>{
          const parsedUsers = QuerySnapshot.docs.map(
              (doc)=>({
                  ...doc.data(),
              })
          )
          setUserData(parsedUsers)
      });

      return ()=> unsubscribe();
  },[])
  
   
  
  
    

    
    return (userData.length>0 && adminLog?
      <div>
        <TableExportButton tableId="myTable" fileName="myTable" />
        <table id="myTable">
          <thead>
        <tr>
          {tableHead.map(roName=> <th key={roName}>{roName}</th>)}
        </tr>
        </thead>
          <tbody>
            {userData.map((item) => (
              <tr key={item[tableHead[0].toString()]}>
              <td>{item[tableHead[0]].toString()}</td>
                <td>{item[tableHead[1]].toString()}</td>
                <td>{item[tableHead[2]].toString()}</td>
                <td>{item[tableHead[3]].toString()}</td>
                <td>{item[tableHead[4]].toString()}</td>
                <td>{item[tableHead[5]].toString()}</td>
                <td>{item[tableHead[6]].toString()}</td>
                <td>{item[tableHead[7]].toString()}</td>
                <td>{item[tableHead[8]].toString()}</td>
                <td>{item[tableHead[9]].toString()}</td>
                <td>{item[tableHead[10]].toString()}</td>
                <td>{item[tableHead[11]].toString()}</td>
                <td>{item[tableHead[12]].toString()}</td>
                <td>{item[tableHead[13]].toString()}</td>
                

                </tr>
            ))}
          </tbody>
        </table>
        </div>:<h1>loading</h1>
      );
}











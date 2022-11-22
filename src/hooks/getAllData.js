import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/firebase";

const useGetData = (collectionName) => {
    const [data, setData] = useState([])
    const getAllClinics = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, `${collectionName}`));
            const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setData(data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => { getAllClinics() }, [])
    return (data)
}



export default useGetData;
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { db } from "../components/firebase";

const useGetAllBranches = (collectionName, collectionId, specificId) => {

    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const q = query(collection(db, `${collectionName}`), where(`${collectionId}`, "==", specificId));
            getDocs(q).then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(data)
            })
        } catch (error) {
            alert(error.message)
        }

    }

    useEffect(() => { getData() }, [])
    return (data)
}

export default useGetAllBranches
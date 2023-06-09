import { useEffect, useState } from "react";
import { getAllEvent, getAllEventListByEra } from "../services/toursService";

const useTabData = (activeTab) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        try {
            let response;
            if (activeTab === 0) {
                response = await getAllEvent();
            }

            if (activeTab === 1) {
                response = await getAllEventListByEra();
            }

            // if (response.status !== "success") {
            //     throw new Error("Error while feching data");
            // }


            const responseData = await response?.data;
            console.log(responseData?.payload?.eraList?.eras, "Response data")
            let getData;


            if (activeTab === 0) {
                getData = responseData?.payload?.eventList?.results || [];
            }

            if (activeTab === 1) {
                getData = responseData?.payload?.eraList?.eras || [];
            }

            console.log(responseData, "response data");

            setData(getData);
        } catch (error) {
            console.warn(error);
        }

    };

    return data;
};

export default useTabData;

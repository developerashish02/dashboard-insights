/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import Table from "../dashboard/Table";
import "./Tabs.css";
import { setActiveTab } from "../../features/modal/tabSlice";
import { useEffect } from "react";
import { fetchData, fetchEventData } from "../../features/dashboard/dashboard";


const Tabs = ({ tabs }) => {
  const activeTab = useSelector((store) => store.tabs.value);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    if (activeTab === 0) { dispatch(fetchEventData()) }
    if (activeTab === 1) { dispatch(fetchData()) }
  }, [dispatch, activeTab]);


  const handleTabClick = (index) => {
    dispatch(setActiveTab(index));
  };


  return (
    <div className="tabs">
      <div className="tabs_items">
        {tabs?.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}  tabs_text`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="dashboard_table">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Tabs;

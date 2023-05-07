import "./tab.css"
import TabTitle from "./TabTitle.jsx";
import TabContent from "./TabContent.jsx";
import {useState} from "react";

function Tab() {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: 'Tab 1',
            content: 'content 1',
            isActive: true
        },
        {
            id: 2,
            title: 'Tab 2',
            content: 'content 2',
            isActive: false
        },
        {
            id: 3,
            title: 'Tab 3',
            content: 'content 3',
            isActive: false
        },
        {
            id: 4,
            title: 'Tab 4',
            content: 'content 4',
            isActive: false
        },
        {
            id: 5,
            title: 'Tab 5',
            content: 'content 5',
            isActive: false
        },
    ]);
    const makeActive = id => {
        const activeTab = tabs.findIndex(tab => tab.isActive)
        const newActiveTab = tabs.findIndex(tab => tab.id == id)
        const updateTabs = [...tabs];
        updateTabs[activeTab].isActive = false;
        updateTabs[newActiveTab].isActive = true;
        setTabs(updateTabs)
    }
    return (
        <div>
            {tabs.map((tab) => {
                return (<TabTitle key={tab.id} toggleActive={() => makeActive(tab.id)} titles={tab.title}/>)
            })}
            {tabs.map((tab) => {
                return (<TabContent key={tab.id} isActive={tab.isActive} content={tab.content}/>)
            })}
        </div>
    )
}

export default Tab;
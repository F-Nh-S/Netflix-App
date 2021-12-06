import React from 'react'
import { tabLabels } from './constant'
import "./Tabs.css"

const Tabs = ({ activeTabName, onClickTab }) => {
    const {
        CANCEL_AT_ANY_TIME,
        WATCH_ANY_WHERE,
        PICK_YOUR_PLANS
    } = tabLabels

    const renderTabTitle = (tabTitle, isActive, icon, id) => {
        <div onClick={() => onClickTab(tabTitle)} id={id} className={`tab-item ${isActive && "tab-border"}`}>
            <i className={icon}></i>
            <p>{tabTitle}</p>
        </div>
    }
    return (
        <>
            <section className="tabs">
                <div className="container">
                    {renderTabTitle(
                        CANCEL_AT_ANY_TIME,
                        activeTabName === CANCEL_AT_ANY_TIME,
                        "fas fa-door-open fa-3x",
                        "tab-1")}
                    {renderTabTitle(
                        WATCH_ANY_WHERE,
                        activeTabName === WATCH_ANY_WHERE,
                        "fas fa-tablet-alt fa-3x",
                        "tab-2")}
                    {renderTabTitle(
                        PICK_YOUR_PLANS,
                        activeTabName === PICK_YOUR_PLANS,
                        "fas fa-tags fa-3x",
                        "tab-3")} 
                </div>
            </section>

            {/* {activeTabName === CANCEL_AT_ANY_TIME && (
                <section className="tab-content">
                    <div className="container">
                        <div id="tab-1-content" className={`tab-content-tem ${activeTabName === CANCEL_AT_ANY_TIME && "show"}`}>
                             <p className="text-1g">
                                 
                             </p>
                             <Link to="/">
                             </Link>
                        </div>
                    </div>
                </section>
            )} */}
        </>
    )
}

export default Tabs

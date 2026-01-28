    import { getRandomZikr } from './azkar.js';

    chrome.runtime.onInstalled.addListener(() => {
        console.log("Azkar Extension Installed");
        
        chrome.alarms.create("azkarAlarm", { periodInMinutes: 5});
    });
    chrome.alarms.onAlarm.addListener((alarm) => {
        if (alarm.name === "azkarAlarm") {
            const zikr = getRandomZikr();
            
            chrome.notifications.create({
                type: "basic",
                iconUrl: "icon.png",
                title: "أذكر الله",
                message: zikr,
                priority: 2
            });
        }
    });
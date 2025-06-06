chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
      "id": 1,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "gore|explicit|violence|porn|drugs|abuse|blood|murder|death",
        "resourceTypes": ["main_frame"]
      }
    }],
    removeRuleIds: [1]
  });
});

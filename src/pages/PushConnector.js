const { SEPCPushConnector, SEPCPullConnector, pushListenTo, TCPEvents } = require('@everymatrix/om-connector');


// This will be handled outside of the connector
let lastAppliedEntityChangeBatchUuid;


class MyPushConnector extends SEPCPushConnector {
    notifyInitialDump(initialData) {
        console.log(initialData)
    }
    notifyEntityUpdates(updateData) {
        lastAppliedEntityChangeBatchUuid = updateData.batchUuid;
    }

    getLastAppliedEntityChangeBatchUuid() {
        return lastAppliedEntityChangeBatchUuid;
    }


}

let subscriptionId;
let subscriptionChecksum;
pushListenTo(TCPEvents.Subscribe, (subscribeData) => {
    subscriptionId = subscribeData.subscriptionId;
    subscriptionChecksum = subscribeData.subscriptionChecksum;
    console.log('subscribe', subscribeData)
  });
  
// After some processing
//pushConnector.stop();

// Start with resume process here
//pushConnector.startWithResume(subscriptionName, subscriptionId, subscriptionChecksum, lastAppliedEntityChangeBatchUuid);

export default MyPushConnector;
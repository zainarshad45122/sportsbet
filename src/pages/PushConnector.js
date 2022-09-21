const { SEPCPushConnector, SEPCPullConnector, pushListenTo, TCPEvents } = require('@everymatrix/om-connector');


// This will be handled outside of the connector



class MyPullConnector extends SEPCPullConnector {
    notifyInitialDump(initialData) {
        console.log(initialData)
    }
    notifyEntityUpdates(updateData) {
       
    }

  
}

// After some processing
//pushConnector.stop();

// Start with resume process here
//pushConnector.startWithResume(subscriptionName, subscriptionId, subscriptionChecksum, lastAppliedEntityChangeBatchUuid);

export default MyPullConnector;
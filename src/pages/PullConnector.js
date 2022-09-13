const { SEPCPushConnector, SEPCPullConnector, pushListenTo, TCPEvents } = require('@everymatrix/om-connector');


class MyPullConnector extends SEPCPullConnector {
    
    notifyInitialDump(initialData) {
        console.log(initialData)
    }

    // override method responsible for notifying
    // about new update messages
    notifyEntityUpdates(updateData) {
        // your own logic here
    }
}

export default MyPullConnector
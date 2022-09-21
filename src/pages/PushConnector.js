
import { SEPCPushConnector } from '@everymatrix/om-connector';


class LbPushConnector extends SEPCPushConnector

{

// variable where the last update batch uuid will be saved; use your own logic to save the latest processed update

lastChangeBatchUuid = null;


// override method responsible for notifying

// about new initial data messages

async notifyInitialDump(initialData)

{

console.log(initialData);

}


// override method responsible for notifying

// about new update messages

async notifyEntityUpdates(updateData)

{

console.log(updateData);

}


// return the last saved uuid as you see fit, in order to avoid re-subscription

getLastAppliedEntityChangeBatchUuid()

{

return this.lastChangeBatchUuid;

}

}

export default LbPushConnector;

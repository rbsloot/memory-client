import { Subscription } from 'rxjs/Subscription';

export function unsubscribeIfExists(subscription: Subscription) {
    if (subscription) {
        subscription.unsubscribe();
    }
}

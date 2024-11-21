/**
 * Sends a message to Workshop through the parent window
 */
export function sendMessageToWorkshop(message) {
    window.parent.postMessage(message, "*");
}
/**
 * Throws an error when a value isn't a `never` as expected. Used for guaranteeing exhaustive checks
 * and preventing further code from running when in an unexpected state.
 *
 * @param message A description of why a `never` type is expected.
 * @param value   The value that should be `never`.
 */
export function assertNever(message, value) {
    throw new Error(`assertNever condition failed: ${message} (${JSON.stringify(value)})`);
}
/**
 * Detect whether app is being iframed. Excludes Palantir Foundry's VS code workspaces for the purposes of development.
 */
export function isInsideIframe() {
    // some domains end in .com but some end in .co.uk 
    // TODO: need to check all foundry domains to make sure this can handle all of them
    if (window.self.location.origin.includes("containers.palantirfoundry.co")) {
        return false;
    }
    // Need try/catch since browsers can block access to window.top due to same origin policy. IE bugs also take place.
    try {
        return window.self !== window.top || window !== window.parent;
    }
    catch (e) {
        return true;
    }
}
/**
 * Given a Date object, returns the string representation of the date in format "yyyy-mm-dd"
 */
export function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

import { store } from "."
import { setContent } from "./scraperActions"

export const scrapWeb = (url: string) => {
  fetch('https://web-scraper-serve.herokuapp.com/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'markdown',
      url
    }) 
  })
  .then(response => response.body)
  .then(rb => {
    const reader = rb?.getReader();

    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader?.read().then( ({done, value}) => {
            // If there is no more data to read
            if (done) {
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            push();
          })
        }

        push();
      }
    });
  })
  .then(stream => {
    // Respond with our stream
    return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
  })
  .then(result => {
    store.dispatch(setContent(result))
    navigator.clipboard.writeText(result);
  });
}
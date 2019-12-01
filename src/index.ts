import url from "url";
import fetch from "unfetch";

const GITHUB_ZEN = "https://api.github.com/zen";

function isOnExampleDomain(): boolean {
  const currentPageUrl: string = document.URL;
  if (url.parse(currentPageUrl).host !== "example.com") {
    console.error("This bookmarklet can be used only on example.com.");
    return false;
  }
  return true;
}

function getYourNameFromPrompt(): string {
  return window.prompt("Enter your name:");
}

async function getZen(): Promise<string> {
  const response = await fetch(GITHUB_ZEN, {
    method: "GET"
  });
  return response.text();
}

function showYourZen(yourName: string, zen: string): void {
  window.alert(`${yourName}, this is your zen phrase. "${zen}"`);
}

(async (): Promise<void> => {
  if (!isOnExampleDomain()) {
    return;
  }
  const yourName = getYourNameFromPrompt();
  const zen = await getZen();
  showYourZen(yourName, zen);
})();

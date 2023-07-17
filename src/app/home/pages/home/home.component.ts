import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent  {

 url?: string = " ";

  autocompletarURL() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
      if (tabs && tabs.length > 0) {
        const currentURL = tabs[0].url;
        this.url = currentURL;
        console.log(currentURL);
      }
    });
  }



}

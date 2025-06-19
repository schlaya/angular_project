import { Component } from '@angular/core';

@Component({
  selector: 'switchCase',
  standalone: false,
  templateUrl: './switch-case.component.html',
  styles: [
    `
      .nav {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
      }

      .nav li {
        border-radius: 4px;
        overflow: hidden;
      }

      .nav a {
        display: block;
        padding: 8px 16px;
        text-decoration: none;
        background-color: #eee;
        color: #333;
        transition: background-color 0.3s, color 0.3s;
      }

      .nav li.active a,
      .nav a:hover {
        background-color: #007bff;
        color: white;
      }

      div {
        font-family: Arial, sans-serif;
        font-size: 14px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    `,
  ],
})
export class SwitchCaseComponent {
  viewMode = 'others';
}

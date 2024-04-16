import { Component, Input } from '@angular/core';

@Component({
  selector: 'description-line',
  standalone: true,
  imports: [],
  templateUrl: './description-line.component.html',
  styleUrl: './description-line.component.css'
})
export class DescriptionLineComponent {

  @Input() lines: string[] | undefined;
}

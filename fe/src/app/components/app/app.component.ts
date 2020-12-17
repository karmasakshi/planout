import { Component, OnInit } from '@angular/core';
import { MyExperiment } from '../../MyExperiment';

@Component({
  selector: 'fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public users = [
    { ctaText: 'GO!', ctaColor: 'warn', id: 11, name: 'Robert' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 28, name: 'Sylvia' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 32, name: 'Elena' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 47, name: 'Langdon' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 55, name: 'Jerry' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 105, name: 'Mary' }
  ];

  public ngOnInit(): void {

    for (let user of this.users) {

      let xp = new MyExperiment({ userId: user.id });

      user['ctaColor'] = xp.get('buttonColor', 'string');

      user['ctaText'] = xp.get('buttonText', 'string');

    }

  }

}

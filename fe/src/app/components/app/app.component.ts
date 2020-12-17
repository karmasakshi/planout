import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ConfigOptions } from 'src/app/interfaces/config-options';
import { ConfigService } from 'src/app/services/config/config.service';
import { MyExperiment } from '../../MyExperiment';

@Component({
  selector: 'fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private configService: ConfigService
  ) { }

  public users = [
    { ctaText: 'GO!', ctaColor: 'warn', id: 11, name: 'Robert' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 28, name: 'Sylvia' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 32, name: 'Elena' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 47, name: 'Langdon' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 55, name: 'Jerry' },
    { ctaText: 'GO!', ctaColor: 'warn', id: 105, name: 'Mary' }
  ];

  public ngOnInit(): void {

    this.configService.getConfigOptions().pipe(take(1)).subscribe(

      (response: ConfigOptions) => {

        for (let user of this.users) {

          let xp = new MyExperiment({ userId: user.id }, response);

          user['ctaColor'] = xp.get('buttonColor', 'string');

          user['ctaText'] = xp.get('buttonText', 'string');

        }

      }

    );

  }

}

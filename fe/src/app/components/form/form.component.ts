import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigOptions } from '../../interfaces/config-options';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'fe-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public configForm: FormGroup = this.formBuilder.group({
    ctaButtonColors: ['', [Validators.required]],
    ctaButtonTexts: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private configService: ConfigService
  ) { }

  public saveConfig(): void {

    let configOptions: ConfigOptions = {
      ctaButtonColors: this.configForm.value.ctaButtonColors.split(',').map((x: string) => x.trim()),
      ctaButtonTexts: this.configForm.value.ctaButtonTexts.split(',').map((x: string) => x.trim()),
    };

    this.configService.setConfigOptions(configOptions).subscribe(

      () => { alert('Saved!'); },

      (err: Error) => { alert('Error!'); }

    );

  }

}

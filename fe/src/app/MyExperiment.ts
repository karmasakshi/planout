import * as PlanOut from 'planout';
import { ConfigOptions } from './interfaces/config-options';

interface Identifier {
  userId: number;
}

interface Configuration {
  buttonColor: string;
  buttonText: string;
}

export class MyExperiment extends PlanOut.Experiment<Identifier, Configuration> {

  private configOptions: ConfigOptions = {
    ctaButtonColors: ['primary'],
    ctaButtonTexts: ['Let\'s Go!']
  };

  constructor(identifier: Identifier, configOptions: ConfigOptions) {

    super(identifier);

    this.configOptions = configOptions;

  }

  configureLogger(): void { return; }

  log(log: any): any { console.log(log); }

  previouslyLogged(): boolean { return this._exposureLogged; }

  setup(): any { this.setName('XP'); }

  getParamNames(): any { return this.getDefaultParamNames(); }

  assign(params: any, args: Identifier): any {

    params.set('buttonColor', new PlanOut.Ops.Random.UniformChoice({ choices: this.configOptions?.ctaButtonColors, unit: args.userId }));

    params.set('buttonText', new PlanOut.Ops.Random.WeightedChoice({ choices: this.configOptions?.ctaButtonTexts, weights: [2, 8], unit: args.userId }));

  }

}
